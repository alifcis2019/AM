<template>
  <div class="bg-gray-900">
    <Splide :options="options" :extensions="{ AutoScroll }" aria-label="Partners Slider">
      <SplideSlide v-for="(image, index) in images" :key="index">
        <img :src="image" class="w-28 h-28 rounded-md" alt="Partner logo" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { defineComponent, ref } from 'vue'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const options = {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 5,
      gap: '8rem',
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 2.5, // Adjust speed for smooth scrolling
        pauseOnHover: false,
        pauseOnFocus: false,
      },
    }

    const images = ref([
      'https://beon-system.unlimited-software.com/landing/content/assets/images/partners/fatDuster.jpeg',
      'https://beon-system.unlimited-software.com/landing/content/assets/images/partners/hagzz.jpeg',
      'https://beon-system.unlimited-software.com/landing/content/assets/images/partners/Brooklyn.jfif',
      'https://beon-system.unlimited-software.com/landing/content/assets/images/partners/nageeb.jpeg',
      'https://beon-system.unlimited-software.com/landing/content/assets/images/partners/nafea.jpeg',
      'https://beon-system.unlimited-software.com/landing/content/assets/images/partners/ezwty.jpeg',
    ])

    return { options, images, AutoScroll }
  },
})
</script>
