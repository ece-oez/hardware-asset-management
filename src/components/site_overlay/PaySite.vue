<script setup>
import TheIcons from '@/components/TheIcons.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-10 text-4xl">
    <TheIcons icon="bi bi-coin" class="text-9xl text-yellow-500" />
    <slot></slot>
    <div>Extra Feature?</div>

    <div class="text-2xl text-black flex items-center gap-2">
      <TheIcons
        icon="bi bi-paypal"
        class="border border-stone-500 p-2 h-full px-3 rounded-lg text-blue-600 hover:bg-stone-300 hover:text-white hover:duration-200 not-focus:duration-200"
      ></TheIcons>
      <TheIcons
        icon="bi bi-credit-card-fill"
        class="border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-900 hover:bg-stone-300 hover:text-white hover:duration-200 not-focus:duration-200"
      ></TheIcons>
    </div>
  </div>
</template>

<style scoped></style>
