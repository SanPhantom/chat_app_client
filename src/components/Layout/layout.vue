<template>
  <div class="san-layout">
    <Head></Head>
    <div class="layout-container">
      <div class="left-bar" :style="{ width: leftWidth + 'px' }">
        <LeftBar :isOpen="isOpen" />
        <div class="left-bar-control" @click="() => judgeShowLeftBar()">
          <DoubleRightOutlined v-if="!isOpen" />
          <DoubleLeftOutlined v-else />
        </div>
      </div>
      <!-- <div class="resize" id="resize-control"></div> -->
      <div class="right-bar">
        <right-info></right-info>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "./head.vue";
import Footer from "./footer.vue";
import LeftBar from "./leftBar.vue";
import RightInfo from "./rightInfo.vue";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons-vue";
export default {
  data() {
    return {
      leftWidth: 0,
      // maxLeftWidth: 450,
      defaultLeftWidth: document.body.clientWidth < 720 ? document.body.clientWidth * 0.8 : 320,
      isOpen: false,
    };
  },
  props: [],
  components: {
    Head,
    Footer,
    LeftBar,
    RightInfo,
    DoubleLeftOutlined,
    DoubleRightOutlined,
  },
  methods: {
    initResize() {
      this.defaultLeftWidth = document.body.clientWidth < 720 ? document.body.clientWidth * 0.8 : 320;
      this.leftWidth = this.isOpen ? this.defaultLeftWidth : 0;
      // console.log(screen.width, this.leftWidth)
    },
    judgeShowLeftBar() {
      console.log(this.isOpen)
      this.leftWidth = this.isOpen ? 0 : this.defaultLeftWidth;
      this.isOpen = !this.isOpen;
    }
  },
  mounted() {
    // console.log(screen.width)
    window.addEventListener('resize',this.initResize); 
  },
  beforeUnmount() {
    window.removeEventListener("resize",this.listenResize);
  }
};
</script>

<style lang="scss">
.san-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .layout-container {
    flex: 1;
    display: flex;
    min-height: 10px;
    .left-bar {
      width: 320px;
      height: 100%;
      background-color: #eaeaea;
      // overflow: hidden;
      position: relative;
      &-control {
        width: 20px;
        height: 80px;
        border-radius: 0 10px 10px 0;
        cursor: pointer;
        background-color: darkslateblue;
        text-align: center;
        line-height: 80px;
        color: #eaeaea;
        position: absolute;
        right: -20px;
        top: 50%;
        margin-top: -40px;
        z-index: 99;
      }
    }
    .right-bar {
      flex: 1;
    }
  }
}
@media screen and (max-width: 720px) {
  .layout-container {
    .left-bar {
      width: 80%;
      height: calc(100vh - 60px - 25px) !important;
      position: absolute !important;
      z-index: 99;
    }
    .resize {
      display: none;
    }
  }
}
</style>