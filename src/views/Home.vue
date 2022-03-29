<template>
  <div class="main-content-app home-page ">
    <h1 class="home-page__title">Конструктор пиццы</h1>

    Основная задача:
    получить из дочерних компонентов данные и занести их в переменные на странице home
    чтобы потом их перенести в store
    <section class="wrapper-pick-dough">

      <div class="wrapper-pick-dough__left">
        <PickDough @childComponentPickDoughValueRadioBtn='snarfHandlerPickDoughValueRadioBtn'/>
        ПРИМЕР: {{allDataPageHome.dough}} - Соус: {{allDataPageHome.sauce}}
        <ChooseIngredients
            @childComponentChooseIngredientsValueSauce="snarfHandlerChooseIngredientsValueSauce"
            @arrayWithAllIngredientsActual="snarfHandlerArrayWithAllIngredientsActual"
            @childComponentChooseIngredientsResetArrayData="snarfHandlerChooseIngredientsResetArrayData"
        />


      </div>

      <div class="wrapper-pick-dough__right">
        <ChooseSize @childComponentChooseSizeValueRadioBtnSizePizza="snarfHandlerChooseSizeValueRadioBtnSizePizza"/>
        {{allDataPageHome.pizzaSize}}
        <TypeOfPizza @childComponentTypeOfPizzaValueNamePizza='snarfHandlerTypeOfPizzaValueNamePizza' />
      </div>
      пример: {{allDataPageHome.namePizza}}
    </section>
{{allDataPageHome.arrayIngredients}}
    <hr>
    {{allDataPageHome}}
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

  },
  methods:{
    snarfHandlerPickDoughValueRadioBtn(dataValueRadioBtn) {
      //перехватываем событие из дочернего компонента и кладем в свою переменную
      this.allDataPageHome.dough = dataValueRadioBtn
      // console.log( this.allDataPageHome.dough )
    },

    snarfHandlerTypeOfPizzaValueNamePizza(dataValueNamePizza) {
      //перехватываем событие из дочернего компонента и кладем в свою переменную
    this.allDataPageHome.namePizza = dataValueNamePizza
    },

    snarfHandlerChooseSizeValueRadioBtnSizePizza(dataValueRadioBtnSizePizza) {
      //перехватываем событие из дочернего компонента и кладем в свою переменную
      this.allDataPageHome.pizzaSize = dataValueRadioBtnSizePizza
    },
    snarfHandlerChooseIngredientsValueSauce(dataValueRadioBtnSauce) {
      this.allDataPageHome.sauce = dataValueRadioBtnSauce
    },
    snarfHandlerArrayWithAllIngredientsActual(arrayWithAllIngredients) {
      this.allDataPageHome.arrayIngredients = arrayWithAllIngredients
      console.log(arrayWithAllIngredients)
    },

    snarfHandlerChooseIngredientsResetArrayData (dataArray) {
      this.allDataPageHome.arrayIngredients = dataArray
    }

  },
  data() {
    return {
      allDataPageHome:{
        //Тесто
        dough:'light',
        //название пиццы
        namePizza:'',
        //размер пиццы
        pizzaSize:'23',
        //соус пиццы
        sauce:'Томатный',
        // массив из всех ингредиентов, счетчик, id, image
        arrayIngredients:[]
      },
    }
  }
}
</script>

<style lang="scss">
.home-page {
  margin-bottom: 35px !important;

  &__title {
    margin-top: 20px;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 20px;
  }
}

.wrapper-pick-dough {
display: flex;
  justify-content: space-between;

  &__left {
    //background:red;
    width: 60%;
  }

  &__right {
    //background:yellow;
    width: 38%;
  }
}
</style>
