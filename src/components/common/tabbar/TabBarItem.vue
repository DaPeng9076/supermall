<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="active">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon1"></slot>
      </div>
      <div :style="activeStyle"> 
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script scoped>
export default {
  name:"TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path);
      // console.log(this.path)
    }
  },
  computed:{
    active(){
      // return this.$route.path==this.path;
      return this.$route.path.indexOf(this.path)==-1;
    },
    activeStyle(){
      return this.active?{}:{color:this.activeColor};
    }
  }
}
</script>

<style>
  .tab-bar-item{
    flex:1;
    text-align: center ;
    height:49px;
  }
  .tab-bar-item img{
    width: 20px;
    height: 20px;
  }
  /* .active{
    color:red;
  } */
</style>