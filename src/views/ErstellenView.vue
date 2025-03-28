<script setup>
import { formItems } from '@/config/formItems';
// import containedComponentsList from '@/components/containedComponentsList.vue';
import { useDatabaseStore } from '@/stores/database';

const databaseStore = useDatabaseStore();

const submitForm = (pFormItems) => {
  const formValues = Object.fromEntries(pFormItems.map(item => [item.id, item.value]));

  databaseStore.createData(
    formValues.name,
    formValues.modellnummer,
    formValues.seriennummer,
    formValues.erfassungsdatum,
    formValues.hersteller,
    formValues.kategorie,
    formValues.ort,
    formValues.verbaut
  );
};

</script>
<template>
  <div>
    <div class="grid grid-cols-1 gap-1">
      <div v-for="formItem in formItems" :key=formItem.label class="flex flex-col w-[200px] m-2">
        <label>{{ formItem.label }}</label>
        <input v-model="formItem.value" type="text" class="w-full border-1" />
      </div>
    </div>
    <Button type="button"
      class="m-2 w-[200px] rounded-md bg-black p-2 hover:bg-grey-200 text-white hover:text-black transition duration-200"
      @click="submitForm(formItems)">Erstellen</Button>
    <!-- <containedComponentsList /> -->
  </div>
</template>
