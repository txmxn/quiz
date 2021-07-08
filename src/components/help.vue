<template>
    <div id="help-body">
        <h1>Hilfe</h1>
        <dl>
            <dt>START</dt><dd>Startet das Quiz</dd>
            <dt>ZURÜCK</dt><dd>Beendet das Quiz oder verlässt die Hilfe Ansicht</dd>
            <dt>Punktesystem</dt><dd>Beantwortet man eine Frage beim ersten Versuch richtig bekommt man 3 Punkte. Bei jeder falschen Antwort werden die zu erreichenden Punkte eins weniger.</dd>
        </dl>
    </div>
</template>

<script>
export default {
  name: 'help-body',
} 
</script>

<style>
#help-body {
    padding: 25px;
    font-size: 25px;
    text-align: left;
    margin-top: 30px;
    margin-bottom: 20px;
}
#help-body dd {
    margin-bottom: 35px;
}

</style>