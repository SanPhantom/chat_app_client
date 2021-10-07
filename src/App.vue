<template>
  <a-config-provider :locale="zh_CN">
      <Layout />
  </a-config-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import Layout from './components/Layout/layout.vue'

export default {
  name: "app",
  data() {
    return {
      zh_CN,
    };
  },
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
// @import "./assets/fonts/font.css";

</style>
