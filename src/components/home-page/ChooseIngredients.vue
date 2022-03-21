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

     <div v-for="(item,index) in arrayIngredientsForCounter" :key="index">
       <img :src="`${item.urlImage}`" alt="">
       {{item.name}} {{item.t}}
       <button class="ingredients-counter-minus ingredients-counter"


               @click="counterMinus(item.counter, index)">-</button>
       {{item.counter}}
       <button class="ingredients-counter-plus ingredients-counter"
               :class="{t:ac}"
               @click="counterPlus(item.counter, index)">+</button>
     </div>

    <button>сброс</button>
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
      ac:false,
      arrayIngredientsForCounter:[
        {
          id:1,
          name:'Грибы',
          counter:2,
          urlImage:require('@/assets/ingredients/mushrooms.png'),
          t:false
        },
        {
          id:2,
          name:'Чеддер',
          counter:4,
          urlImage:require('@/assets/ingredients/mushrooms.png'),
          t:true
        },
        {
          id:3,
          name:'Чеддер',
          counter:4,
          urlImage:require('@/assets/ingredients/mushrooms.png'),
          t:true
        }
      ],
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
  },
  methods:{
    counterMinus(counterMinus, index) {
      const minNumberIngredient = 0;

      if(minNumberIngredient < counterMinus) {
        this.arrayIngredientsForCounter[index].counter--
      }

    },

    counterPlus(counterPlus, index) {
      const maxNumberIngredient = 999;

      if(maxNumberIngredient >counterPlus) {
        this.arrayIngredientsForCounter[index].counter++
      }

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
//color:#FF6B00FF;  orange
.ingredients-counter-minus
{
  background: #F2EEF5FF;
  border-radius: 50%;
  padding: 8px;
  border: none;
  color: #000000;
  font-size: 20px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
}
.ingredients-counter-plus {
  background:#41B619FF;
  border-radius: 50%;
  padding: 8px;
  border: none;
  color: #ffffff;
  font-size: 20px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
}
</style>