<template>
    <div id="help-body">
        <ul>
            <li>START - Startet das Quiz</li>
            <li>Zurück - Beendet das Quiz oder verlässt die Hilfe Ansicht</li>
            <li>Punktesystem - Beantwortet man eine Frage beim ersten Versuch richtig bekommt man 3 Punkte. Bei jeder falschen Antwort werden die zu erreichenden Punkte eins weniger.</li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'help-body',
} 
</script>

<style>
#help-body {
    font-size: 25px;
    text-align: left;
    margin-top: 30px;
    margin-bottom: 20px;
}

</style>