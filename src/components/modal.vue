<template>
  <div class="modal" :class="{ active }" @click.self="close">
    <div class="modalBody">
      <div class="modalHeader">
        {{ title }}
      </div>
      <div class="buttons-row">
        <div class="button" v-if="!hideYesButton" :class="buttonYesType" @click="onClickYes">
          {{ buttonYesText }}
        </div>
        <div class="button" :class="buttonNoType" @click="onClickNo">
          {{ buttonNoText }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: false
    }
  },
  props: {
    title: {
      type: String,
      default: 'Я шапка модала'
    },
    buttonYesText: {
      type: String,
      default: 'Сохранить'
    },
    buttonYesType: {
      type: String,
      default: 'success'
    },
    buttonNoText: {
      type: String,
      default: 'Отменить'
    },
    buttonNoType: {
      type: String,
      default: 'line'
    },
    hideYesButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    open () {
      this.active = true
    },
    close () {
      this.active = false
    },
    onClickYes () {
      this.$emit('clickYes')
    },
    onClickNo () {
      this.$emit('clickNo')
      this.close()
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';

.modal {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  @include flexCenter;
  background-color: rgba(0,0,0,.5);
  display: none;
  transition-duration: $transition-timing;

  .modalHeader {
    padding-top: $elementSidePadding /2;
    padding-bottom: $elementSidePadding;
    font-size: $fs-medium;
    text-align: center;
  }

  .modalBody {
    padding: 16px;
    background-color: $colorWhite;
    width: 100%;
    max-width: 640px;
    transform: translateY(-20px);
    transition-duration: $transition-timing;

    @media screen and (max-width: 640px) {
      max-width: 90%;
    }
  }

  &.active {
    animation: fadeIn $transition-timing forwards;
    display: flex;

    .modalBody {
      animation: moveBottom $transition-timing forwards;
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes moveBottom {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
