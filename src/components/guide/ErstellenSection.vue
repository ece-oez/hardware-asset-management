<script setup>
import TextBlock from '@/components/guide/TextBlock.vue'
</script>
<template>
  <section class="flex flex-col gap-5">
    <h1 class="text-6xl text-center">Erstellen – Formular</h1>
    <div class="p-4 flex justify-around">
      <div class="w-1/2 flex flex-col justify-start items-start gap-5">
        <p class="text-lg">
          Auf dieser Seite kannst du über das erstellen Formular, Hardware in das System einpflegen.
        </p>

        <TextBlock
          nummer="1"
          title="Daten eingeben"
          text="Erst sollen die ganzen Daten gefüllt werden, die man speichern möchte."
        />

        <TextBlock
          nummer="2"
          title="Daten abschicken"
          text="Wenn die Daten eingetragen sind, einfach auf den Erstellen Button drücken."
        />
      </div>
      <div class="w-1/2 h-max border border-stone-400">
        <img src="../../assets/img/guide/erstellen.png" alt="" />
      </div>
    </div>
  </section>
</template>
