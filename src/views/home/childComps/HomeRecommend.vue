<template>
  <div class="home-recommend">
    <div v-for="(item,index) in recommend" :key="index" class="home-recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },

}
</script>

<style>
  .home-recommend {
    display:flex ;
    width:100% ;
    text-align: center ;
    padding: 10px 0 20px ;
    border-bottom: 8px solid #eee;
  }
  .home-recommend-item {
    flex:1;
  }
  .home-recommend-item img {
    width:80px ;
    height: 80px ;
    margin-bottom: 10px;
  }
</style>