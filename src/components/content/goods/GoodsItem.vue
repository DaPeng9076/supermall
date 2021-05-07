<template>
  <div class='goods-item'>
    <a :href="item.link">
      <img :src="item.show.img" alt="">
    </a> 
    <div class="goods-info">
      <p>{{item.title}}</p>
      <span class="price">{{item.orgPrice+''}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },

 }
</script>

<style scoped>
  .goods-item{
    width: 47%;
    height: auto;
    display: inline-block;

  }
  .goods-item img{
    width: 100%;
    height: auto;
    border-radius: 4%;
  }
  .goods-item p{
    white-space: nowrap; 
    overflow: hidden;
    text-overflow:ellipsis;
    margin-bottom: 3px;
  }
  .goods-info{
    font-size: 12px;
    bottom: 5px;
    left: 0;
    right: 0;
    margin-bottom: 10px;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
    .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~img/common/collect.png") 0 0/14px 14px;
  }
</style>