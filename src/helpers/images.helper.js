import { ref } from 'vue'
import logo from '../assets/images/logo.jpg'
import hero from '../assets/images/hero.webp'
export default function useImages() {
  return ref({
    logo,
    hero,
  })
}
