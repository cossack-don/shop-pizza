<template>
  <div class="basket-page main-content-app">

    <h1 class="home-page__title">Корзина</h1>
<!--Если корзина пустая то мы выдаем сообщение и ссылку на конструктор-->
    <div v-if="$store.state.arrayWithOrder.length === 0">
      <h4  class="main-style-title basket-page__title-basket-null">Заказы отсутствуют!</h4>

      <router-link
          class="basket-page__link-home-page"
          to="/">Перейти к конструктору пиццы!
      </router-link>
    </div>

<!--если корзина не пустая, выдаем значения-->
    <div v-else class="main-style-for-block main-basket">
      {{$store.state.arrayWithOrder}}

        <div  v-for="(item,index) in $store.state.arrayWithOrder"
              :key="index"
              class="main-basket__wrapper"
        >

          <img src="@/assets/pizza-basket.png" alt="" style="width: 97px; height: 97px">

          <div style="margin-left: 20px; width: 50%; margin-right: 50px;">

            <h4 class="main-style-title">{{item.namePizza}}</h4>
            <p>{{item.dough}} тесто, {{item.pizzaSize}} см</p>
            <p>{{item.sauce}} соус </p>

            <p>
              Начинка:
              <span v-for="(ingredients,index) in item.arrayIngredients"
                    :key="index">

                <span v-if="ingredients.counter >= 1">
                {{ingredients.name}} - {{ingredients.counter}},
                </span>

              </span>

            </p>

          </div>


        <div style="display: flex">
          <button
              class="main-basket__btn-quantity-minus"
              @click="counterQuantityPizzaMinus(index)"
          >
            -
          </button>

          <span class="ingredients-counter__text">{{item.counterQuantityPizza}}</span>

          <button
              class="main-basket__btn-quantity-plus"
              @click="counterQuantityPizzaPlus(index)"
          >
            +
          </button>
        </div>

          <div style="margin-right: auto; margin-left: auto; font-weight: bold;
    font-size: 20px;

    ">
            {{$store.state.arrayWithOrder[index].costOnePizza}} ₽
          </div>


          <router-link style="text-decoration: none" to="/">Изменить</router-link>


        </div>

    </div >

    <button
        v-if="$store.state.arrayWithOrder.length !==0"
        @click="cleanBasket"
        class="basket-page__btn-clean-basket"
    >
      Очистить корзину
    </button>

<AdditionalItem/>
  </div>
</template>



<script>
import { mapMutations } from 'vuex'
import AdditionalItem from '@/components/basket-page/AdditionalItem.vue'

export default {
  name: 'Basket',
  components: {
    AdditionalItem
  },

  methods:{
    ...mapMutations(
        [
            'MUTATION_CLEAN_BASKET',
            'MUTATION_BOOST_QUANTITY_PIZZA_MINUS',
            'MUTATION_BOOST_QUANTITY_PIZZA_PLUS'
        ]
    ),

    cleanBasket() {
      this.MUTATION_CLEAN_BASKET()
    },

    counterQuantityPizzaMinus(indexItem) {
      this.MUTATION_BOOST_QUANTITY_PIZZA_MINUS(indexItem)
    },

    counterQuantityPizzaPlus(indexItem) {
      this.MUTATION_BOOST_QUANTITY_PIZZA_PLUS(indexItem)
    }

  }
}
</script>
<style lang="scss">

.basket-page {

  &__title-basket-null {
    text-align: center;
    margin-top: 20px;
    display: block;
  }

  &__link-home-page {
    color: #ffffff;
    background: #41B619FF;
    font-weight: bold;
    padding: 20px 20px;
    font-size: 20px;
    border-radius: 10px;
    text-decoration: none;
    width: 358px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__btn-clean-basket {
    color: #ffffff;
    background: #FF6B00FF;
    font-weight: bold;
    display: block;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    border: none;

    &:hover {
      cursor: pointer;
      transition: 0.5s;
      background: #ff8f3e;
    }

  }
}

.main-basket {
  margin-bottom: 50px;

  &__wrapper {
    display: flex;
    border-bottom: 1px solid rgba(34, 60, 80, 0.2);
    margin-top: 20px;
    padding-bottom: 20px;

    &:last-child  {
      border-bottom:none;
    }
  }

  &__btn-quantity-plus {
    background:#FF6B00FF;
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

  &__btn-quantity-minus {
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
}

</style>
