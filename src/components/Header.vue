<template>
  <div class="wrapper-header">
    <header class="header">
<!--  Название приложения    -->
      <router-link to="/" class="header__link">
        <h4 class="header__title">App shop-pizza</h4>
      </router-link>
<!--Иконка корзина-->
      <router-link to="/basket" class="header__basket basket">
        <div class="basket__counter">2</div>
        <img class="basket__basket-icon" src="@/assets/basket-icon.svg" alt="">
      </router-link>
<!--Общая стоимость товаров-->
      <div class="price">1 333 Руб.</div>
<!--иконка-ссылка в ЛК-->
      <router-link to="/lk" class="link-lk">
        <img class="link-lk__lk-icon" src="@/assets/lk-icon.svg" alt="">
      </router-link>

    </header>
  </div>

</template>

<script>

export default {
  name: 'Header',
  components: {
  },

}
</script>

<style lang="scss">
//Обертка шапки
.wrapper-header {
  background: #41B619FF;
}
//Шапка
.header {
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  padding: 10px;

  &__link {
    text-decoration: none;
  }

  &__title {
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;

    &:hover {
      transition: 0.5s;
      color: yellow;
    }
  }

}
//Ссылка ЛК
.link-lk{

  &__lk-icon {
    height: 30px;
    width: 30px;

    &:hover {
      cursor: pointer;
    }
  }

}
// общая цена покупок
.price {
  font-weight: bold;
  color: #ffffff;
  margin-left: 20px;
  margin-right: 20px;
}
//иконка карзина
.basket {
  width: 40px;
  position: relative;
  margin-left: auto;

  &:hover {
    cursor: pointer;
  }

  &__counter {
    position: absolute;
    background: yellow;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    right: 0;
    color: #000000;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__basket-icon {
    height: 35px;
    width: 35px;
  }
}
</style>