<template>
 <LayoutNav/>

 <Header />
 <!-- 添加key破坏服用机制 -->
 <!-- <RouterView  :key="$route.fullPath"/> -->
 <RouterView />
 <Footer />
 <NavFix />
 
</template>

<script setup>
import { onMounted } from 'vue'
import LayoutNav from './components/layoutNav.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import NavFix from './components/navFix.vue'
import { useCategoryStore } from '@/stores/category'
const { getCategoryList } = useCategoryStore()


onMounted(() => {
    getCategoryList()
})


</script>
<style scoped lang="scss">

</style>