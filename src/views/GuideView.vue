<script setup>
import ConstructionSite from '@/components/site_overlay/ConstructionSite.vue'
import StartSection from '@/components/guide/sections/StartSection.vue'
import MenuSection from '@/components/guide/sections/MenuSection.vue'
</script>
<template>
  <!-- <ConstructionSite><div class="font-bold">"Guide"</div></ConstructionSite> -->
  <div class="w-full h-[90%] flex flex-col">
    <!-- scrolable elements -->
    <div class="overflow-y-scroll flex flex-col gap-10">
      <h1 class="text-7xl text-center">Guide</h1>
      <!-- start section -->
      <StartSection></StartSection>
      <!-- menu -->
      <MenuSection></MenuSection>
    </div>
  </div>
</template>
