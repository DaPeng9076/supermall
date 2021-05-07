<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <scroll class="content" 
      ref="scroll" 
      :probe-type="3" 
      @scroll='contentScroll'
      :pull-up-load="true" 
      @pullUpLoad='pullUpLoad'>
      <home-swiper class="home-swiper" :banners="banners.list" />
      <home-recommend :recommend="recommend.list"/>
      <feature-view/>
      <tab-control :title="['流行', '新款','精选']" class="tabContron" @changeType="changeType"/>
      <goods-list :goods="goods[type].list"/>
    </scroll>
    <back-top class="back-top" @click="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import HomeSwiper from '@/views/home/childComps/HomeSwiper'
import HomeRecommend from '@/views/home/childComps/HomeRecommend'
import FeatureView from '@/views/home/childComps/FeatureView'

import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import BackTop from '@/components/content/backTop/BackTop'
import Scroll from '@/components/common/scroll/Scroll'


import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
  name:'Home',
  components:{
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    NavBar,
    GoodsList,
    TabControl,
    BackTop,
    Scroll
  },
  data() {
    return {
      banners:[],
      recommend:[],
      goods:{
        'pop':{page:0, list: []},
        'new':{page:0, list: []},
        'sell':{page:0, list: []},
      },
      type:'pop',
      isShowBackTop: false,
    }
  },
  created() {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 事件监听相关
     */
    changeType(index){
      if(index==0) this.type='pop'
      else if(index==1) this.type='new'
      else this.type='sell'
    },
    contentScroll(position){
      // console.log(position);
      if(position.y < -1000) this.isShowBackTop = true ;
      else this.isShowBackTop = false ;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0,0,500);
    },
    pullUpLoad() {
      this.getHomeGoods(this.type);
      this.$refs.scroll.scroll.refresh();
    },
    /**
     * 网络请求相关
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.recommend = res.data.recommend;
        this.banners = res.data.banner ;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1 ;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
     })
    },
    
  }
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  #home{
    padding-top: 44px;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }

  .content{
    height: calc( 100vh - 93px);
    overflow: hidden;
  }

  
</style>