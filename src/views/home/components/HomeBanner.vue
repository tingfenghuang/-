<template>
    <div class="shell">
        <ul class="images" ref="images">
            <li class="img" v-for="item in imagesList" :key="item.id"
                :style="{ 'background-image': `url(${item.imgUrl})` }"></li>
            <li class="img" :style="{ 'background-image': `url(${imagesList[0].imgUrl})` }"></li>
        </ul>
        <ul class="min">
            <li v-for="(item, index) in imagesList" :key="index" class="m" @mouseover="goTo(index)" @mouseleave="setSet"
                :ref="setMin"></li>
        </ul>
        <div class="button">
            <div class="button-left" @click="turnLeft">&lt;</div>
            <div class="button-right" @click="turnRight">&gt;</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBanner } from '@/apis/home'

const imagesList = ref([])
const min = ref([])
const images = ref(null)

const currentIndex = ref(0)
const k = ref('')
const set = ref(null)




const createSetInterval = () => {
    // set.value = setInterval(() => {
    //     currentIndex.value++
    //     updateImages()
    // }, 2000)
}
const turnLeft = () => {
    currentIndex.value--
    updateImages()
}

const turnRight = () => {
    currentIndex.value++
    updateImages()
}

const goTo = (index) => {
    currentIndex.value = index
    //关闭定时器
    clearInterval(set.value)
    updateImages()
}
const setMin = (el) => {

    if (el) {
        min.value.push(el)

    }
}
const setSet = () => {
    //开启定时器
    createSetInterval()
}

const updateImages = () => {
    const offset = -currentIndex.value * k.value
    images.value.style.transform = `translateX(${offset}%)`


    if (currentIndex.value === imagesList.value.length) {
        setTimeout(() => {
            images.value.style.transition = 'none';
            currentIndex.value = 0
            images.value.style.transform = `translateX(0%)`
            setTimeout(() => {
                updateImages()
            })


        }, 200)
    } else if (currentIndex.value === -1) {
        images.value.style.transition = 'none';
        images.value.style.transform = `translateX(-${imagesList.value.length * k.value}%)`
        currentIndex.value = imagesList.value.length - 1
        setTimeout(() => {
            updateImages()
        })
    } else {
        images.value.style.transition = 'transform 0.2s'

    }

    min.value.forEach((item, index) => {
        if (index === currentIndex.value) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
}
getBanner().then((res) => {

    imagesList.value = res.result
    imagesList.value.forEach((item, index) => {
        console.log(item, index)
    })

})



onMounted(() => {
    updateImages()
    createSetInterval()
    const element = images.value.children
    images.value.style.width = element.length * 100 + '%'
    k.value = 100 / element.length
    for (let i = 0; i < element.length; i++) {
        element[i].style.width = k.value + '%'
    }

})
</script>

<style lang="scss" scoped>
.shell {
    width: 1240px;
    height: 500px;
    position: relative;
    border-radius: 15px;
    box-shadow: 20px 30px 20px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    position: absolute;

    .images {
        height: 100%;
        display: flex;
        position: absolute;
        left: 0;
        transition: transform 0.2s;

        .img {
            width: calc(100% / 6);//为什么要设置成100%？？
            background-size: cover;
        }
    }

    .min {
        display: flex;
        justify-content: space-evenly; //平均分布
        position: absolute;
        bottom: 40px;
        width: 30%;
        z-index: 999; //在最上层
        left: 50%;
        transform: translateX(-50%);

        .m {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #fff;
            opacity: .5;
            transition: .2s;
            cursor: pointer;

            &:hover {
                opacity: 1;
            }

            &.active {
                opacity: 1;
            }
        }
    }

    .button {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: space-between;
        user-select: none;

        .button-left,
        .button-right {
            font-size: 50px;
            line-height: 500px;
            padding: 0 20px;
            background-color: rgba(100, 193, 255, 0.2);
            cursor: pointer;
            color: #fff;
        }
    }
}
</style>