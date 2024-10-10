<template>
  <el-button type="primary">nihao</el-button>
  <RouterView />

</template>
<script setup>
import { ref, onMounted } from "vue"
import { RouterView } from "vue-router"
import { getCategoryAPI } from "@/apis/test.js"

</script>


<style scoped></style>