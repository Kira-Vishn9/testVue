<script lang="ts">
import imgEyeOpen from "../assets/showed.svg";
import imgEyeHided from "../assets/hided.svg";
export default {
  props: {
    value: String,
    placeholder: String,
    isShowPassword: Boolean,
  },
  data() {
    return {
      showPassword: this.isShowPassword,
    };
  },
  emits: ["input:value"],
  methods: {
    onInput(event: Event) {
      if (!(event.target instanceof HTMLInputElement)) return;
      this.$emit("input:value", event.target.value);
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
  computed: {
    changeImgEye() {
      return this.showPassword ? imgEyeOpen : imgEyeHided;
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
      autocomplete="new-password"
    />
    <img
      class="eye"
      :src="changeImgEye"
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
