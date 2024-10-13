<template>
    <div class="home-categroy">
        <ul class="menu">
            <li v-for="item in categoryList" :key="item.id">
                <RouterLink to="/">{{ item.name }}</RouterLink>
                <RouterLink to="/" v-for="item_ in item.children.slice(0, 2)" :key="item_.id">{{ item_.name }}</RouterLink>
                <div class="layer">
                    <h4>分类推荐<small>根据宁德浏览记录推荐</small></h4>
                    <ul>
                        <li v-for="item_i in item.goods" :key="item_i.id">
                            <RouterLink to="/">
                                <img alt="" :src="item_i.picture"/>
                                <div class="info">
                                    <p class="name ellipsis-2">
                                        男士外套
                                    </p>
                                    <p class="desc ellipsis">{{ item_i.desc }}</p>
                                    <p class="price"><i>¥</i>{{ item_i.price }}</p>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category'

const { categoryList } = useCategoryStore()



</script>
<style lang="scss" scoped>
.home-categroy {
    width: 250px;
    height: 500px;
    background-color: rgba($color: #000000, $alpha: 0.8);
    position: relative;
    z-index: 99;

    .menu {
        li {
            padding-left: 40px;
            height: 55px;
            line-height: 55px;

            &:hover {
                background-color: $xtxColor;
            }

            a {
                margin-left: 4px;
                color: #fff;

                &:first-child {
                    font-size: 16px;
                    font-weight: bold;
                }
            }

            .layer {

                width: 990px;
                height: 500px;
                background-color: rgba($color: #ffffff, $alpha: 0.8);
                position: absolute;
                left: 250px;
                top: 0;
                display: none;
                padding: 0 15px;

                h4 {
                    font-size: 20px;
                    font-weight: normal;
                    line-height: 80px;

                    small {
                        font-size: 16px;
                        color: #666;
                    }
                }

                ul {
                    display: flex;
                    flex-wrap: wrap; //换行

                    li {
                        width: 310px;
                        height: 120px;
                        margin-right: 15px;
                        margin-bottom: 15px;
                        border: 1px solid #eee;
                        border-radius: 4px;
                        background-color: #fff;

                        &:nth-child(3n) {
                            //nth-child(3n)表示第3的倍数
                            margin-right: 0;
                        }

                        a {
                            display: flex;
                            width: 100%;
                            height: 100%;
                            align-items: center;
                            padding: 10px;

                            &:hover {
                                background-color: #e3f9f4;
                            }

                            img {
                                width: 95px;
                                height: 95px;

                            }

                            .info {
                                padding: 10px;
                                line-height: 24px;
                                overflow: hidden;
                            }

                            .name {
                                font-size: 16px;
                                color: #666;
                            }

                            .desc {
                                color: #999;
                            }

                            .price {
                                color: $priceColor;
                                font-size: 22px;
                            }

                            i {
                                font-size: 16px;
                            }

                        }


                    }

                }
            }

            &:hover {
                .layer {
                    display: block;
                }
            }

        }

    }

}
</style>