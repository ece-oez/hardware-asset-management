<script setup>
import TheMenu from '@/components/TheMenu.vue'
import TopBar from '@/components/TopBar.vue'
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()
</script>

<template>
  <div class="h-screen w-full flex flex-row">
    <TheMenu
      v-if="menuStore.menuBtnState"
      class="w-1/5 border-e-2 border-stone-300 shadow-2xl shadow-stone-600"
    />

    <div class="w-full h-screen">
      <TopBar class="w-full h-max p-3"></TopBar>

      <RouterView class="w-full h-[90%]"></RouterView>
    </div>
  </div>

  <!-- laptop: h-[90%] Desktop: h-[94%] -->
</template>

<style scoped>
@media only screen and (max-width: 1500px) {
  .height {
    height: 50px;
  }
}
</style>
