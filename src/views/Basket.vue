<template>
  <div class="basket-page main-content-app">
    <h1 class="home-page__title">Корзина</h1>

    <div v-if="$store.state.arrayWithOrder.length === 0">
      <h4  class="main-style-title basket-page__title-basket-null">Заказы отсутствуют!</h4>
      <router-link class="basket-page__link-home-page" to="/">Перейти к конструктору пиццы!</router-link>
    </div>


    <div v-else class="main-style-for-block">
      {{$store.state.arrayWithOrder}}

        <div  v-for="(item,index) in $store.state.arrayWithOrder" :key="index" >
          <div style="width:40px;height: 40px; background: red"></div>

          <div>
            <h4 class="main-style-title">{{item.namePizza}}_sss</h4>
            <p>{{item.dough}} тесто, {{item.pizzaSize}} см</p>
            <p>{{item.sauce}} соус </p>

            <p>
              Начинка:
              <span v-for="(ingredients,index) in item.arrayIngredients"
                    :key="index"> {{ingredients.name}},
              </span>

            </p>

          </div>

          <div>
            - 1 +
          </div>

          <div>
            762 руб
          </div>

           <button>изменить заказ</button>
          <hr>
        </div>

    </div >

  </div>
</template>



<script>


export default {
  name: 'Home',
  components: {

  },
  methods:{
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
</style>
