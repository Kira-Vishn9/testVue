<script lang="ts">
import { submitData } from "../api";

export default {
  props: {
    isDisabled: Boolean,
  },
};
</script>

<template>
  <button class="btn" type="submit" :disabled="!isDisabled">
    Зарегистрироваться
  </button>
</template>

<style scoped>
.btn {
  position: relative;
  left: -15px;
  border: 0px;
  border-radius: 8px;
  background: rgba(73, 122, 218, 0.2);
  width: 302px;
  height: 40px;
  flex-shrink: 0;
}
</style>
