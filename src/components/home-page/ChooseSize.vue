<!--Выбрать размер компонент-->

<template>
  <div class="main-style-for-block main-content-app">

  <h4 class="main-style-title">Выберете размер</h4>

  <div class="global-gray-line"></div>


    <div class="wrapper-choose-size">
<!--      23-->
      <div class="dough-radio-btn ">
        <input id="sizePizza23" type="radio" name="radio" v-model="pickedSizePizza" value="23">

        <label for="sizePizza23">
          <img class="dough__image" :class="addClassPickSize23" src="@/assets/testo-light.png" alt="">
          <span style="margin: auto;">23 см</span>
        </label>
      </div>
<!--     32 -->
      <div class="dough-radio-btn">
        <input id="sizePizza32" type="radio" name="radio" v-model="pickedSizePizza" value="32">

        <label for="sizePizza32">
          <img class="dough__image" :class="addClassPickSize32" src="@/assets/testo-light.png" alt="">
          <span style="margin: auto;">32 см</span>
        </label>
      </div>
<!--   45   -->
      <div class="dough-radio-btn">
        <input id="sizePizza45" type="radio" name="radio" v-model="pickedSizePizza" value="45">

        <label for="sizePizza45">
          <img class="dough__image" :class="addClassPickSize45"  src="@/assets/testo-light.png" alt="">
          <span style="margin: auto;">45 см</span>
        </label>
      </div>
    </div>
<!--    {{pickedSizePizza}}-->
  </div>
</template>

<script>



export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      pickedSizePizza:'23'
    }
  },
  computed:{
    addClassPickSize23() {
      let flag = null;

      if(this.pickedSizePizza === '23') {
        return  {
          dough__image_active: flag = true
        }
      }

    },
    addClassPickSize32() {
      let flag = null;

      if(this.pickedSizePizza === '32') {
        return  {
          dough__image_active: flag = true
        }
      }

    },
    addClassPickSize45() {
      let flag = null;

      if(this.pickedSizePizza === '45') {
        return  {
          dough__image_active: flag = true
        }
      }

    }
  },
}
</script>

<style lang="scss">
.wrapper-choose-size {
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
}

</style>


