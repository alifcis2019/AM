<template>
  <nav
    class="bg-white dark:bg-gray-900 w-full fixed shadow-lg opacity-90 hover:opacity-100 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img :src="images.logo" class="h-12 w-24 rounded-full" alt="Flowbite Logo" />
      </router-link>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-8">
        <div v-if="!authStore.isLogin" class="flex items-center gap-4">
          <router-link
            to="/logIn"
            class="relative inline-flex items-center gap-2 font-semibold text-white bg-transparent overflow-hidden hover:opacity-90 before:absolute"
          >
            LogIn
          </router-link>
          <router-link
            to="/logIn"
            class="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-blue-50 bg-gradient-to-tr from-blue-900/30 via-blue-900/70 to-blue-900/30 ring-4 ring-blue-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-blue-50/10 before:blur-xl"
          >
            Register
          </router-link>
        </div>
        <div v-else class="flex items-center gap-4">
          <h3 class="text-white text-2xl">name</h3>
          <button
            @click="authStore.logout"
            class="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-blue-50 bg-gradient-to-tr from-blue-900/30 via-blue-900/70 to-blue-900/30 ring-4 ring-blue-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-blue-50/10 before:blur-xl"
          >
            logout
          </button>
        </div>

        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li v-for="item in navItems" :key="item">
            <router-link
              :to="item.link"
              class="block py-2 px-3 text-white capitalize rounded-sm md:bg-transparent md:p-0"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import useImages from '../../helpers/images.helper'
const images = useImages()
import { useAuthStore } from '@/stores/Auth/auth.store'
const authStore = useAuthStore()
const navItems = [
  {
    name: 'home',
    link: '/',
  },
]
</script>
