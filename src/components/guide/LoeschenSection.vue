<script setup>
import TextBlock from '@/components/guide/TextBlock.vue'
</script>
<template>
  <section class="flex flex-col gap-5">
    <h1 class="text-6xl text-center">Bearbeiten von Hardware</h1>
    <div class="p-4 flex justify-around">
      <div class="w-1/2 flex flex-col justify-start items-start gap-5">
        <p class="text-lg">
          Wenn man ein Hardware Datensatz aus der Tabelle ausgewählt hat, kann man sich seine Daten
          separat ausgeben lassen, bearbeiten oder sogar löschen.
        </p>

        <TextBlock
          nummer="1"
          title="Löschen"
          text="Wenn du den datensatz Löschen möchtest klicke einfach auf den Löschen Button."
        />

        <TextBlock
          nummer="2"
          title="Bearbeiten"
          text="Wenn du den datensatz jedoch bearbeiten möchtest klicke einfach auf den Bearbeiten Button. Dann wird dir ein Formular gezeigt."
        />
      </div>
      <div class="w-1/2 h-max border border-stone-400">
        <img src="../../assets/img/guide/loeschen.png" alt="" />
      </div>
    </div>
  </section>
</template>
