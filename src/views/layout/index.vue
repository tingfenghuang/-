<template>
 <LayoutNav/>

 <Header />
 <RouterView />
 <Footer />
 <NavFix />
 
</template>

<script setup>
import LayoutNav from './components/layoutNav.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import NavFix from './components/navFix.vue'

</script>
<style scoped lang="scss">

</style>