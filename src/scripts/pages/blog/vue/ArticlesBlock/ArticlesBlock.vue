<template>
  <div v-if="itemsList.length" ref="list" class="blog-list-wrap">
    <list :item-list="filteredList" />
    <btn-load-more v-show="!isLoadAll" :on-load="loadMore" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import List from "./List/List.vue";
import BtnLoadMore from "./BtnLoadMore.vue";

type Article = {
  id: number;
  type: "event" | "article";
  date: string;
  title: string;
  describe: string;
  img: string;
  href: string;
};

type ArticleList = Array<Article>;

type SortedArticleList = Map<string, ArticleList>;

enum FilterTypes {
  ALL = "all",
  EVENT = "event",
  ARTICLE = "article",
}

type Data = {
  initSize: number;
  currSize: number;
  isLoadAll: boolean;
  itemsList: ArticleList | [];
};

const INIT_SIZE = 15;

export default defineComponent({
  name: "ArticlesBlock",
  components: {
    BtnLoadMore,
    List,
  },
  data(): Data {
    return {
      initSize: INIT_SIZE,
      currSize: INIT_SIZE,
      isLoadAll: false,
      itemsList: [],
    };
  },

  props: {
    activeFilter: {
      type: String,
      required: true,
      validator: (value: string) => {
        switch (value) {
          case FilterTypes.ALL:
          case FilterTypes.EVENT:
          case FilterTypes.ARTICLE:
            return true;
          default:
            return false;
        }
      },
    },
    setContentListElm: {
      type: Function as PropType<(a: Element) => void>,
      required: true,
    },
  },

  computed: {
    eventItemsList(): ArticleList {
      return this.itemsList.filter((item) => item.type === FilterTypes.EVENT);
    },

    articleItemsList(): ArticleList {
      return this.itemsList.filter((item) => item.type === FilterTypes.ARTICLE);
    },

    filteredList(): Map<string, ArticleList> {
      let filtered = new Map();
      const activeFilter = this.activeFilter;
      let articlesList: ArticleList;
      let sortedArticlesList: SortedArticleList;

      switch (activeFilter) {
        case FilterTypes.EVENT:
          articlesList = this.eventItemsList;
          break;
        case FilterTypes.ARTICLE:
          articlesList = this.articleItemsList;
          break;
        case FilterTypes.ALL:
        default:
          articlesList = this.itemsList;
          break;
      }

      if (this.itemsList.length > this.currSize) {
        articlesList = articlesList.slice(0, this.currSize);
        this.isLoadAll = false;
      } else {
        this.isLoadAll = true;
      }

      if (articlesList.length === 0) return filtered;

      sortedArticlesList = this.sortByDate(articlesList);

      if (activeFilter === "all") return sortedArticlesList;

      for (const date of sortedArticlesList.keys()) {
        const articles = sortedArticlesList.get(date)!;
        const filteredArticles = articles.filter((article) => {
          return article.type === activeFilter;
        });

        filtered.set(date, filteredArticles);
      }

      return filtered;
    },
  },

  methods: {
    sortByDate(articles: ArticleList) {
      const createKey = (date: string) => date.slice(0, 7); // yyyy-mm
      const collection: Map<string, ArticleList> = new Map();

      articles.forEach((item) => {
        const key = createKey(item.date);

        if (collection.has(key)) {
          const tmp = collection.get(key)!;
          collection.set(key, [...tmp, item]);
        } else {
          collection.set(key, [item]);
        }
      });

      return collection;
    },

    async fetchArticles() {
      const url = "/api/blog";

      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }

      const data = await response.json();

      this.itemsList = await data.results;
    },

    loadMore() {
      this.currSize = this.currSize + this.initSize;
    },
  },

  watch: {
    activeFilter(prev, curr) {
      console.log("filter change");
      console.log(prev);
      console.log(curr);
      this.currSize = this.initSize;
    },
  },

  beforeMount() {
    this.fetchArticles().catch((error: Error) =>
      console.error(
        "Блог -> ArticlesBlock.vue -> ошибка получения списка статей",
        error
      )
    );
  },

  mounted() {
    setTimeout(() => {
      if (this.$refs.list) {
        this.setContentListElm(this.$refs.list as Element);
      }
    }, 100);
  },
});
</script>
