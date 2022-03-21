<!--Выбрать ингридиент - компонент-->
<template>
  <div class="main-style-for-block main-content-app ingredients">

    <h4 class="main-style-title">Выберете ингридиенты</h4>

    <div class="global-gray-line"></div>


    <div class="ingredients__body">
      <div class="ingredients-sauce">
        <p class="ingredients-sauce__title">Основной соус: </p>

        <div class="ingredients-sauce-radio-btn">
<!--          name="radio"-->
          <input type="radio" id="pickedSauceOne" value="Томатный" v-model="pickedSauce">
          <label class="ingredients-sauce-radio-btn__label" for="pickedSauceOne">Томатный</label>
        </div>

        <div class="ingredients-sauce-radio-btn">
<!--          name="radio"-->
          <input type="radio" id="pickedSauceTwo" value="Сливочный" v-model="pickedSauce">
          <label class="ingredients-sauce-radio-btn__label" for="pickedSauceTwo">Сливочный</label>
        </div>

      </div>



<div class="ingredients-stuffing">
  <p class="ingredients-stuffing__title">Начинка:</p>


</div>


<!--      <img :src="`${item.url}`" alt="" v-for="(item,index) in items" :key="index">-->
<div class="ingredients-stuffing-items">
  <div v-for="(item,index) in arrayIngredientsForCounter" :key="index" class="ingredients-stuffing-items__wrapper">

    <div class="ingredients-stuffing-item">
      <img :src="`${item.urlImage}`" alt="" class="ingredients-stuffing-item__image">
      <p class="ingredients-stuffing-item__title">{{item.name}}</p>
    </div>

    <div class="ingredients-stuffing-counters">
      <button class="ingredients-counter-minus ingredients-counter"
              @click="counterMinus(item.counter, index)">-</button>

      <span class="ingredients-counter__text">{{item.counter}}</span>

      <button class="ingredients-counter-plus ingredients-counter"
              :class="{t:ac}"
              @click="counterPlus(item.counter, index)">+</button>
    </div>

  </div>
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
      pickedSauce :'Томатный',
      ac:false,
      arrayIngredientsForCounter:[
        {
          id:1,
          name:'Грибы',
          counter:0,
          urlImage:require('@/assets/ingredients/mushrooms.png'),
          t:false
        },
        {
          id:2,
          name:'Чеддер',
          counter:0,
          urlImage:require('@/assets/ingredients/cheddar.png'),
          t:true
        },
        {
          id:3,
          name:'Салями',
          counter:0,
          urlImage:require('@/assets/ingredients/salami.png'),
          t:true
        },
        {
          id:4,
          name:'Ветчина',
          counter:0,
          urlImage:require('@/assets/ingredients/ham.png'),
          t:true
        },
        {
          id:4,
          name:'Ветчина',
          counter:0,
          urlImage:require('@/assets/ingredients/ham.png'),
          t:true
        }
      ],
      items:[


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
      const maxNumberIngredient = 3;

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
.ingredients-counter {
  &__text {
    font-weight: bold;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
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
.ingredients-sauce {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &__title {
    font-size: 18px;
    font-weight: bold;
    margin-right: 15px;
  }
}
.ingredients-sauce-radio-btn {
  margin-right: 15px;

  &__label {
    &:hover {
      cursor: pointer;
    }
  }
}
.ingredients-sauce-radio-btn {

  label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 25px;
    margin-right: 0;
    line-height: 18px;
    user-select: none;
  }
  label:before {
    content: "";
    display: inline-block;
    width: 17px;
    height: 18px;
    position: absolute;
    left: 0;
    bottom: 1px;
    border: solid 2px #cac6cd;
    border-radius: 50%;
  }
  input[type=radio] {
    display: none;
  }

  input[type=radio]:checked + label:before {
    background: #41B619FF;
  }
}

.ingredients-stuffing{
  &__title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }


}
.ingredients-stuffing-items {
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;

  &__wrapper {
    margin-bottom: 45px;
    margin-right: 48px;
  }
}
.ingredients-stuffing-item {
  display: flex;
  align-items: center;
  &__image {
    margin-right: 15px;
    width: 35px;
    height: auto;
  }
  &__title {
    font-size: 18px;
  }
}
.ingredients-stuffing-counters {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 10px;
}
</style>