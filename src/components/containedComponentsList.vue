<script setup>
const props = defineProps({
  ident: String
})

</script>

<template>


  <div v-for="formItem in formItems" class="w-[400px]">
    <div :key="formItem.label" class="space-between w-full p-1">
      <label>{{ formItem.label }}</label>
      <button />
      <button />
    </div>
  </div>

</template>

<style scoped></style>
