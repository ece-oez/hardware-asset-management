<script setup>
import TextBlock from '@/components/guide/TextBlock.vue'
import { parseAstAsync } from 'vite'
</script>
<template>
  <section class="flex flex-col gap-5">
    <h1 class="text-6xl text-center">Menü – Übersicht</h1>
    <div class="p-4 flex justify-around">
      <div class="w-200 flex flex-col justify-center items-center gap-5">
        <p class="text-lg">
          In deinem Menü findest du die folgenden Bereiche, die dir dabei helfen, schnell auf alle
          wichtigen Funktionen deiner Anwendung zuzugreifen:
        </p>

        <TextBlock
          nummer="1"
          title="Account"
          text="Ganz oben im Menü findest du das Account-Icon. Über dieses Symbol gelangst du zu
                  deinen Account-Einstellungen, wo du persönliche Daten bearbeiten und dein Konto
                  verwalten kannst. Außerdem findest du hier die Möglichkeit, dich abzumelden und
                  weitere Kontooptionen, wie man es gewohnt ist."
        />

        <TextBlock
          nummer="2"
          title="Seiten"
          text=" Unter diesem Bereich findest du die wichtigsten Navigationsmöglichkeiten:"
        >
          Home: Hier gelangst du zurück zur Startseite der Anwendung.
          <br />
          Ansehen: Über diesen Link kannst du vorhandene Inhalte oder Daten einsehen.
          <br />
          Erstellen: Hier kannst du neue Inhalte oder Daten hinzufügen.
        </TextBlock>

        <TextBlock
          nummer="3"
          title="Information"
          text="In diesem Bereich stehen dir weiterführende Informationen zur Verfügung:"
        >
          Guide: Ein Leitfaden, der dir Schritt für Schritt zeigt, wie du die Anwendung effektiv
          nutzt. Dokumentation: Eine detaillierte Sammlung von Informationen, die dir bei der
          Nutzung der Anwendung helfen und weitere Funktionen erklären.
        </TextBlock>

        <TextBlock
          nummer="4"
          title="Einstellungen"
          text="Hier kannst du die grundlegenden Einstellungen der Anwendung anpassen:"
        >
          <div class="ps-5">
            <p>
              <span class="font-bold"> Anwender:</span> Einstellungen, die speziell deinen
              Benutzeraccount betreffen.
            </p>
            <div>Anwendung: Hier kannst du globale Einstellungen der Anwendung konfigurieren.</div>
          </div>
        </TextBlock>
      </div>
      <div class="w-200 h-max border border-stone-400">
        <img src="../../../assets/img/guide/menu.png" alt="" />
      </div>
    </div>
  </section>
</template>
