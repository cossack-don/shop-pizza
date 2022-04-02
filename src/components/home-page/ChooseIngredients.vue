<!--Выбрать ингридиент - компонент-->
<template>
  <div class="main-style-for-block main-content-app ingredients">

    <h4 class="main-style-title">Выберете ингридиенты</h4>

    <div class="global-gray-line"></div>


    <div class="ingredients__body">
      <div class="ingredients-sauce">
        <p class="ingredients-sauce__title">Основной соус: </p>

        <div class="ingredients-sauce-radio-btn">
          <!--name="radio"-->
          <input type="radio"
                 id="pickedSauceOne"
                 value="Томатный"
                 v-model="pickedSauce"
                 :value="pickedSauce"
                 @input="valueRadioBtnSauce"
          >
          <label class="ingredients-sauce-radio-btn__label" for="pickedSauceOne">Томатный</label>
        </div>

        <div class="ingredients-sauce-radio-btn">
          <!--name="radio"-->
          <input type="radio"
                 id="pickedSauceTwo"
                 value="Сливочный"
                 v-model="pickedSauce"
                 :value="pickedSauce"
                 @input="valueRadioBtnSauce"
          >
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
              @click="counterMinus(item.counter, index)">
        -
      </button>

      <span class="ingredients-counter__text">{{item.counter}}</span>

      <button class="ingredients-counter-plus ingredients-counter"
              ref="counterColor"
              @click="counterPlus(item.counter, index)">
        +
      </button>

    </div>

  </div>

</div>

<!--{{$store.state.ingredients}}-->
    <button class="ingredients__btn-reset" @click="resetAllParamsPizza">Очистить</button>
    </div>


  </div>
</template>



<script>

export default {

  data() {
    return {
      pickedSauce :'Томатный',

      arrayIngredientsForCounter:[
        {
          id:1,
          name:'Грибы',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/mushrooms.png'),
        },
        {
          id:2,
          name:'Чеддер',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/cheddar.png'),
        },
        {
          id:3,
          name:'Салями',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/salami.png'),
        },
        {
          id:4,
          name:'Ветчина',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/ham.png'),
        },
        {
          id:5,
          name:'Ананас',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/pineapple.png'),

        },
        {
          id:6,
          name:'Бекон',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/bacon.png'),

        },
        {
          id:7,
          name:'Лук',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/allium.png')

        },
        {
          id:8,
          name:'Чили',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/chile.png')

        },
        {
          id:9,
          name:'Халапеньо',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/jalapeno.png')
        },
        {
          id:10,
          name:'Маслины',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/olea.png')
        },
        {
          id:11,
          name:'Томаты',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/tomato.png')
        },
        {
          id:12,
          name:'Лосось',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/salmon.png')
        },
        {
          id:13,
          name:'Моцарелла',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/mozzarella.png')
        },
        {
          id:14,
          name:'Пармезан',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/parmesa.png')
        },
        {
          id:15,
          name:'Блю чиз',
          counter:0,
          price:50,
          urlImage:require('@/assets/ingredients/blue-cheese.png')
        },
      ],

    }
  },
  methods:{
    counterMinus(counterMinus, index) {
      const minNumberIngredient = 0;

      if(minNumberIngredient < counterMinus) {
        this.arrayIngredientsForCounter[index].counter--;

        //создаем новый массив, и закидываем туда данные без картинок
        const arrayWithoutImages = [];
        this.arrayIngredientsForCounter.forEach(item => {
          arrayWithoutImages.push({
            id:item.id,
            name:item.name,
            counter:item.counter,
            price:item.price
          })
        })

        // передаем массив со всеми измененными счетчиками в родительский компонент home
        this.$emit('arrayWithAllIngredientsActual',arrayWithoutImages)

        //если счетчик ингредиента больше 1, делаем кнопку другого цвета
        if(this.arrayIngredientsForCounter[index].counter < 1) {
          this.$refs.counterColor[index].classList.remove("active-orange-btn-plus");

          //пробовал через refs ,но писал ref в другом компоненте и пытался обратиться тут, выдает undef
          //решил сделать через querySelectorAll
          //получаю массив с картинками ингредиентов и добавляю класс если счетчик меньше  1
          const arrayImagesForIngredients = document.querySelectorAll('.ingredient-image');
          arrayImagesForIngredients[index].classList.remove("show-ingredient-image");
        }
      }

    },

    counterPlus(counterPlus, index) {
      const maxNumberIngredient = 3;

      if(maxNumberIngredient >counterPlus) {
        //Увеличиваем счетчии на 1
        this.arrayIngredientsForCounter[index].counter++;

        //создаем новый массив, и закидываем туда данные без картинок
        const arrayWithoutImages = [];
        this.arrayIngredientsForCounter.forEach(item => {
          arrayWithoutImages.push({
            id:item.id,
            name:item.name,
            counter:item.counter,
            price:item.price
          })
        })

        // передаем массив со всеми измененными счетчиками в родительский компонент home
        this.$emit('arrayWithAllIngredientsActual',arrayWithoutImages)

        //если счетчик ингредиента больше 1, делаем кнопку другого цвета .classList.add("show-ingredient-image");
        if(this.arrayIngredientsForCounter[index].counter >= 1) {
          this.$refs.counterColor[index].classList.add("active-orange-btn-plus");

          //пробовал через refs ,но писал ref в другом компоненте и пытался обратиться тут, выдает undef
          //решил сделать через querySelectorAll
          //получаю массив с картинками ингредиентов и добавляю класс если счетчик равен или больше 1
          const arrayImagesForIngredients = document.querySelectorAll('.ingredient-image');
          arrayImagesForIngredients[index].classList.add("show-ingredient-image")
        }

      }

    },

    resetAllParamsPizza() {
      //пробовал через refs ,но писал ref в другом компоненте и пытался обратиться тут, выдает undef
      //решил сделать через querySelectorAll
      //получаю массив с картинками ингредиентов
      const arrayImagesForIngredients = document.querySelectorAll('.ingredient-image');

      this.arrayIngredientsForCounter.forEach((item,index) => {
        //очикаю все кнопки от оранжевого цвета
        this.$refs.counterColor[index].classList.remove("active-orange-btn-plus");
        //очищаю пиццу от картинок ингредиентов
        arrayImagesForIngredients[index].classList.remove("show-ingredient-image")
        //очищаю счетчики у всех ингредиентов
        item.counter = 0

      })

      // сброс к изначальным параметрам
      this.pickedSauce = 'Томатный'
      // очищаем в родительском компоненте массив со всеми ингредиентами (компонент home-parent)
      this.$emit('childComponentChooseIngredientsResetArrayData',[])
    },

    valueRadioBtnSauce(e) {
      const value = e.target.value;
      this.$emit('childComponentChooseIngredientsValueSauce',value)
    }
  },

}
</script>

<style lang="scss">
@import '@/scss/app-core/_vars.scss';

.ingredients {
  margin-top: 20px !important;

  &__btn-reset {
    color: #ffffff;
    background: #FF6B00FF;
    font-weight: bold;
    display: block;
    padding: 20px 60px;
    font-size: 20px;
    border-radius: 10px;
    text-decoration: none;
    width: 200px;
    text-align: center;
    border: none;

    &:hover {
      cursor: pointer;
      transition: 0.5s;
      color:$core-color-yellow;
      background: #ff8f3e;
    }
  }

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
  flex-wrap:wrap;

  &__wrapper {
    margin-bottom: 45px;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

.active-orange-btn-plus {
  background: #FF6B00FF;
}
</style>