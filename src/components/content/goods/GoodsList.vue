<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods"
      :key="index" :item="item"/>
  </div>
</template>

<script>
import GoodsItem from '@/components/content/goods/GoodsItem'


export default {
  name: 'GoodsList',
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
}
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }

</style>