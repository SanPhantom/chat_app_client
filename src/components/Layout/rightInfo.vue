<template>
  <div class="right-info">
    <div class="chat-top">
      <span class="chat-obj">web前端——内部聊天群</span>
      <MenuOutlined :style="{fontSize: '20px', cursor: 'pointer'}" />
    </div>
    <div class="chat-content">
      <chat-list :list="chat_list" :sender="sender"></chat-list>
    </div>
    <div class="chat-bottom"></div>
  </div>
</template>

<script>
import {MenuOutlined} from '@ant-design/icons-vue';
import ChatList from '../Chat/chatList.vue';
import {v4 as uuidv4} from 'uuid';
let sender = uuidv4();
let revicer = uuidv4();
export default {
  name: "right-info",
  data() {
    return {
      sender: sender,
      chat_list: Array(10).fill(0).map(() => {
        let flag = Math.random() < 0.5;
        console.log(this.sender ,  this.revicer);
        return {
          chat_uid: uuidv4(),
          sender: {
            nickName: 'SanPhantomSanPhantom',
            user_id: flag ? sender : revicer,
          },
          receiver: {
            nickName: '风的自由',
            user_id: !flag ? sender : revicer,
          },
          time: '2021-09-09 22:12:11',
          content: {}
        }
      })
    }
  },
  components: {
      MenuOutlined,
      ChatList
  }
};
</script>

<style lang="scss">
.right-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  .chat {
    &-top {
      width: 100%;
      height: 60px;
      background-color: chartreuse;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      .chat-obj {
        font-size: 20px;
        font-weight: bold;
        font-family: "ZhengXinGe YingBi KaiShu";
      }
    }
    &-content {
      flex: 1;
      width: 100%;
      overflow-y: auto;
        padding: 10px;
    }
    &-bottom {
      width: 100%;
      height: 45px;
      background-color: chartreuse;
    }
  }
}
</style>