<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  emits: ["update:value"],
  methods: {
    onChange(event: Event) {
      if (!(event.target instanceof HTMLInputElement)) return;
      this.$emit("update:value", event.target.checked);
    },
  },
};
</script>

<template>
  <div class="container-checkbox">
    <input
      class="checkbox"
      type="checkbox"
      :checked="value"
      @change="onChange"
    />
    <p class="container-checkbox_text">
      Регистрируясь, Вы соглашаетесь с <a>политикой конфиденциальности</a><br />
      и обработкой <a>персональных данных</a>
    </p>
  </div>
</template>

<style scoped>
.checkbox {
  width: 17px;
  position: relative;
  bottom: 9px;
}
.container-checkbox {
  display: flex;
}
.container-checkbox_text {
  margin-left: 11px;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.021px;
}
</style>
