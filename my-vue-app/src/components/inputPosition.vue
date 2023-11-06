<script lang="ts">
export default {
  props: {
    name: String,
    options: Array,
  },
  emits: ["change:value"],
  methods: {
    onChangePosition(event: Event) {
      if (!(event.target instanceof HTMLSelectElement)) return;
      if (event.target.selectedIndex === 0) return;
      this.$emit("change:value", event.target.value);
    },
  },
};
</script>

<template>
  <select
    class="wrap-select"
    name="position"
    id="position-select"
    @change="onChangePosition"
  >
    <option value="">{{ name }}</option>
    <option :value="item.value" v-for="item in options" :key="item">
      {{ item.name }}
    </option>
  </select>
</template>

<style scoped></style>
