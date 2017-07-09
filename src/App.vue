<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.router-view {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #e5e5e5;
  overflow: hidden;
}
</style>
