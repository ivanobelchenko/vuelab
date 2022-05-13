<template>
  <v-container>
    <div class="text-h3 text-center mt-0">
      Это лабораторная работа Vue.js
    </div>
    <p class="text-h4 text-center">
      Веб-разработка на стороне клиента
    </p>
    <Slider />
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  head() {
    return { title: 'Главная' }
  },
}
</script>
