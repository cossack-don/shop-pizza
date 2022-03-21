<!--внешний вид пиццы-->

<template>
  <div class="type-of-pizza">


    <input type="text" v-model.trim="namePizza" placeholder="Название вашей пиццы" class="type-of-pizza__name-pizza">

<div>
  <div style="position: relative; height: 500px">

    <img class="type-of-pizza__image-pizza main-style-image" src="@/assets/image-pizza-null.png" alt="" style="position: absolute">
    <img src="@/assets/bg-ingredients/all-tomato.png" alt="" style="position: absolute; z-index: 1;" class="type-of-pizza__image-pizza main-style-image">
    <img src="@/assets/bg-ingredients/all-chile.png" alt="" style="position: absolute; z-index: 2;" class="type-of-pizza__image-pizza main-style-image">
    <img src="@/assets/bg-ingredients/all-cheddar.png" alt="" style="position: absolute; z-index: 3;" class="type-of-pizza__image-pizza main-style-image">
  </div>
</div>

    
    <div class="type-of-pizza__footer">
      <p class="type-of-pizza__price">Итого: 727 ₽</p>
      <router-link class="type-of-pizza__btn" to="/basket">Готовьте!</router-link>
    </div>

  </div>
</template>



<script>



export default {
  components: {

  },
  data(){
    return {
      namePizza:'',

    }
  }
}
</script>

<style lang="scss">
@import '@/scss/app-core/_vars.scss';

.type-of-pizza {
  margin-top: 19px;

  &__name-pizza {
    width: 100%;
    padding: 10px 20px;
    color: $core-color-text;
    font-size: 20px;
    border-radius: 10px;
    border: solid 2px $core-color-green;

    &:focus {
      border: solid 2px #62d939;

    }
  }
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
      color:$core-color-yellow;
      background: #62d939;
    }
  }
}

</style>