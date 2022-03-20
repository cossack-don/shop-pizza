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

      <img :src="`${item.url}`" alt="" v-for="(item,index) in items" :key="index">
    </div>
  </div>
</template>



<script>



export default {
  components: {

  },
  data() {
    return {
      pickedSauce :'',
      items:[
        {
          url:require('@/assets/ingredients/mushrooms.png')
        },
        {
          url:require('@/assets/ingredients/cheddar.png')
        },
        {
          url:require('@/assets/ingredients/salami.png')
        },
        {
          url:require('@/assets/ingredients/ham.png')
        },
        {
          url:require('@/assets/ingredients/pineapple.png')
        },
        {
          url:require('@/assets/ingredients/bacon.png')
        },
        {
          url:require('@/assets/ingredients/allium.png')
        },
        {
          url:require('@/assets/ingredients/chile.png')
        },
        {
          url:require('@/assets/ingredients/jalapeno.png')
        },
        {
          url:require('@/assets/ingredients/olea.png')
        },
        {
          url:require('@/assets/ingredients/tomato.png')
        },
        {
          url:require('@/assets/ingredients/salmon.png')
        },
        {
          url:require('@/assets/ingredients/mozzarella.png')
        },
        {
          url:require('@/assets/ingredients/parmesa.png')
        },
        {
          url:require('@/assets/ingredients/blue-cheese.png')
        },
      ]
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