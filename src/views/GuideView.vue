<script setup>
import StartSection from '@/components/guide/StartSection.vue'
import TopBarSection from '@/components/guide/TopBarSection.vue'
import MenuSection from '@/components/guide/MenuSection.vue'
import AccountSection from '@/components/guide/AccountSection.vue'
import AnsehenSection from '@/components/guide/AnsehenSection.vue'
import LoeschenSection from '@/components/guide/LoeschenSection.vue'
import ErstellenSection from '@/components/guide/ErstellenSection.vue'
</script>
<template>
  <!-- <ConstructionSite><div class="font-bold">"Guide"</div></ConstructionSite> -->
  <div class="flex flex-col ps-5">
    <!-- scrolable elements -->
    <div class="overflow-y-scroll flex flex-col gap-10">
      <h1 class="text-7xl text-center">Guide</h1>

      <!-- start section -->
      <StartSection></StartSection>

      <TopBarSection></TopBarSection>
      <!-- menu -->
      <MenuSection></MenuSection>
      <!-- account -->
      <AccountSection></AccountSection>
      <AnsehenSection></AnsehenSection>
      <LoeschenSection></LoeschenSection>
      <ErstellenSection></ErstellenSection>
    </div>
  </div>
</template>
