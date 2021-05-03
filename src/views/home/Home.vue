<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners.list" />
    <home-recommend :recommend="recommend.list"/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from '@/views/home/childComps/HomeSwiper'
import HomeRecommend from '@/views/home/childComps/HomeRecommend'

import {getHomeMultidata} from 'network/home'

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
  },
  data() {
    HomeSwiper
    return {
      banners:[],
      recommend:[],
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.recommend = res.data.recommend;
      this.banners = res.data.banner ;
    })
  },
}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
  }
</style>