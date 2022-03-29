<template>
  <div class="main-content-app home-page ">
    <h1 class="home-page__title">Конструктор пиццы</h1>

    Основная задача:
    получить из дочерних компонентов данные и занести их в переменные на странице home
    чтобы потом их перенести в store
    <section class="wrapper-pick-dough">

      <div class="wrapper-pick-dough__left">
        <PickDough @childComponentPickDoughValueRadioBtn='snarfHandlerPickDoughValueRadioBtn'/>
        ПРИМЕР: {{dough}}
        <ChooseIngredients/>
      </div>

      <div class="wrapper-pick-dough__right">
        <ChooseSize/>
        <TypeOfPizza @childComponentTypeOfPizzaValueNamePizza='snarfHandlerTypeOfPizzaValueNamePizza' />
      </div>
      пример: {{namePizza}}
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

  },
  methods:{
    snarfHandlerPickDoughValueRadioBtn(dataValueRadioBtn) {
      //перехватываем событие из дочернего компонента и кладем в свою переменную
      this.dough = dataValueRadioBtn
      // console.log( this.dough )
    },
    snarfHandlerTypeOfPizzaValueNamePizza(dataValueNamePizza) {
      //перехватываем событие из дочернего компонента и кладем в свою переменную
    this.namePizza = dataValueNamePizza
    }
  },
  data() {
    return {
      //Тесто
      dough:'light',
      namePizza:'',

      pizzaSize:'',
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
