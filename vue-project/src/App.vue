<script setup>

</script>

<template>
  <router-view></router-view>

</template>

<style lang="scss">
.screen-wrapper {
  height: 100%;
  width: 100%;

  .screen {
    display: inline-block;
    width: 1912px; //设计稿的宽度
    height: 958px; //设计稿的高度
    transform-origin: 0 0;
    position: absolute;
    left: 0;
  }
}
</style>
