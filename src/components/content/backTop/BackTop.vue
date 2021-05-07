<template>
  <div class="back-top">
    <img src="~img/common/top.png" @click="backTop">
  </div>

</template>

<script>
export default {
  name: 'BackTop',
}
</script>

<style scoped>

  .back-top img{
    width: 35px;
    height: 35px;
    position: fixed;
    right: 10px;
    bottom: 60px;
    z-index: 9;
    background-color: #fff;
    border-radius: 60%;
  }
</style>>
