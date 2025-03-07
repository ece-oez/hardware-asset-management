<script setup>
import { komponentenBaum } from '@/config/komponentenBaum'
import TheIcons from './TheIcons.vue'
import { ref } from 'vue'

const treeViewState = ref(false)
</script>

<template>
  <div
    class="h-full w-max select-none text-stone-800 rounded-4xl flex flex-col gap-3"
    :class="{ 'h-max mt-1.5 gap-3': treeViewState === false, 'p-5 ': treeViewState }"
  >
    <div>
      <TheIcons
        @click="treeViewState = !treeViewState"
        v-if="treeViewState === false"
        icon="bi bi-signpost-split"
        class="w-max text-2xl px-1 border rounded-full"
      />
      <TheIcons
        @click="treeViewState = !treeViewState"
        v-if="treeViewState === true"
        icon="bi bi-x"
        class="w-max text-2xl px-1 border rounded-full"
      />
    </div>
    <div v-if="treeViewState" class="pb-5 overflow-scroll scrollbar-hide">
      <div v-for="komponente in komponentenBaum" class="font-bold">
        <button @click="komponente.show = !komponente.show">
          <TheIcons icon="bi bi-arrow-down-square" />
        </button>
        {{ komponente.heading }}

        <div
          v-for="element in komponente.elemente"
          :class="{ hidden: komponente.show === false }"
          class="font-normal"
        >
          <input type="checkbox" />
          {{ element.heading }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
