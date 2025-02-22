<template>
  <div>
    <section class="banner">
      <HomeBanner />
    </section>

    <section class="slider">
      <HomeSlider />
    </section>

    <section class="news">
      <HomeNews />
    </section>

    <section class="features">
      <HomeFeatures />
    </section>

    <section class="social">
      <HomeSocial />
    </section>

    <section class="content">
      <HomeContent />
    </section>

    <section class="pricing">
      <HomePricing />
    </section>

    <section class="testimonials">
      <HomeTestimonials />
    </section>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const HomeBanner = defineAsyncComponent(() => import('./Components/HomeBanner.vue'))
const HomeSlider = defineAsyncComponent(() => import('./Components/HomeSlider.vue'))
const HomeNews = defineAsyncComponent(() => import('./Components/HomeNews.vue'))
const HomeFeatures = defineAsyncComponent(() => import('./Components/HomeFeatures.vue'))
const HomeSocial = defineAsyncComponent(() => import('./Components/HomeSocial.vue'))
const HomeContent = defineAsyncComponent(() => import('./Components/HomeContent.vue'))
const HomePricing = defineAsyncComponent(() => import('./Components/HomePricing.vue'))
const HomeTestimonials = defineAsyncComponent(() => import('./Components/HomeTesimonials.vue'))
</script>
