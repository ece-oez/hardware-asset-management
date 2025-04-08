<script setup>
import TextBlock from '@/components/guide/TextBlock.vue'
</script>
<template>
  <section class="flex flex-col gap-5">
    <h1 class="text-6xl text-center">Menü – Übersicht</h1>
    <div class="p-4 flex justify-around">
      <div class="w-1/2 flex flex-col justify-center items-center gap-5">
        <TextBlock
          class="w-full"
          nummer="1"
          title="Seiten"
          text=" Unter diesem Bereich findest du die wichtigsten Navigationsmöglichkeiten:"
        >
          <div class="ps-5">
            <div>
              <span class="font-bold"> Home: </span> Hier gelangst du zurück zur Startseite der
              Anwendung.
            </div>
            <div>
              <span class="font-bold">Ansehen:</span> Über diesen Link kannst du vorhandene Inhalte
              oder Daten einsehen.
            </div>
            <div>
              <span class="font-bold">Erstellen:</span> Hier kannst du neue Inhalte oder Daten
              hinzufügen.
            </div>
          </div>
        </TextBlock>

        <TextBlock
          class="w-full"
          nummer="2"
          title="Information"
          text="In diesem Bereich stehen dir weiterführende Informationen zur Verfügung:"
        >
          <div class="ps-5">
            <div>
              <span class="font-bold">Guide:</span>
              Ein Leitfaden, der dir Schritt für Schritt zeigt, wie du die Anwendung effektiv nutzt.
            </div>
            <div>
              <span class="font-bold">Dokumentation:</span>
              Eine detaillierte Sammlung von Informationen, die dir bei der Nutzung der Anwendung
              helfen und weitere Funktionen erklären.
            </div>
          </div>
        </TextBlock>

        <TextBlock
          class="w-full"
          nummer="3"
          title="Einstellungen"
          text="Hier kannst du die grundlegenden Einstellungen der Anwendung anpassen:"
        >
          <div class="ps-5">
            <div>
              <span class="font-bold">Anwender:</span> Einstellungen, die speziell deinen
              Benutzeraccount betreffen.
            </div>
            <div>
              <span class="font-bold">Anwendung:</span> Hier kannst du globale Einstellungen der
              Anwendung konfigurieren.
            </div>
          </div>
        </TextBlock>
      </div>
      <div class="w-1/2 h-max border border-stone-400">
        <img src="../../assets/img/guide/menu.png" alt="" />
      </div>
    </div>
  </section>
</template>
