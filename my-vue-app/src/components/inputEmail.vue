<script lang="ts">
export default {
  props: {
    value: String,
  },
  emits: ["input:value"],
  methods: {
    onInput(event: Event) {
      if (!(event.target instanceof HTMLInputElement)) return;
      this.$emit("input:value", event.target.value);
    },
  },
};
</script>
<template>
  <input
    type="email"
    placeholder="Email"
    @input="onInput"
    :value="this.value"
  />
</template>

<style scoped></style>
