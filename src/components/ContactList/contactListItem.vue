<template>
  <div class="san-list-item">
      <div class="san-list-item-avatar">
          <!-- 列表左侧图片头像展示区 -->
          <slot name="avatar"></slot>
      </div>
      <div class="san-list-item-info">
          <div class="info-container">
              <slot name="container"></slot>
          </div>
          <div class="info-need">
              <slot name="right"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'san-list-item',
    data() {
        return {

        }
    },
    props: {
    }
}
</script>

<style lang="scss">
.san-list-item {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 15px;
    height: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &+.san-list-item {
        border-top: 1px solid #666;
    }
    &:hover {
        background-color: #bdc3c7;
    }
    &-info {
        margin-left: 10px;
        min-width: 10px;
        display: flex;
        flex: 1;
        align-items: center;
        .info-container {
            min-width: 10px;
            flex: 1;
        }
        .info-need {
            font-size: 12px;
            width: 80px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    }
}
</style>