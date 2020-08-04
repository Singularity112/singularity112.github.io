<template>
  <div class="contentLayout layoutEditor">
    <div class="todoEditor">
      <div class="field">
        Список задач
      </div>
      <TodoList :value="todoes" @input="handleTodoesChange" :mutable="true" />
    </div>
    <div class="noteEditor">
      <div class="field">
        <label>
          Заголовок
          <input class="input" :value="title" @change="handleTitleChange" />
        </label>
        <div class="buttons-row field steps">
          <div class="button line reversed"
            :class="{disabled: currentActionIndex === 0}"
            @click="changeAction(-1)"
          >
            <icon name="arrow-right" />
          </div>
          <div class="button line"
            :class="{disabled: currentActionIndex === actionList.length - 1}"
            @click="changeAction(1)"
          >
            <icon name="arrow-right" />
          </div>
        </div>
        <div class="field" v-if="mode == 'edit'">
          <div class="button error" @click="onClickDelete">Удалить</div>
        </div>
        <div class="buttons-row field">
          <div class="button success" @click="onClickSave">Сохранить</div>
          <div class="button" @click="onClickOnCancel">Отменить</div>
        </div>
      </div>
    </div>
    <Modal
      ref="cancelEdit"
      title="Вы собираетесь отменить редактирование"
      buttonYesText="Ага"
      buttonNoText="Нет"
      @clickYes="handleCancel"
    />
    <Modal
      ref="emptyError"
      title="Нельзя оставлять пустыми поле 'Заголовок' и список :("
      buttonNoText="Ладно"
      buttonNoType="success"
      hideYesButton
    />
    <Modal
      ref="deleteNote"
      title="Вы собираетесь удалить заметку"
      buttonYesText="УДАЛИТЬ"
      buttonYesType="error"
      @clickYes="handleDelete"
    />
  </div>
</template>
<script>
import TodoList from '@/components/todoList'
import Icon from '@/components/icon'
import { mapGetters, mapActions } from 'vuex'
import Modal from '@/components/modal'

export default {
  data () {
    return {
      todoes: [],
      title: '',
      actionList: [],
      currentActionIndex: -1,
      mode: 'add',
      noteId: -1
    }
  },
  mounted () {
    const note = this.getNoteById(parseInt(this.$route.params.id))
    if (!note) {
      this.mode = 'add'
    } else {
      this.mode = 'edit'
      this.todoes = note.todoes
      this.title = note.title
      this.noteId = note.id
    }
    this.fillActionList()
  },
  computed: {
    ...mapGetters(['getNoteById'])
  },
  methods: {
    ...mapActions(['addNote', 'editNote', 'deleteNote']),
    handleTitleChange (event) {
      this.title = event.target.value
      this.fillActionList()
    },
    handleTodoesChange (todoes) {
      this.todoes = todoes
      this.fillActionList()
    },
    fillActionList () {
      if (this.currentActionIndex < this.actionList.length) {
        this.actionList.splice(this.currentActionIndex + 1, this.actionList.length - (this.currentActionIndex + 1))
      }
      this.actionList.push({
        todoes: this.todoes,
        title: this.title
      })
      this.currentActionIndex++
    },
    changeAction (idx) {
      this.currentActionIndex += idx
      this.todoes = this.actionList[this.currentActionIndex].todoes
      this.title = this.actionList[this.currentActionIndex].title
    },
    onClickOnCancel () {
      this.$refs.cancelEdit.open()
    },
    handleCancel () {
      this.routeHome()
    },
    handleDelete () {
      this.deleteNote(this.noteId)
      this.routeHome()
    },
    onClickSave () {
      if (!this.todoes.length || !this.title) {
        this.$refs.emptyError.open()
        return
      }

      const note = {
        title: this.title,
        todoes: this.todoes
      }

      if (this.mode === 'add') {
        this.addNote(note)
      } else {
        note.id = this.noteId
        this.editNote(note)
      }
      this.routeHome()
    },
    onClickDelete () {
      this.$refs.deleteNote.open()
    },
    routeHome () {
      this.$router.replace({
        path: '/'
      })
    }
  },
  components: {
    TodoList,
    Icon,
    Modal
  }
}
</script>
<style scoped lang="scss">
@import '@/scss/variables.scss';
.layoutEditor {
  display: grid;
  grid-template-columns: 70% 30%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  .todoEditor {
    padding-right: 10px;
  }

  .noteEditor {
    padding-left: 10px;
    border-left: 1px solid $colorSecondary;

    .steps {
      .reversed {
        &::v-deep svg {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
