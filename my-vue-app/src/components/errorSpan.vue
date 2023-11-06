<script lang="ts">
// import {defineComponent} from 'vue'
//
// export default defineComponent({
//   name: "errorSpan"
// })

export default {
  props: {
    value: String,
  },
};
</script>

<template>
  <span v-if="this.value" class="error"> {{ value }}</span>
</template>

<style scoped>
.error {
  color: red;
  margin-top: 5px;
}
</style>
