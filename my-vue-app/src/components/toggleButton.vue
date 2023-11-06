<script lang="ts">

export default {
  props: {
    value: Boolean,
  },
  emits: ['update:value'],
  methods: {
    onChange(event: Event) {
      if(!(event.target instanceof HTMLInputElement)) return
      this.$emit('update:value', event.target.checked);
    },
  },
};

</script>

<template>
  <div class="container1">
    <label class="switch">
      <input type="checkbox" :checked="value" @change="onChange">
      <span class="slider round"></span>
    </label>
    <div class="wrap_toggle">
      <span class="title_toggle">Хотите чтобы Ваш профиль видели другие участники платформы? </span>
      <p class="text">Включает профиль для просмотра другими пользователями по ссылке</p>
    </div>
  </div>
</template>

<style scoped>
.wrap_toggle{
  margin-left: 6px;
}
.title_toggle {
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
}
.text{
  color: #696977;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.021px;
}
.container1{
  display: flex;}
.switch {
  position: relative;
  display: inline-block;
  width: 39px;
  height: 19px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: -5px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  margin-right: 5px;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>