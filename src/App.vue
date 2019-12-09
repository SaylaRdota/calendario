<template>
  <div id="app">
    <app-agenda />
    <app-calendar v-if="false"></app-calendar>
  </div>
</template>

<script>
import Agenda from "./components/Agenda";
import Calendar from "./components/Calendar";

export default {
  name: 'app',
  components: {
    'app-agenda' : Agenda,
      'app-calendar' : Calendar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
