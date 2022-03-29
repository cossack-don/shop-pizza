<template>
  <div class="basket-page">
    Basket page
    <br>
    {{$store.state.arrayWithOrder[0]}}
    <div v-for="(item,index) in $store.state.arrayWithOrder" :key="index">
      indexinArray: {{index}} - namePizza: {{item.namePizza}} <button>изменить заказ</button>
    </div>

  </div>
</template>



<script>


export default {
  name: 'Home',
  components: {

  }
}
</script>
