<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <DrivingTop />
    <!-- 展示路由组件的区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 底部全局组件 -->
    <DrivingBottom />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 100%;
  }
}
</style>