import { ref } from 'vue'
import logo from '../assets/images/logo.jpg'
export default function useImages() {
  return ref({
    logo,
  })
}
