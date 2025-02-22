import { defineStore } from 'pinia'
import LoginServices from '@/services/Auth/login.services'
import router from '@/router'

export const useAuthStore = defineStore('Auth', {
  state: () => ({
    records: null,
    record: null,
    isLogin: window.$cookies.get('unlimited-token') || false,

    uiFlags: {
      isLoading: false,
      isCreating: false,
      isLoggingIn: false,
    },
  }),
  getters: {},
  actions: {
    login: async function (obj, showMassage = true) {
      try {
        this.uiFlags.isLoading = true
        const { data } = await LoginServices.create(obj)
        if (showMassage) {
          console.log('logged In')
        }
        this.record = data
        this.isLogin = true
        window.$cookies.set('unlimited-token', data.accessToken, '30d')
        router.push({
          name: 'home',
        })
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        this.uiFlags.isLoading = false
      }
    },
    logout() {
      window.$cookies.remove('unlimited-token')
      this.record = null
      this.isLogin = false
      router.push({
        name: 'logInPage',
      })
    },
  },
})
