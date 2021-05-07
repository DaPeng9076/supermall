<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll:null,
    }
  },
  props:{
    probeType: {
      type: Number,
      default: 0 ,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    }
    
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      click:true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
    })
    this.scroll.on('scroll', position => {
      // console.log(position);
      this.$emit('scroll',position) ;
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullUpLoad') ;
      setTimeout(() => {
        this.scroll.finishPullUp()
      },2000)
    })
    this.scroll.refresh();
  },
  methods: {
    scrollTo(x,y,time=500) {
      this.scroll.scrollTo(x,y,time);
    }
  }
}
</script>

<style scoped>

</style>