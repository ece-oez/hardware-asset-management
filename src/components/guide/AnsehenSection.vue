<script setup>
import TextBlock from '@/components/guide/TextBlock.vue'
</script>
<template>
  <section class="flex flex-col gap-5">
    <h1 class="text-6xl text-center">Anzeige – Hardwarekomponenten</h1>
    <div class="p-4 flex flex-col justify-around gap-5">
      <p class="text-lg">
        In dieser Ansicht kannst du alle Informationen zu den Hardwarekomponenten einsehen und
        filtern. Die Tabelle zeigt eine Übersicht der verschiedenen Komponenten, und du kannst
        jederzeit detailliertere Informationen zu jeder einzelnen Komponente abrufen.
      </p>

      <div class="h-max flex w-full">
        <TextBlock
          class="w-1/2 h-max"
          nummer="1"
          title="Tabelle der Hardwarekomponenten"
          text="Zu Beginn wird dir eine Tabelle angezeigt, die alle relevanten Daten zu den Hardwarekomponenten auflistet. Jede Zeile entspricht einer einzelnen Komponente und enthält grundlegende Informationen."
        />
        <div class="w-1/2 h-max border border-stone-400">
          <img src="../../assets/img/guide/ansehen_table.png" alt="" />
        </div>
      </div>

      <div class="h-max flex">
        <TextBlock
          class="w-1/2 h-max"
          nummer="2"
          title="Detaillierte Informationen anzeigen"
          text="Wenn du auf eine Zeile in der Tabelle klickst, öffnet sich auf der rechten Seite eine Informationskarte, die detailliertere Daten zur ausgewählten Hardwarekomponente anzeigt. Hier kannst du mehr über die Spezifikationen der Komponente erfahren. Die Karte enthält alle wichtigen Informationen, die du benötigst, um die Hardware genauer zu verstehen.

Die Informationskarte lässt sich jederzeit schließen – entweder über den Schließen-Button in der Karte selbst oder durch das Schließen der Karte."
        >
          <h1 class="text-2xl font-bold">Zweite Tabellenansicht</h1>
          <div>
            In der Informationskarte findest du außerdem einen Link, der dich zu einer neuen
            Tabellenansicht führt. Diese Ansicht zeigt dir alle weiteren Hardwarekomponenten, die in
            der ausgewählten Komponente verbaut sind. Du kannst so detailliertere Beziehungen und
            Verknüpfungen zwischen den verschiedenen Hardwareteilen erkunden.
          </div>
        </TextBlock>
        <div class="w-1/2 h-max border border-stone-400">
          <img src="../../assets/img/guide/ansehen_information_card.png" alt="" />
          <img src="../../assets/img/guide/ansehen_verbaut_table.png" alt="" />
        </div>
      </div>

      <div class="h-max flex">
        <TextBlock
          class="w-1/2 h-max"
          nummer="3"
          title="TreeView und Filter für Kategorien"
          text="Auf der rechten Seite findest du eine TreeView, die alle verfügbaren Hardwarekategorien anzeigt. Du kannst die Kategorien einsehen und mit einem Häkchen in der Checkbox die gewünschte Kategorie auswählen. Sobald du eine Kategorie auswählst, wird die Tabelle automatisch entsprechend gefiltert, um nur die relevanten Daten der gewählten Kategorie anzuzeigen."
        />
        <div class="w-1/2 h-max border border-stone-400">
          <img src="../../assets/img/guide/ansehen_treeview.png" alt="" />
        </div>
      </div>

      <div class="h-max flex">
        <div class="w-1/2">
          <TextBlock
            class=""
            nummer="4"
            title="Filterfunktionen über der Tabelle"
            text="Direkt über der Tabelle findest du eine Suchleiste, mit der du gezielt nach bestimmten Werten suchen kannst. Du kannst nach einer bestimmten Information in einer bestimmten Spalte filtern, indem du die Spalte über den Toggle-Button rechts neben der Suchleiste auswählst. Zusätzlich gibt es einen Button in der Suchleiste, der es dir ermöglicht, eine Liste von möglichen Filteroptionen anzuzeigen. Diese Optionen helfen dir, deine Suche weiter zu verfeinern, um schnell die gewünschten Ergebnisse zu finden."
          />
        </div>

        <div class="w-1/2 h-max border border-stone-400">
          <img src="../../assets/img/guide/ansehen_such_filter.png" alt="" />
        </div>
      </div>

      <div class="h-max flex">
        <div class="w-1/2">
          <TextBlock
            class=""
            nummer="5"
            title="Filterfunktionen über das Formular"
            text="Mit unserem praktischen Filterformular können Sie gezielt nach spezifischen Hardwareeinheiten suchen und so genau die Informationen finden, die Sie benötigen. Egal, ob Sie nach einem bestimmten Gerät oder nach einem bestimmten Kriterium filtern möchten, unser System hilft Ihnen dabei, die passenden Ergebnisse zu finden."
          >
            <slot>
              <h1 class="font-bold text-xl">Wie funktioniert die Suche?</h1>
              <div>
                Geben Sie einfach die relevanten Informationen in die Felder des Filters ein. Wenn
                Sie mehrere Kriterien verwenden, wird die Suche gezielt auf Ihre Auswahl
                zugeschnitten. Nach dem Ausfüllen der Felder wird die Tabelle mit den Ergebnissen
                automatisch angepasst und zeigt nur die Hardwareeinheiten an, die Ihren
                Filtereinstellungen entsprechen.
              </div>
            </slot>
          </TextBlock>
        </div>

        <div class="w-1/2 h-max border border-stone-400">
          <img src="../../assets/img/guide/ansehen_filter_form.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
