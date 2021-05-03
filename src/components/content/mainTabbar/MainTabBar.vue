<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" >
        <template #item-icon>
          <img src="@/assets/img/tabbar/home.png" alt="">
        </template>
        <template #item-icon1>
          <img src="@/assets/img/tabbar/home1.png" alt="">
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" >
        <template #item-icon>
          <img src="@/assets/img/tabbar/category.png" alt="">
        </template>
        <template #item-icon1>
          <img src="@/assets/img/tabbar/category1.png" alt="">
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" >
        <template #item-icon>
          <img src="~img/tabbar/cart.png" alt="">
        </template>
        <template #item-icon1>
          <img src="~img/tabbar/cart1.png" alt="">
        </template>
        <template #item-text>
         <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/mine" >
        <template #item-icon>
          <img src="@/assets/img/tabbar/mine.png" alt="">
        </template>
        <template #item-icon1>
          <img src="@/assets/img/tabbar/mine1.png" alt="">
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem,
  }
} 
</script>

<style>

</style>