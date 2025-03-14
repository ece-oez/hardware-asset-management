<script setup>
import TextBlock from '@/components/guide/TextBlock.vue'
</script>
<template>
  <section class="flex flex-col gap-5">
    <h1 class="text-6xl text-center">Account – Verwaltung</h1>
    <div class="p-4 flex justify-around">
      <div class="w-1/2 flex flex-col justify-center items-center gap-5">
        <p class="text-lg">
          Auf dieser Seite hast du die Möglichkeit, alle wichtigen Aspekte deines Accounts zu
          verwalten. Die verschiedenen Funktionen helfen dir dabei, deinen Account sicher und
          aktuell zu halten.
        </p>

        <TextBlock
          nummer="1"
          title="Abmelden"
          text="
Wenn du deinen Account vorübergehend verlassen möchtest, kannst du dich ganz einfach abmelden. Klicke dazu auf den „Abmelden“-Button, der dich aus der Anwendung ausloggt. Deine Daten bleiben geschützt, und du kannst dich später wieder sicher einloggen.
"
        />

        <TextBlock
          nummer="2"
          title="Passwort ändern"
          text=" Für mehr Sicherheit kannst du dein Passwort jederzeit ändern. Klicke auf den „Passwort ändern“-Button, um ein neues Passwort zu erstellen. Du wirst gebeten, dein aktuelles Passwort einzugeben und anschließend ein neues, sicheres Passwort festzulegen. Achte darauf, dass dein neues Passwort mindestens acht Zeichen lang ist und eine Mischung aus Groß- und Kleinbuchstaben, Zahlen sowie Sonderzeichen enthält.
"
        >
        </TextBlock>

        <TextBlock
          nummer="3"
          title="Benutzerdaten einsehen"
          text="Hier kannst du deine persönlichen Daten einsehen und bei Bedarf aktualisieren. Klicke auf „Benutzerdaten anzeigen“, um alle Informationen zu deinem Account zu sehen, wie z.B. deinen Benutzernamen, deine E-Mail-Adresse und andere relevante Daten. Falls du Änderungen vornehmen möchtest, kannst du diese direkt hier anpassen."
        >
        </TextBlock>
      </div>
      <div class="w-1/2 h-max border border-stone-400">
        <img src="../../assets/img/guide/.png" alt="" />
      </div>
    </div>
  </section>
</template>
