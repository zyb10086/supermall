<template>
  <swiper>
      <swiper-item  v-for="item in banner" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'common/swiper/index'
  export default {
    name: 'HomeSwiper',
    props: {
      banner:{
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>>

<style scoped>

</style>>