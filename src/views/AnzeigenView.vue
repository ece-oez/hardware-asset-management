<script setup>
import InformationCard from '@/components/ansehen/InformationCard.vue'
import TableView from '@/components/ansehen/TableView.vue'
import TreeView from '@/components/ansehen/TreeView.vue'
import { useCardStore } from '@/stores/card'
import { useDatabaseStore } from '@/stores/database'
import { useModalStore } from '@/stores/modal'
import { onMounted } from 'vue'
import { testHardware } from '@/config/testHardware'

const cardStore = useCardStore()

const databaseStore = useDatabaseStore()

const modalStore = useModalStore()

onMounted(() => {
  testHardware.forEach((element) => {
    const name = element.name
    const modellnummer = element.modellnummer
    const seriennummer = element.seriennummer
    const erfassungsdatum = element.erfassungsdatum
    const hersteller = element.hersteller
    const kategorie = element.kategorie
    const ort = element.ort
    const verbaut = element.verbaut
    // console.log(name + modellnummer + seriennummer + erfassungsdatum + hersteller + kategorie + ort + verbaut);

    // databaseStore.createData(
    //   name,
    //   modellnummer,
    //   seriennummer,
    //   erfassungsdatum,
    //   hersteller,
    //   kategorie,
    //   ort,
    //   verbaut,
    // )
  })
})
</script>
<template>
  <div class="flex gap-3 p-4">
    <TreeView class="w-1/5" :class="{ 'blur-sm': modalStore.showModal }"></TreeView>
    <TableView class="w-full" :class="{ 'blur-sm': modalStore.showModal }"></TableView>
    <InformationCard
      v-if="cardStore.cardState"
      :class="{ 'blur-sm': modalStore.showModal }"
    ></InformationCard>
  </div>
</template>
