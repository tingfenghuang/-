<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>
<script setup>
import { ref,reactive,onMounted,computed } from 'vue'
import { getDetailHot } from '@/apis/detail'
import { useRoute } from 'vue-router'
const props= defineProps({
   hotType:{
       type:Number,
       default:1
   },

})
const route = useRoute()
const params = reactive({
    id: route.params.id,
    type:props.hotType
})
const hotList =ref([])
const typMap = {
    1: '24小时热销榜',
    2: '周热销榜',
}
const title= computed(()=>{
    return typMap[props.hotType]
})


const useGetDetailHot = () => {
    getDetailHot(params).then(res => {
        if (res.code === '1') {
            hotList.value = res.result
            console.log(hotList.value)
        } else {
            ElMessage.error(res.msg)
        }
    })
}
onMounted(() => {
    useGetDetailHot()
})
</script>



<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>