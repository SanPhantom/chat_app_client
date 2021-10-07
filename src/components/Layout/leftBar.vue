<template>
  <div class="socket-list">
    <div class="san-tabs">
      <div
        class="san-tab-pane"
        :class="activeKey == 0 ? 'active' : ''"
        @click="activeKey = 0"
      >
        <span>消息</span>
      </div>
      <div
        class="san-tab-pane"
        :class="activeKey == 1 ? 'active' : ''"
        @click="activeKey = 1"
      >
        <span>联系人</span>
      </div>
    </div>
    <div class="san-pane">
      <contact-list :dataSource="listData">
        <template #renderItem="{ item }">
          <contact-list-item>
            <template #avatar>
              <a-avatar :size="35" shape="square" :src="item.picUrl"></a-avatar>
            </template>
            <template #container>
              <contact-list-item-meta :meta="item.meta">{{ item.name }}</contact-list-item-meta>
            </template>
            <template #right>
              <span>{{ sanTime.showTime(item.time) }}</span>
              <a-badge count="25"></a-badge>
            </template>
          </contact-list-item>
        </template>
      </contact-list>
    </div>
  </div>
</template>

<script>
import ContactList from "../ContactList/contactList.vue";
import ContactListItem from "../ContactList/contactListItem.vue";
import ContactListItemMeta from "../ContactList/contactListItemMeta.vue";
export default {
  data() {
    return {
      activeKey: "1",
      listData: [
        { name: "SanPhantom", time: "2021-09-01 23:08:59", meta: '这就是一段废话这就是一段废话这就是一段废话', picUrl: 'https://w.wallhaven.cc/full/6k/wallhaven-6kx98x.png' },
        { name: "SanPhantom", time: "2021-10-05 23:08:59", meta: '这就是一段废话', picUrl: 'https://w.wallhaven.cc/full/6k/wallhaven-6kx98x.png' },
        { name: "SanPhantom", time: "2020-11-01 23:08:59", meta: '这就是一段废话', picUrl: 'https://w.wallhaven.cc/full/6k/wallhaven-6kx98x.png' },
        { name: "SanPhantom", time: "2021-10-07 00:08:59", meta: '这就是一段废话', picUrl: 'https://w.wallhaven.cc/full/6k/wallhaven-6kx98x.png' },
        { name: "SanPhantom", time: "2021-10-06 00:08:59", meta: '这就是一段废话', picUrl: 'https://w.wallhaven.cc/full/6k/wallhaven-6kx98x.png' },
      ],
    };
  },
  props: {
    isOpen: Boolean,
  },
  components: {
    ContactList,
    ContactListItem,
    ContactListItemMeta
  },
};
</script>

<style lang="scss">
.socket-list {
  width: 100%;
  overflow: hidden;
  .san-tabs {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    .san-tab-pane {
      flex: 1;
      height: 100%;
      text-align: center;
      line-height: 45px;
      font-weight: bold;
      font-family: "ZhengXinGe YingBi KaiShu";
      cursor: pointer;
      padding: 0 10px;
      position: relative;
      margin-bottom: 10px;
      & + .san-tab-pane {
        &::before {
          content: "";
          position: absolute;
          display: block;
          width: 1px;
          height: 60%;
          background-color: grey;
          top: 20%;
          left: -1px;
        }
      }
      &.active {
        color: darkslateblue;
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background-color: darkslateblue;
        }
      }
    }
  }
}
</style>