<script setup>
import TextBlock from '@/components/guide/TextBlock.vue'
</script>
<template>
  <section class="flex flex-col gap-5">
    <h1 class="text-6xl text-center">Startseite – Überblick</h1>
    <div class="p-4 flex justify-around">
      <div class="w-1/2 flex flex-col justify-center items-center gap-5">
        <p class="text-lg">
          Wenn du die Anwendung öffnest, wirst du zwei Hauptbuttons auf der Startseite sehen:
        </p>

        <TextBlock
          nummer="1"
          title="Ansehen"
          text="Mit diesem Button kannst du vorhandene Inhalte oder Daten einsehen. Klicke darauf, um
              eine Übersicht der gespeicherten Informationen anzuzeigen und zu durchstöbern."
        />

        <TextBlock
          nummer="2"
          title="Erstellen"
          text="Wenn du neue Inhalte oder Daten hinzufügen möchtest, klicke auf den 'Erstellen'-Button. Dieser führt dich zu einem Formular, in dem du alle erforderlichen Informationen eingeben kannst."
        />

        <p class="text-lg text-center">
          Wähle den gewünschten Button je nach deinem Vorhaben, um entweder bestehende Inhalte zu
          betrachten oder neue zu erstellen!
        </p>
      </div>
      <div class="w-1/2 h-max border border-stone-400">
        <img src="../../assets/img/guide/start.png" alt="" />
      </div>
    </div>
  </section>
</template>
