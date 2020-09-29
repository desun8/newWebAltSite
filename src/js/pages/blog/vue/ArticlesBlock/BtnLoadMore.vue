<template>
  <button @click="onLoad" class="blog-btn-more" type="button">Показать еще</button>
</template>

<script>
export default {
  name: 'BtnLoadMore',
  props: {
    onLoad: {
      type: Function,
      required: true
    }
  }
};
</script>
