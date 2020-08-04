<template>
  <div class="todoList">
    <div class="todo" v-for="(todo, index) in value" :key="index" :class="{hidden: index > 2 && cutted, active: todo.complete}">
      <div class="check" v-if="mutable" @click="toggleComplete(index)">
        <span :class="{ active: todo.complete }"></span>
      </div>
      <div class="title">
        <span v-if="mutable">
          <input class="input" :value="todo.title" @change="handleTitleChange($event, index)" />
          </span>
        <span v-else>
          {{ todo.title }}
        </span>
      </div>
      <div class="remove" v-if="mutable" @click="remove(todo)">
        <Icon name="delete" />
      </div>
    </div>
    <div class="todoInput" v-if="mutable">
      <input class="input" v-model="todoText" @change="add" placeholder="Новая задача !" />
    </div>
  </div>
</template>
<script>
import Icon from '@/components/icon'

export default {
  props: {
    value: Array,
    cutted: {
      type: Boolean,
      default: false
    },
    mutable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    add () {
      const newValue = this.createValueCopy()
      newValue.push({
        title: this.todoText,
        complete: false
      })
      this.todoText = ''
      this.emitter(newValue)
    },
    handleTitleChange (event, idx) {
      const newValue = this.createValueCopy()
      newValue[idx].title = event.target.value
      this.emitter(newValue)
    },
    remove (todo) {
      const newValue = this.createValueCopy()
      newValue.splice(newValue.indexOf(todo), 1)
      this.emitter(newValue)
    },
    toggleComplete (idx) {
      const newValue = this.createValueCopy()
      newValue[idx].complete = !newValue[idx].complete
      this.emitter(newValue)
    },
    createValueCopy () {
      const newValue = []
      this.value.map(item => newValue.push({ ...item }))
      return newValue
    },
    emitter (newValue) {
      this.$emit('input', newValue)
    }
  },
  components: {
    Icon
  }
}
</script>
<style scoped lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';
.todoList {

  padding: 15px;
  box-shadow: 0 3px 12px rgba(10,8,58,.05);

  .todoInput {
    margin-top: $elementMargin / 2;
  }

  .todo {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 50px;
    border-bottom: 1px solid $colorSecondary;

    &.hidden {
      display: none
    }

    &.active {
      .title {
        text-decoration-line: line-through;
      }
    }

    .check {
      position: relative;
      min-width: 50px;
      cursor: pointer;

      span {
          width: 30px;
          height: 30px;
          border-radius: 100%;
          border: 2px solid $colorSecondary;
          @include absoluteCenter;
          transition-duration: $transition-timing;
          box-sizing: border-box;

          &:hover {
            border-color: $colorPrimary;
          }

          &.active {
            background-color: $colorGreen;
          }
      }
    }

    .title {
      flex: 1;

      input,
      input:hover,
      input:focus {
        border: none;
        box-shadow: none;
      }
    }

    .remove {
      cursor: pointer;
      margin-left: auto;
      @include flexCenter;

      &::v-deep path {
        fill: $colorRed
      }
    }
  }
}
</style>
