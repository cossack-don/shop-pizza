<template>
  <div class="main-content-app home-page">
Нужно потом понять, как в корзине сделать кнопку изменить пиццу и вернуться в конструктор с ее ХТС

    <h1 class="home-page__title">Конструктор пиццы</h1>

    <section class="wrapper-pick-dough">
      <!--left-->
      <div class="wrapper-pick-dough__left">

        <PickDough @childComponentPickDoughValueRadioBtn='snarfHandlerPickDoughValueRadioBtn'/>

        <ChooseIngredients
            @childComponentChooseIngredientsValueSauce="snarfHandlerChooseIngredientsValueSauce"
            @arrayWithAllIngredientsActual="snarfHandlerArrayWithAllIngredientsActual"
            @childComponentChooseIngredientsResetArrayData="snarfHandlerChooseIngredientsResetArrayData"
        />

      </div>
      <!--right-->
      <div class="wrapper-pick-dough__right">
        <ChooseSize @childComponentChooseSizeValueRadioBtnSizePizza="snarfHandlerChooseSizeValueRadioBtnSizePizza"/>

        <TypeOfPizza @childComponentTypeOfPizzaValueNamePizza='snarfHandlerTypeOfPizzaValueNamePizza'
                     :allDataPageHome="allDataPageHome"

        />
      </div>

    </section>

    <section class="home-page__result main-style-for-block home-page-result">

      <h4 class="main-style-title">Ваша пицца:</h4>

      <div class="home-page-result__wrapper">

         <div class="home-page-result__left">
           <p class="home-page-result__item">Название: <span>{{firstSingUppercase(allDataPageHome.namePizza)}}</span></p>
           <p class="home-page-result__item">Тесто: <span>{{allDataPageHome.dough}}</span></p>
           <p class="home-page-result__item">Размер: <span>{{allDataPageHome.pizzaSize}} см.</span></p>
           <p class="home-page-result__item">Соус: <span>{{allDataPageHome.sauce}}</span></p>

         </div>

         <div class="home-page-result__right">
           <p class="home-page-result__item">Ингридиенты: </p>
           <p class="home-page-result__item home-page-result__item--null"
              v-if="filterAddIngredientsInArray.length === 0">
             Необходимо добавить ингредиенты!
           </p>

           <div v-else
                v-for="item in filterAddIngredientsInArray"
                :key="item.id">
             <p class="home-page-result__ingredient">{{item.name}} - <span>{{item.counter}}</span></p>
           </div>

         </div>

      </div>
    </section>

  </div>
</template>



<script>
import ChooseIngredients from '@/components/home-page/ChooseIngredients.vue'
import ChooseSize from '@/components/home-page/ChooseSize.vue'
import PickDough from '@/components/home-page/PickDough.vue'
import TypeOfPizza from '@/components/home-page/TypeOfPizza.vue'

export default {
  name: 'Home',

  components: {
    PickDough,
    ChooseSize,
    ChooseIngredients,
    TypeOfPizza
  },

  computed:{
    filterAddIngredientsInArray() {
      return this.allDataPageHome.arrayIngredients.filter(item => {
      //  фильтруем массив
      //  возвращаем массив только с добавленными ингредиентами
      const counter = 0;

        if(item.counter > counter) {
          return item
        }
      })
    },
  },

  methods:{

    snarfHandlerPickDoughValueRadioBtn (dataValueRadioBtn) {
      //перехватываем событие из дочернего компонента и кладем в свою переменную
      this.allDataPageHome.dough = dataValueRadioBtn.value
      //кладем цегу за вид теста / приводим к числу
      this.allDataPageHome.partsCostOnePizza.pickDough = +dataValueRadioBtn.price
    },

    snarfHandlerTypeOfPizzaValueNamePizza (dataValueNamePizza) {
      //перехватываем событие из дочернего компонента и кладем в свою переменную
      this.allDataPageHome.namePizza = dataValueNamePizza
    },

    snarfHandlerChooseSizeValueRadioBtnSizePizza (dataValueRadioBtnSizePizza) {
      //перехватываем событие из дочернего компонента и кладем в свою переменную
      //передаем размер пиццы
      this.allDataPageHome.pizzaSize = dataValueRadioBtnSizePizza.value
      // передаем цену за размер пиццы / приводим к числу
      this.allDataPageHome.partsCostOnePizza.chooseSize = +dataValueRadioBtnSizePizza.price
    },

    snarfHandlerChooseIngredientsValueSauce (dataValueRadioBtnSauce) {
      this.allDataPageHome.sauce = dataValueRadioBtnSauce
    },

    snarfHandlerArrayWithAllIngredientsActual (arrayWithAllIngredients) {
      this.allDataPageHome.arrayIngredients = arrayWithAllIngredients
    },

    snarfHandlerChooseIngredientsResetArrayData (dataArray) {
      this.allDataPageHome.arrayIngredients = dataArray
    },

    firstSingUppercase (str) {
      const indexInWord = 1;
      const firstSingUpperCase = str.charAt().toUpperCase()
      const wordWithoutFirstSing  = str.substr(indexInWord);

      return firstSingUpperCase + wordWithoutFirstSing
    }
  },

  data() {
    return {
      allDataPageHome:{
        //Тесто
        dough:'Тонкое',
        //название пиццы
        namePizza:'Имя Пиццы',
        //размер пиццы
        pizzaSize:'23',
        //соус пиццы
        sauce:'Томатный',
        // массив из всех ингредиентов, счетчик, id, image
        arrayIngredients:[],
        //кол-во товара (одного) в корзине
        counterQuantityPizza:1,

        //части общей суммы за пиццу
        partsCostOnePizza:{
          //размер пиццы стоит
          chooseSize:300,
          //вид теста
          pickDough:100,

        },
      //  стоимость одной пиццы
        costOnePizza:0
      },
    }
  }
}
</script>

<style lang="scss">
.home-page {
  margin-bottom: 35px !important;

  &__result {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &__title {
    margin-top: 20px;
    font-weight: bold;
    font-size: 40px;
  }
}

.wrapper-pick-dough {
  display: flex;
  justify-content: space-between;

  &__left {

    width: 60%;
  }

  &__right {
    width: 38%;
  }
}

.home-page-result {

  &__wrapper {
    display: flex;
    height: 100px;
  }

  &__right {
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
  }

  &__left {
    width: 50%;
  }

  &__item {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;

    span {
      color: #FF6B00FF;
      font-weight: bold;
    }

  }

  &__item--null {
    color:#FF6B00FF;
  }

  &__ingredient {

    span {
      color: #FF6B00FF;
      font-weight: bold;
    }
  }
}
</style>
