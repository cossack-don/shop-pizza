<!--Выбрать ингридиент - компонент-->
<template>
  <div class="main-style-for-block main-content-app ingredients">

    <h4 class="main-style-title">Выберете ингридиенты</h4>

    <div class="global-gray-line">

    </div>

    <div class="ingredients__body">
      <input type="radio" id="pickedSauceOne" value="Томатный" v-model="pickedSauce">
      <label for="pickedSauceOne">Томатный</label>
      <br>
      <input type="radio" id="pickedSauceTwo" value="Сливочный" v-model="pickedSauce">
      <label for="pickedSauceTwo">Сливочный</label>
      <br>
      <span>Основной соус: {{ pickedSauce }}</span>
      <br>
      <p>Начинка:</p>
    </div>
  </div>
</template>



<script>



export default {
  components: {

  },
  data() {
    return {
      pickedSauce :''
    }
  }
}
</script>

<style lang="scss">
.ingredients {
  margin-top: 20px !important;

  &__body {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}

</style>