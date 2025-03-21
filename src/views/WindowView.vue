<script setup>
import TheMenu from '@/components/TheMenu.vue'
import TopBar from '@/components/TopBar.vue'
import { useMenuStore } from '@/stores/menu'
import { useModalStore } from '@/stores/modal'

const menuStore = useMenuStore()

const modalStore = useModalStore()
</script>

<template>
  <div class="h-screen w-full flex flex-row">
    <TheMenu
      v-if="menuStore.menuBtnState"
      class="w-1/5 border-e-2 border-stone-300 shadow-2xl shadow-stone-600"
    />

    <!-- Separates Div damit das overlay nicht über Menu liegt -->
    <div class="w-full h-screen" :class="{ 'blur-xs': menuStore.menuBtnState }">
      <div
        @click="menuStore.menuBtnState = false"
        v-if="menuStore.menuBtnState"
        class="absolute w-full h-full z-4000 opacity-30 bg-white"
      ></div>

      <TopBar class="w-full h-max p-3" :class="{ 'blur-sm': modalStore.showModal }"></TopBar>

      <RouterView class="w-full h-[90%]"></RouterView>
    </div>
  </div>

  <!-- laptop: h-[90%] Desktop: h-[93%] -->
</template>

<style scoped>
@media only screen and (max-width: 1500px) {
  .height {
    height: 50px;
  }
}
</style>
