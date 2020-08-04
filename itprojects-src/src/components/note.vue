<template>
  <div class="note">
    <div class="title">
      {{ note.title }}
    </div>
    <div class="todolist">
      <todoList cutted v-model="note.todoes" :size="3" />
    </div>
    <div class="buttons-row">
      <div class="button" @click="onClickEdit(note.id)">Изменить</div>
      <div class="button line" @click="onClickDelete(note.id)">Удалить</div>
    </div>
    <Modal
      ref="deleteNote"
      title="Вы собираетесь удалить заметку"
      buttonYesText="УДАЛИТЬ"
      buttonYesType="error"
      @clickYes="handleDelete(note.id)"
    />
  </div>
</template>
<script>
import todoList from './todoList'
import { mapActions } from 'vuex'
import Modal from '@/components/modal'

export default {
  props: {
    note: Object
  },
  components: {
    todoList,
    Modal
  },
  methods: {
    onClickEdit (id) {
      this.$router.replace({
        path: `noteeditor/${id}`
      })
    },
    onClickDelete (id) {
      this.$refs.deleteNote.open()
    },
    ...mapActions(['deleteNote']),
    handleDelete (id) {
      this.deleteNote(id)
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/scss/variables.scss';

.note {
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid $colorSecondary;

  .title {
    font-size: $fs-medium;
    padding: $elementSidePadding / 2;
    font-weight: 500;
  }
}
</style>
