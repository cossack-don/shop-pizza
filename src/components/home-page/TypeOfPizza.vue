<!--внешний вид пиццы-->

<template>
  <div class="type-of-pizza">
<!--    :value="namePizza"-->
<!--    @input="valueNamePizza"-->
<!--    v-model.trim="namePizza"-->
<!--    valueNamePizza(e) {-->
<!--    передаю значение инпута в родитель (home)-->
<!--    const value = e.target.value;-->
<!--    this.$emit('childComponentTypeOfPizzaValueNamePizza', this.namePizza)-->
<!--     },-->

    <input type="text"
           placeholder="Название вашей пиццы"
           class="type-of-pizza__name-pizza"
           v-model.trim="namePizza"
    >

<div>
<!--  МОЖНО ПОТОМ ОПТИМИЗИРОВАТЬ И СДЕЛАТЬ ЦИКЛОМ-->
  <div class="type-of-pizza__wrapper-images">

    <img  class="type-of-pizza__image-pizza main-style-image type-of-pizza__image-pizza--pizza-null" src="@/assets/image-pizza-null.png" alt="">

    <img src="@/assets/bg-ingredients/all-tomato.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--mushrooms  type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-cheddar.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--cheddar  type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-salami.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--salami  type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-ham.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--ham  type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-pineapple.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--pineapple  type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-bacon.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--bacon type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-allium.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--allium type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-chile.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--chile type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-jalapeno.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--jalapeno type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-olea.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--olea type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-tomato.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--tomato type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-salmon.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--salmon type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-morazzarella.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--morazzarella type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-parmesa.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--parmesa type-of-pizza__image-pizza main-style-image">

    <img src="@/assets/bg-ingredients/all-blue-cheese.png"
         alt=""
         class="ingredient-image type-of-pizza__image-pizza--blue-cheese type-of-pizza__image-pizza main-style-image">




  </div>
</div>

    <div class="type-of-pizza__footer">
      <p class="type-of-pizza__price">Итого: {{ renderCostOnePizza }} ₽</p>
      <router-link @click="addNewOrder" class="type-of-pizza__btn" to="/basket">Готовьте!</router-link>
    </div>
<!--{{allDataPageHome}}-->


  </div>
</template>



<script>
import { mapMutations } from 'vuex'

export default {
  props:['allDataPageHome'],

  data(){
    return {
      namePizza:'',
    }
  },

  computed:{
    renderCostOnePizza() {
      return this.controllerOperationPrice(
          this.allDataPageHome.partsCostOnePizza.pickDough,
          this.allDataPageHome.partsCostOnePizza.chooseSize,
          this.allDataPageHome.arrayIngredients
      )
    }
  },

  methods:{

    ...mapMutations(['MUTATION_ADD_BASKET']),

    addNewOrder() {
      this.MUTATION_ADD_BASKET(this.allDataPageHome)
    },

    controllerOperationPrice(pricePickDough, priceSizePizza, priceIngredients = []) {

     // проходимся по массиву с ингредиентами и при каждом событие фильтруем
     // добавил пользователь что-то к пицце или нет
     // если счетчик добавления больше 1 или = 1, то возвращаем массив с этими ингредиентами
     const returnArrayValueWitchPlusBtn =  priceIngredients.filter(item => {
       if( item.counter >= 1) {
         return item.price
       }
      })

      //счетчик цены ингредиентов
      let countPrice = 0;
      //суммируем общую стоимость ингредиентов которые добавили
      for(let i = 0; i < returnArrayValueWitchPlusBtn.length; i++) {
        countPrice+=returnArrayValueWitchPlusBtn[i].price
      }

    //Соеденяем всю значения в одном и возвращаем
    return this.allDataPageHome.costOnePizza = pricePickDough + priceSizePizza + countPrice
    }
  },

  watch:{
    namePizza:function(es) {
      this.$emit('childComponentTypeOfPizzaValueNamePizza', es)
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/app-core/_vars.scss';

//для картинок ингредиентов , показывает если счетчик больше 1
.ingredient-image {
  display: none;
}

.show-ingredient-image {
  display:block;
}
//end для картинок ингредиентов

.type-of-pizza {
  margin-top: 19px;
  //картинки для наложения на пиццу
  &__wrapper-images {
    position: relative;
    height: 588px;
    display: flex;
    align-items: center;
  }

  &__image-pizza--pizza-null {
    position: absolute;
  }

  &__image-pizza--mushrooms {
    position: absolute;
    z-index: 1;
  }

  &__image-pizza--cheddar {
    position: absolute;
    z-index: 2;
  }

  &__image-pizza--salami {
    position: absolute;
    z-index: 3;
  }

  &__image-pizza--ham {
    position: absolute;
    z-index: 4;
  }

  &__image-pizza--pineapple {
    position: absolute;
    z-index: 5;
  }

  &__image-pizza--bacon {
    position: absolute;
    z-index: 6;
  }

  &__image-pizza--allium {
    position: absolute;
    z-index: 7;
  }

  &__image-pizza--chile {
    position: absolute;
    z-index: 8;
  }

  &__image-pizza--jalapeno {
    position: absolute;
    z-index: 9;
  }

  &__image-pizza--olea {
    position: absolute;
    z-index: 10;
  }

  &__image-pizza--tomato {
    position: absolute;
    z-index: 11;
  }

  &__image-pizza--salmon {
    position: absolute;
    z-index: 12;
  }

  &__image-pizza--morazzarella {
    position: absolute;
    z-index: 13;
  }

  &__image-pizza--parmesa {
    position: absolute;
    z-index: 14;
  }

  &__image-pizza--blue-cheese {
    position: absolute;
    z-index: 15;
  }

  //end картинки для наложения на пиццу

  &__name-pizza {
    width: 100%;
    padding: 10px 20px;
    color: $core-color-text;
    font-size: 20px;
    border-radius: 10px;
    border: solid 2px $core-color-green;

    &:focus {
      border: solid 2px #62d939;

    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__price {
  font-weight: bold;
    font-size: 28px;
  }

  &__btn {
    color: $core-color-white;
    background: $core-color-green;
    font-weight: bold;
    display: block;
    padding: 20px 60px;
    font-size: 20px;
    border-radius: 10px;
    text-decoration: none;
    width: 200px;
    text-align: center;

    &:hover {
      transition: 0.5s;
      color:$core-color-yellow;
      background: #62d939;
    }

  }
}

</style>