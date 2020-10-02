<template>
  <ul class="insta-list">
    <list-item v-for="i in [1,2,3,4,5,6,7,8,9]" :key="i"/>
  </ul>
</template>

<script>
import ListItem from './ListItem/ListItem.vue';

export default {
  name: 'List',
  components: { ListItem }
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