<template>
  <div class="layout-head">
    <div class="logo pro-name">
      <span>夜精灵-聊天室</span>
    </div>
    <a-popover title="">
      <template #content>
        <div class="control-list">
          <a-list>
            <a-list-item><UserOutlined />个人中心</a-list-item>
            <a-list-item><LoginOutlined />退出登录</a-list-item>
          </a-list>
        </div>
      </template>
      <div class="user-info">
        <a-avatar></a-avatar>
        <span class="nick-name">SanPhantom</span>
      </div>
    </a-popover>
  </div>
</template>

<script>
import { UserOutlined, LoginOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    UserOutlined,
    LoginOutlined,
  },
};
</script>

<style lang="scss">
.layout-head {
  width: 100%;
  height: 60px;
  background-color: darkslateblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .pro-name {
    font-size: 30px;
    color: beige;
    font-family: "ZhengXinGe YingBi KaiShu";
  }
  .user-info {
    display: flex;
    align-items: center;
    position: relative;
    span {
      margin-left: 10px;
      color: #fff;
    }
  }
}
.control-list {
  .ant-list {
    .ant-list-item {
      cursor: pointer;
    }
  }
  .anticon {
    margin-right: 10px;
  }
}
@media screen and (max-width: 960px) {
    .user-info {
        span.nick-name {
            display: none;
        }
    }
}
</style>