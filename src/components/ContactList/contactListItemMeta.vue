<template>
  <div class="san-list-item-meta">
      <div class="meta-container">
        <slot></slot>
      </div>
      <div class="meta-direction">
          {{ meta }}
      </div>
  </div>
</template>

<script>
export default {
    name: 'san-list-item-meta',
    props: {
        meta: String,
    }
}
</script>

<style lang="scss">
.san-list-item-meta {
    width: 100%;
    display: flex;
    flex-direction: column;
    .meta-container, .meta-direction {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        user-select: none;
    }
    .meta-container {
        font-size: 15px;
        font-weight: bold;
        color: #333;
    }
    .meta-direction {
        font-size: 12px;
        color: #8c8c8c;
    }
}
</style>