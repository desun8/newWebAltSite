<template>
  <div class="filter__radio-wrapper">
    <input
      @change="onChange"
      :id="id"
      :value="value"
      :checked="checked"
      type="radio"
      :name="name"
      class="filter__radio"
    />
    <label :for="id" class="filter__item">{{ text }}</label>
  </div>
</template>

<script>
export default {
  name: "FilterItem",
  props: {
    value: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    handleChange: {
      type: Function,
      required: true,
    },
  },
  computed: {
    id: function () {
      return `filter-id-${this.value}-${Date.now() * Math.random()}`;
    },
  },
  methods: {
    onChange(e) {
      const { currentTarget: ct } = e;
      if (ct.checked) {
        console.log(ct.value, ct.checked);
        this.handleChange(ct.value);
      }
    },
  },
};
</script>
