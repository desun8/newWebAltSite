<template>
  <ul class="insta-list">
    <list-item
      v-for="item in itemsList"
      :key="item.href"
      :src="item.src"
      :href="item.href"
      :type="item.type"
      :describe="item.describe"
    />
  </ul>
</template>

<script>
import ListItem from "./ListItem/ListItem.vue";

export default {
  name: "List",
  components: { ListItem },

  data() {
    return {
      itemsList: [],
    };
  },

  methods: {
    async fetchInstagram() {
      const url = "/api/instagram";

      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }

      const data = await response.json();

      this.itemsList = await data.results;
    },
  },

  mounted() {
    this.fetchInstagram().catch((error) =>
      console.error(
        "Блог -> Instagram -> List.vue -> ошибка получения постов инстаграма",
        error
      )
    );
  },
};
</script>

<style scoped lang="scss">
@use "../../../../../../styles/_config/index" as *;

.insta-list {
  @include list-unstyled();
  @include grid(3);

  width: fit-content;
  gap: vw(10);

  //noinspection CssInvalidMediaFeature
  @media screen and (--tablet-sm) {
    @include grid(2);
    width: 100%;
    gap: 10px;
  }
}
</style>
