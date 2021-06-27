<template>
  <div v-if="articlesList" class="blog-list-wrap">
    <list :item-list="filteredList"/>
    <btn-load-more v-show="!isLoadAll" :on-load="requestJson"/>
  </div>
</template>

<script>
import List from './List/List.vue';
import BtnLoadMore from './BtnLoadMore.vue';

const json = [
  [
    {
      id: 0,
      type: 'event', // event | article
      date: '2020-09-22', // yyyy-mm-dd
      title: 'Что такое коллтрекинг? И почему без него вся ваша реклама не имеет смысла?',
      describe: 'Итак, панацея от неэффективного продвижения в интернете — коллтрекинг 📞',
      img: './images/_dev-test-img.jpg',
      href: '#'
    },
    {
      id: 1,
      type: 'event', // event | article
      date: '2020-09-20', // yyyy-mm-dd
      title: 'Тем, кто любит учиться не страшен никакой вирус!',
      describe: 'Нам всё-таки удалось собрать самых отважных 32 человека!🔥',
      img: './images/_dev-test-img.jpg',
      href: '#'
    },
    {
      id: 2,
      type: 'article', // event | article
      date: '2020-09-12', // yyyy-mm-dd
      title: 'Разработка индивидуальных сайтов',
      describe: 'Сколько стоит сайт?💰 Вопрос, на который все хотят услышать четкий ответ.',
      img: './images/_dev-test-img.jpg',
      href: '#'
    },
  ],
  [
    {
      id: 3,
      type: 'event', // event | article
      date: '2020-09-02', // yyyy-mm-dd
      title: 'Что такое коллтрекинг? И почему без него вся ваша реклама не имеет смысла?',
      describe: 'Итак, панацея от неэффективного продвижения в интернете — коллтрекинг 📞',
      img: './images/_dev-test-img.jpg',
      href: '#'
    },
    {
      id: 4,
      type: 'event', // event | article
      date: '2020-08-22', // yyyy-mm-dd
      title: 'Что такое коллтрекинг? И почему без него вся ваша реклама не имеет смысла?',
      describe: 'Итак, панацея от неэффективного продвижения в интернете — коллтрекинг 📞',
      img: './images/_dev-test-img.jpg',
      href: '#'
    },
    {
      id: 5,
      type: 'article', // event | article
      date: '2020-08-12', // yyyy-mm-dd
      title: 'Что такое коллтрекинг? И почему без него вся ваша реклама не имеет смысла?',
      describe: 'Итак, панацея от неэффективного продвижения в интернете — коллтрекинг 📞',
      img: './images/_dev-test-img.jpg',
      href: '#'
    }
  ],
  [
    {
      id: 6,
      type: 'article', // event | article
      date: '2020-08-10', // yyyy-mm-dd
      title: 'Что такое коллтрекинг? И почему без него вся ваша реклама не имеет смысла?',
      describe: 'Итак, панацея от неэффективного продвижения в интернете — коллтрекинг 📞',
      img: './images/_dev-test-img.jpg',
      href: '#'
    },
    {
      id: 7,
      type: 'event', // event | article
      date: '2020-08-02', // yyyy-mm-dd
      title: 'Что такое коллтрекинг? И почему без него вся ваша реклама не имеет смысла?',
      describe: 'Итак, панацея от неэффективного продвижения в интернете — коллтрекинг 📞',
      img: './images/_dev-test-img.jpg',
      href: '#'
    },
    {
      id: 8,
      type: 'article', // event | article
      date: '2020-07-22', // yyyy-mm-dd
      title: 'Что такое коллтрекинг? И почему без него вся ваша реклама не имеет смысла?',
      describe: 'Итак, панацея от неэффективного продвижения в интернете — коллтрекинг 📞',
      img: './images/_dev-test-img.jpg',
      href: '#'
    },
  ],
  [
    {
      id: 9,
      type: 'article', // event | article
      date: '2020-07-22', // yyyy-mm-dd
      title: 'Что такое коллтрекинг? И почему без него вся ваша реклама не имеет смысла?',
      describe: 'Итак, панацея от неэффективного продвижения в интернете — коллтрекинг 📞',
      img: './images/_dev-test-img.jpg',
      href: '#'
    },
    {
      id: 10,
      type: 'article', // event | article
      date: '2020-07-22', // yyyy-mm-dd
      title: 'Что такое коллтрекинг? И почему без него вся ваша реклама не имеет смысла?',
      describe: 'Итак, панацея от неэффективного продвижения в интернете — коллтрекинг 📞',
      img: './images/_dev-test-img.jpg',
      href: '#'
    },
    {
      id: 11,
      type: 'event', // event | article
      date: '2020-07-05', // yyyy-mm-dd
      title: 'Что такое коллтрекинг? И почему без него вся ваша реклама не имеет смысла?',
      describe: 'Итак, панацея от неэффективного продвижения в интернете — коллтрекинг 📞',
      img: './images/_dev-test-img.jpg',
      href: '#'
    },
  ]
];
const createDateKey = (date) => date.slice(0, 7); // yyyy-mm

export default {
  name: 'ArticlesBlock',
  components: {
    BtnLoadMore,
    List
  },
  data() {
    return {
      count: 0,
      isLoadAll: false,
      articlesList: undefined
    };
  },

  props: {
    activeFilter: {
      type: String,
      required: true,
      validator(value) {
        switch (value) {
          case 'all':
          case 'event':
          case 'article':
            return true;
          default:
            return false;
        }
      }
    }
  },

  computed: {
    filteredList() {
      if (this.activeFilter === 'all') return this.articlesList;

      let filtered = {};

      for (const key in this.articlesList) {
        if (this.articlesList.hasOwnProperty(key)) {
          const arr = this.articlesList[key]
              .filter(elm => elm.type === this.activeFilter || elm.type === "subscribes");

          filtered = { ...filtered, [key]: arr };
        }
      }

      return filtered;
    }
  },

  methods: {
    requestJson() {
      if (this.isLoadAll) {
        return;
      }

      const res = json[this.count];
      this.count += 1;

      if (this.count >= json.length) {
        this.isLoadAll = true;
      }


      if (this.articlesList === undefined) {
        this.articlesList = {};
      }

      res.forEach((item, index) => {
        const key = createDateKey(item.date);

        if (this.articlesList[key] === undefined) {
          this.articlesList = {
            ...this.articlesList,
            [key]: []
          };
        }

        this.articlesList = {
          ...this.articlesList,
          [key]: [...this.articlesList[key], item]
        };

        if (index === res.length - 2) {
          this.articlesList = {
            ...this.articlesList,
            [key]: [...this.articlesList[key], { id: Date.now() + "subscribes", type: "subscribes" }]
          };
        }
      });
    }
  },

  beforeMount() {
    this.requestJson();
  }
};
</script>