<script setup>
import { RouterView } from 'vue-router'
import AMNavbar from './components/layoouts/AM-navbar.vue'
import AMFooter from './components/layoouts/AM-footer.vue'
</script>

<template>
  <AMNavbar />
  <RouterView class="mt-20" />
  <AMFooter />
</template>
