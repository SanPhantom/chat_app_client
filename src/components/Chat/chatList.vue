<template>
  <div class="san-chat-list" :data-senderId="sender">
    <template v-for="item in list" :key="item.chat_uid">
      <div class="san-chat-list-item"
        :class="{self: item.sender.user_id == sender}"
      >
        <div class="item-avatar">
          <a-avatar :size="42" shape="square" :src="item.picUrl"></a-avatar>
        </div>
        <div class="item-info">
          <div class="info-meta">
            <span class="nick-name">{{ item.sender.nickName }}</span>
            <span class="time">{{ item.time }}</span>
          </div>
          <div class="info-content"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "san-chat-list",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    sender: String,
  },
};
</script>

<style lang="scss">
.san-chat-list {
  .san-chat-list-item {
    width: 100%;
    display: flex;
    align-items: flex-start;
    & + .san-chat-list-item {
      margin-top: 15px;
    }
    .item-info {
      margin: 0 10px;
      .info-meta {
        font-size: 12px;
        display: flex;
        align-items: center;
        .nick-name {
          display: inline-block;
          color: #732e7e;
          margin: 0 8px;
          max-width: 100px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .time {
          color: #c1d0ae;
        }
      }
      .info-content {
        width: 240px;
        height: 120px;
        background-color: chocolate;
        border-radius: 0 10px 10px 10px;
      }
    }
    &.self {
      justify-content: flex-start;
      flex-direction: row-reverse;
      .item-info {
        .info-meta {
          // text-align: right;
          // display: flex;
          flex-direction: row-reverse;
        }
        .info-content {
          border-radius: 10px 0 10px 10px;
        }
      }
    }
  }
}
</style>