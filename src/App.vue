<template>
  <div id="wrapper-app">
<!--  шапка  -->
    <Header/>

<!--  основной контент  -->
    <main>
      <router-view/>
    </main>

  </div>

</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
}
</script>


<style lang="scss">
@import '@/scss/app-core/_vars.scss';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}

#wrapper-app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:$core-color-text;
}


</style>
