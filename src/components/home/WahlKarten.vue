<script setup>
import TheIcons from '@/components/TheIcons.vue'

const props = defineProps({
  icon: String,
  text: String,
})
</script>

<template>
  <div
    class="bg-stone-400 flex flex-col justify-center items-center p-4 w-full h-full text-2xl rounded-lg shadow-2xl select-none cursor-pointer hover:bg-blue-400 hover:text-white hover:scale-120 hover:duration-200 not-focus:duration-200"
  >
    <TheIcons :icon="props.icon"></TheIcons>
    {{ props.text }}
  </div>
</template>
