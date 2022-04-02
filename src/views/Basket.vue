<template>
  <div class="basket-page main-content-app">
    <h1 class="home-page__title">Корзина</h1>

    <div v-if="$store.state.arrayWithOrder.length === 0">
      <h4  class="main-style-title basket-page__title-basket-null">Заказы отсутствуют!</h4>
      <router-link class="basket-page__link-home-page" to="/">Перейти к конструктору пиццы!</router-link>
    </div>


    <div v-else class="main-style-for-block main-basket">
      {{$store.state.arrayWithOrder}}

        <div  v-for="(item,index) in $store.state.arrayWithOrder"
              :key="index"
              class="main-basket__wrapper"
        >

          <img src="@/assets/pizza-basket.png" alt="" style="width: 97px; height: 97px">

          <div>
            <h4 class="main-style-title">__1{{item.namePizza}}1__</h4>
            <p>{{item.dough}} тесто, {{item.pizzaSize}} см</p>
            <p>{{item.sauce}} соус </p>

            <p>
              Начинка:
              <span v-for="(ingredients,index) in item.arrayIngredients"
                    :key="index"> {{ingredients.name}},
              </span>

            </p>

          </div>


          <button
              class="main-basket__btn-quantity-minus">
            -
          </button>

          <span class="ingredients-counter__text">{{item.counterQuantityPizza}}</span>

          <button
              class="main-basket__btn-quantity-plus"
              >
            +
          </button>

          <div>
            762 руб
          </div>


          <router-link to="/">Изменить</router-link>


        </div>

    </div >

    <button @click="cleanBasket">чистить корзину</button>
<AdditionalItem/>
  </div>
</template>



<script>
import { mapMutations } from 'vuex'
import AdditionalItem from '@/components/basket-page/AdditionalItem.vue'

export default {
  name: 'Home',
  components: {
    AdditionalItem
  },
  methods:{
    ...mapMutations(['MUTATION_CLEAN_BASKET',]),
    cleanBasket() {
      this.MUTATION_CLEAN_BASKET()
    }
    // renderExtraIngredient(counter) {
    //   if(counter > 0) {
    //     return true
    //   }
    // }
  }
}
</script>
<style lang="scss">

.basket-page {
  &__title-basket-null
  {
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
}

.main-basket {
  &__wrapper {
    display: flex;
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
