<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="24"
    :height="24"
    viewBox="0 0 24 24"
    role="presentation"
  >
    <g>
      <path :d="icon"></path>
    </g>
  </svg>
</template>
<script>
import icons from '@/utils/icons'

export default {
  props: {
    name: String
  },
  computed: {
    icon () {
      return icons[this.name]
    }
  }
}
</script>
