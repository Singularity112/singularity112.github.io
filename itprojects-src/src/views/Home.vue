<template>
  <div class="contentLayout layoutHome">
    <div class="notesList" v-if="allNotes.length">
      <div class="col" v-for="note in allNotes" :key="note.id" >
        <Note :note="note" />
      </div>
      <div class="col">
        <div class="button success" @click="clickOnCreate">Добавить новую заметку!</div>
      </div>
    </div>
    <div class="emptyNotes" v-if="!allNotes.length">
      Здесь пусто :(
      <div class="button" @click="clickOnCreate">
        Создайте вашу первую заметку
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Note from '@/components/note'

export default {
  computed: {
    ...mapGetters(['allNotes'])
  },
  components: {
    Note
  },
  methods: {
    clickOnCreate () {
      this.$router.replace({
        path: 'noteeditor/'
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/scss/mixins';
.layoutHome {
  .emptyNotes {
    height: 100%;
    @include flexCenter(flex, column);

    .button {
      margin-top: 16px;
    }
  }

  .notesList {
    padding-top: 20px;
    display: grid;
    align-items: center;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
