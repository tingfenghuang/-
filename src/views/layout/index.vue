<template>
 <LayoutNav/>

 <Header />
 <RouterView />
 <HomePanel title="热门推荐" sub-title="Popular recommendation" />
 <HomePanel title="热门推荐" sub-title="Popular recommendation" />
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
import HomePanel from './components/HomePanel.vue'
const { getCategoryList } = useCategoryStore()


onMounted(() => {
    getCategoryList()
})


</script>
<style scoped lang="scss">

</style>