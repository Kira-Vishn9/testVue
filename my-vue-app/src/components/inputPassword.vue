<script lang="ts">
export default {
  props: {
    value: String,
    placeholder: String,
    url: String
  },
  emits: ['input:value'],
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    onInput(event: Event) {
      if (!(event.target instanceof HTMLInputElement)) return;
      this.$emit('input:value', event.target.value);
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<template>
  <div class="password-input">
    <input
        :type="showPassword ? 'text' : 'password'"
        :placeholder="placeholder"
        @input="onInput"
        :value="value"
    />
    <img
      class="eye"
      src="../assets/hided.svg"
      alt="Показать/Скрыть пароль"
      @click="togglePasswordVisibility"
    />
  </div>
</template>

<style scoped>
.password-input {
  position: relative;
}
  .eye {
    position: absolute;
    right: 8px;
    top: 17px;
  }
</style>
