<template>
  <div id="wrapper-app">
    <router-view/>
  </div>

</template>

<style lang="scss">
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
  color: #000000;

  background: red;
}
</style>
