<template>
  <div id="app">
    <nav>{{ navText }}</nav>
    <div class="content container">
      <router-view />
    </div>
    <footer>Я футер</footer>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    navText () {
      return this.$route.name
    }
  },
  methods: {
    ...mapActions(['loadNotes'])
  },
  mounted () {
    this.loadNotes()
  }
}
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import '@/scss/variables';
@import '@/scss/mixins';

#app {
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'content'
    'footer';

  nav {
    grid-area: header;
    background-color: $colorPrimary;
    color: $colorWhite;
    font-size: $fs-big;
    @include flexCenter;
  }

  .content {
    grid-area: content;
  }

  footer {
    grid-area: footer;
    font-size: $fs-big;
    color: $colorWhite;
    @include flexCenter;
    background-color: $colorBlack;
  }
}
</style>
