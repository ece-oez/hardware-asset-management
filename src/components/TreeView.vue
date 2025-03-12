<script setup>
import { komponentenBaum } from '@/config/komponentenBaum'
import TheIcons from './TheIcons.vue'
import { ref } from 'vue'
import { useKomponenteStore } from '@/stores/komponenten'
import SearchBar from './SearchBar.vue'

const treeViewState = ref(false)

const komponenteStore = useKomponenteStore()
</script>

<template>
  <div
    class="h-full w-60 select-none border border-stone-400 rounded-lg shadow-md flex flex-col gap-2"
    :class="{
      'h-max w-max gap-3 p-0 border-none shadow-none pt-2 ps-2': treeViewState === false,
      'p-2': treeViewState,
    }"
  >
    <!-- treeview toggle btns -->
    <div>
      <TheIcons
        @click="treeViewState = !treeViewState"
        v-if="treeViewState === false"
        icon="bi bi-signpost-split"
        class="w-max text-2xl px-1 border rounded-full"
      />
      <TheIcons
        @click="treeViewState = !treeViewState"
        v-if="treeViewState"
        icon="bi bi-x"
        class="w-max text-2xl px-1 border rounded-full"
      />
    </div>

    <!-- settings -->
    <div v-if="treeViewState" class="flex gap-1 text-stone-600 text-lg">
      <TheIcons
        icon="bi bi-plus-square-fill"
        class="text-blue-500 px-1 rounded-sm hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
      />
      <TheIcons
        icon="bi bi-plus-square"
        class="px-1 rounded-sm hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
      />

      <!-- <TheIcons
        icon="bi bi-patch-plus-fill"
        class="text-blue-500 px-1 rounded-sm hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
      />
      <TheIcons
        icon="bi bi-patch-plus"
        class="px-1 rounded-sm hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
      /> -->

      <TheIcons
        icon="bi bi-file-earmark-plus"
        class="px-1 rounded-sm hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
      />
      <TheIcons
        icon="bi bi-folder-plus"
        class="px-1 rounded-sm hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
      />
      <TheIcons
        icon="bi bi-arrow-clockwise"
        class="px-1 rounded-sm hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
      />
    </div>

    <SearchBar v-if="treeViewState" class="text-sm h-8 w-full">
      <input type="text" placeholder="Suche nach ..." class="outline-none w-full" />
    </SearchBar>

    <!-- Baum -->
    <div v-if="treeViewState" class="pb-5 overflow-scroll scrollbar-hide text-stone-400">
      <div v-for="komponente in komponenteStore.komponenten" class="font-bold">
        <button
          @click="komponente.show = !komponente.show"
          class="cursor-pointer flex"
          :class="{ 'text-stone-700': komponente.show }"
        >
          <TheIcons v-if="komponente.show === false" icon="bi bi-caret-right" />
          <TheIcons v-if="komponente.show === true" icon="bi bi-caret-down-fill" />

          {{ komponente.heading }}
        </button>
        <div
          v-for="children in komponente.children"
          :class="{ hidden: komponente.show === false, ' text-stone-700': komponente.show }"
          class="font-normal ps-5"
        >
          <input type="checkbox" v-model="children.show" />
          {{ children.heading }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
