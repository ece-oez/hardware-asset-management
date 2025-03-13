<script setup>
const props = defineProps({
  nummer: String,
  title: String,
  text: String,
})
</script>
<template>
  <div class="flex w-full gap-3">
    <div class="h-full text-xl text-white flex justify-center items-center bg-black">
      {{ props.nummer }}
    </div>
    <div>
      <h1 class="text-2xl font-bold">{{ props.title }}</h1>
      <p>{{ props.text }}</p>
      <slot></slot>
    </div>
  </div>
</template>
