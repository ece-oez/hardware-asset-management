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
      class="w-max border-stone-300 shadow-lg shadow-stone-400"
    />

    <!-- Separates Div damit das overlay nicht über Menu liegt -->
    <div
      v-if="menuStore.menuBtnState"
      @click="menuStore.menuBtnState = false"
      class="w-full h-full absolute z-200 bg-stone-200 opacity-60"
    ></div>
    <div
      class="w-full h-screen"
      :class="{ 'blur-xs': menuStore.menuBtnState || modalStore.showModal }"
    >
      <div
        @click="menuStore.menuBtnState = false"
        v-if="menuStore.menuBtnState"
        class="absolute w-full h-full z-4000 opacity-30 bg-white"
      ></div>

      <TopBar class="w-full h-max absolute p-3"></TopBar>

      <RouterView class="w-full h-full pt-20 overflow-hide"></RouterView>
    </div>
  </div>

  <!-- laptop: h-[90%] Desktop: h-[93%] -->
</template>

<style scoped>
.overflow-hide {
  overflow: hidden;
}
@media only screen and (max-width: 1500px) {
  .height {
    height: 50px;
  }
}
</style>
