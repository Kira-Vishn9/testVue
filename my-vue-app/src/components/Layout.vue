<script lang="ts">
import { defineComponent } from "vue";
import inputName from "./inputName.vue";
import ErrorSpan from "./errorSpan.vue";

export default defineComponent({
  components: { ErrorSpan, inputName },
});
</script>

<template>
  <div class="layout">
    <slot> </slot>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 33px 5px;
}
</style>
