<!--внешний вид пиццы-->

<template>
  <div class="main-content-app type-of-pizza">
<!--  стилизовать свой селект  -->
    <select name="" id=""></select>
    <br>

    картинка пиццы
    <img class="type-of-pizza__image-pizza" src="" alt="">
    
    <div class="type-of-pizza__footer">
      <p class="type-of-pizza__price">Итого: 727 ₽</p>
      <router-link class="type-of-pizza__btn" to="/basket">Готовьте!</router-link>
    </div>

  </div>
</template>



<script>



export default {
  components: {

  }
}
</script>

<style lang="scss">
@import '@/scss/app-core/_vars.scss';

.type-of-pizza {

  &__image-pizza {

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
      color:$core-color-yellow ;
      background: #62d939;
    }
  }
}

</style>