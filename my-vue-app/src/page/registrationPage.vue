<script lang="ts" >
import inputName from '../components/inputName.vue'
import inputEmail from  '../components/inputEmail.vue'
import inputPassword from  '../components/inputPassword.vue'
import ToggleButton from "../components/toggleButton.vue";
import CheckBox from "../components/checkBox.vue";
import ButtonSubmit from "../components/buttonSubmit.vue";
import InputPosition from "../components/inputPosition.vue";
import ErrorSpan from "../components/errorSpan.vue";
import {submitData} from "../api";

import {
  validationEmail,
  validationName,
  validationPassword,
  validationPasswordRepeat,
  validationPosition
} from "../validation/validation.ts";
import Layout from "../components/Layout.vue";

export default {
  components: {
    Layout,
    inputName,
    inputEmail,
    inputPassword,
    ToggleButton,
    CheckBox,
    ButtonSubmit,
    InputPosition,
    ErrorSpan,

  },
  data() {
    return {
       Data :{
        inputName: '',
        inputEmail: '',
        inputPosition: '',
        inputPassword: '',
        inputPasswordRepeat: '',
        isVisibilityProfile: true,
        agreement: true
      },
      isSuccessfully: false,

       dataError:{
        inputNameError: '',
        inputEmailError: '',
        inputPositionError: '',
        inputPasswordError: '',
        inputPasswordRepeatError: ''
      },
    };
  },
  methods: {
    updateDataField(field, value, validationFunction) {
      this.dataError[field + 'Error'] = validationFunction(value);
      if (this.dataError[field + 'Error']) return;
      this.Data[field] = value;
    },
    onSubmit() {
      this.updateDataField('inputName', this.Data.inputName, validationName);
      this.updateDataField('inputEmail', this.Data.inputEmail, validationEmail);
      this.updateDataField('inputPosition', this.Data.inputPosition, validationPosition);
      this.updateDataField('inputPassword', this.Data.inputPassword, validationPassword);
      this.updateDataField('inputPasswordRepeat', this.Data.inputPasswordRepeat, (value) =>
          validationPasswordRepeat(value, this.Data.inputPassword)
      );
      if (
          this.dataError.inputNameError ||
          this.dataError.inputEmailError ||
          this.dataError.inputPositionError ||
          this.dataError.inputPasswordError ||
          this.dataError.inputPasswordRepeatError
      ) {
        return;
      }
      submitData(this.Data)
          .then((data)=>{
          if(data === 200) {
            console.log(data === 200)
            this.isSuccessfully = true
          }
          }).catch(() => {
            this.isSuccessfully = false
          })
    },
    validationEmail,
    validationName,
    validationPassword,
    validationPasswordRepeat,
    validationPosition
  },
}

</script>

<template>
  <div v-if="isSuccessfully">
    <p>Регистрация успешно завершена</p>
  </div>
  <div class="container" v-else>
    <h1 class="title">
      Регистрация
    </h1>
    <div class="wrap">
      <span class="title-text">
        Заполните Ваши данные
      </span>
      <div class="wrap-input">
        <layout>
          <inputName :value="Data.inputName" @input:value="value => updateDataField('inputName', value, validationName)" />
          <errorSpan :value="dataError.inputNameError" />
        </layout>
        <layout>
          <inputEmail :value="Data.inputEmail" @input:value="value => updateDataField('inputEmail', value, validationEmail)" />
          <errorSpan :value="dataError.inputEmailError" />
        </layout>
      </div>
      <div class="wrap-input">
        <layout>
        <inputPosition name="Должность"
                       @change:value="value => updateDataField('inputPosition', value, validationPosition)"
                       :options="[
                   {value: 1, name: 'Junior'},
                   {value: 2, name: 'Middle'},
                   {value: 3, name: 'Senior'}
                   ]" />
        <errorSpan :value="dataError.inputPositionError" />
        </layout>
      </div>
      <div class="wrap-input">
        <layout>
          <inputPassword :isShowPassword="true" :placeholder="'Пароль'" :value="Data.inputPassword" @input:value="value => updateDataField('inputPassword', value, validationPassword)" />
          <errorSpan :value="dataError.inputPasswordError" />
        </layout>
        <layout>
          <inputPassword :isShowPassword="false" :placeholder="'Повторите пароль'" :value="Data.inputPasswordRepeat" @input:value="value => updateDataField('inputPasswordRepeat', value, (v) => validationPasswordRepeat(v, Data.inputPassword))" />
          <errorSpan :value="dataError.inputPasswordRepeatError" />
        </layout>
      </div>
    </div>
    <div class="grid-container">
      <toggleButton :value="Data.isVisibilityProfile" @update:value="(value)=>{Data.isVisibilityProfile = value}"/>
      <div class="wrap-checkbox-btn">
        <checkBox :value="Data.agreement" @update:value="(value)=>{Data.agreement = value}"/>
        <buttonSubmit :isDisabled="Data.agreement"  @click="onSubmit"/>
      </div>
    </div>
  </div>
</template>

<style lang="css">
  @import url('../style/index.css');
</style>