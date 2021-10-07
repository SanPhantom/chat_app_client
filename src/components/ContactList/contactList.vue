<template>
  <div class="san-list">
    <template v-for="(item, index) in dataSource" :key="index">
      <slot name="renderItem" :item="item" :index="index" ></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: "contact-list",
  data() {
    return {};
  },
  props: {
    dataSource: Array,
  },
  methods: {

  },
  mounted() {
    console.log(this.dataSource)
  }
};
</script>

<style lang="scss">
.san-list {
  padding: 0 15px;
}
</style>>