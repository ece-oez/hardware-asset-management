<script setup>
import { formItems } from '@/config/formItems'
// import containedComponentsList from '@/components/containedComponentsList.vue';
import { useDatabaseStore } from '@/stores/database'

const databaseStore = useDatabaseStore()

const submitForm = (pFormItems) => {
  const formValues = Object.fromEntries(pFormItems.map((item) => [item.id, item.value]))

  databaseStore.createData(
    formValues.name,
    formValues.modellnummer,
    formValues.seriennummer,
    formValues.erfassungsdatum,
    formValues.hersteller,
    formValues.kategorie,
    formValues.ort,
    formValues.verbaut,
  )
}
</script>
<template>
  <div class="pt-5 ps-4">
    <div class="flex flex-col gap-5">
      <div v-for="formItem in formItems" :key="formItem.label" class="flex">
        <div class="font-bold w-1/5 text-start flex items-center">{{ formItem.label }}:</div>
        <div class="flex border border-stone-400 rounded-sm p-2 w-2/4">
          <input type="text" v-model="formItem.value" class="outline-none w-full" />
        </div>
      </div>
    </div>

    <Button
      type="button"
      class="mt-4 w-[200px] rounded-md bg-blue-400 p-2 hover:bg-gray-200 text-white hover:text-black duration-300"
      @click="submitForm(formItems)"
      >Erstellen</Button
    >
    <!-- <containedComponentsList /> -->
  </div>
</template>
