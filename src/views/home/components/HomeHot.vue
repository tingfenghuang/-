<template>
    <HomePanel title="人气推荐" sub-title="爆款推荐 不容错过">
        <template #default>
            <ul class="goods-list">
                <li v-for="item in hotList" :key="item.id">
                    <RouterLink to="/">
                        <img v-img-lazy="item.picture" alt="" />
                        <p class="name">{{ item.title }}</p>
                        <p class="desc">{{ item.alt }}</p>
                    </RouterLink>
                </li>
            </ul>

        </template>
    </HomePanel>
    <!-- 下面是插槽主体内容模版
  
  -->
</template>
<script setup>
import { ref, onMounted } from 'vue'
import HomePanel from './HomePanel.vue'
import { getHot } from '@/apis/home'
const hotList = ref([])
onMounted(async () => {
    const res = await getHot()
    hotList.value = res.result
})

</script>


<style scoped lang='scss'>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;

    li {
        width: 306px;
        height: 406px;

        background: #f0f9f4;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .desc {
            color: #999;
            font-size: 18px;
        }
    }
}
</style>