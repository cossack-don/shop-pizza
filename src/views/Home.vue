<template>
  <div class="home-page main-content-app">
    <h1 class="home-page__title">Конструктор пиццы</h1>

<section class="wrapper-pick-dough">
  <div class="wrapper-pick-dough__left">
    <PickDough/>
    <ChooseIngredients/>
  </div>
  <div class="wrapper-pick-dough__right">
    <ChooseSize/>
    <TypeOfPizza/>
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
  }
}
</script>

<style lang="scss">
.home-page {

  &__title {
    font-weight: bold;
  }
}

.wrapper-pick-dough {
display: flex;
  justify-content: space-between;

  &__left {
    background:red;
    width: 60%;
  }

  &__right {
    background:yellow;
    width: 38%;
  }
}
</style>
