<!--выбрать тесто-->

<template>
  <div class="pick-dough main-style-for-block">
    <h4 class="main-style-title">Выберете тесто</h4>

    <div class="global-gray-line"></div>

    <div class="pick-dough__body dough">

      <div class="dough__thin dough-radio-btn">
        <input id="radio-dough-one" type="radio" name="radio" value="Тонкое" v-model.trim="picked" :value="picked" @input="valueRadioBtn">

        <label for="radio-dough-one" >
          <img class="dough__image" :class="addClassPickLightDough" src="@/assets/testo-light.png" alt="">

          <span class="wrapper-description-dough">
            <span class="wrapper-description-dough__title">Тонкое</span>
             <span class="wrapper-description-dough__text">из твердых сортов пшеницы</span>
          </span>
        </label>
      </div>

      <div class="dough__bold dough-radio-btn">
        <input id="radio-dough-two" type="radio" name="radio" value="Толстое" v-model.trim="picked" :value="picked" @input="valueRadioBtn">

        <label for="radio-dough-two" >
          <img class="dough__image" :class="addClassPickBoldDough" src="@/assets/testo-bold.png"  alt="">
          <span class="wrapper-description-dough">
            <span class="wrapper-description-dough__title">Толстое</span>
             <span class="wrapper-description-dough__text">из твердых сортов пшеницы</span>
          </span>
        </label>

      </div>

    </div>
  </div>

</template>


<script>

export default {
  name: 'Home',
  components: {

  },

  methods:{
    valueRadioBtn(e) {
      const value = e.target.value;
      this.returnCostPickDough(value)

      this.$emit('childComponentPickDoughValueRadioBtn',{
        value:value,
        price: this.price
      })
    },

    returnCostPickDough(lookDough) {

      const arrayPrice = [
        {
          'Тонкое': '100'
        },

        {
          'Толстое': '150'
        },
      ]
      //берем мини словарь и сравниваем размер пиццы
      //через object.entries возвращаем ключ объекта словаря
      //если ключ совпадает с размером пиццы, возвращаем цену за неё

      for(let i = 0; i < arrayPrice.length; i++) {

        if(lookDough === Object.entries(arrayPrice[i])[0][0]) {
          this.price = Object.entries(arrayPrice[i])[0][1]
        }

      }

    }
  },
  computed:{
    addClassPickLightDough() {
      let flag = null;

      if(this.picked === 'Тонкое') {
       return  {
         dough__image_active: flag = true
       }
      }

    },
    addClassPickBoldDough() {
      let flag = null;

      if(this.picked === 'Толстое') {
        return  {
          dough__image_active: flag = true
        }
      }

    }
  },

  data() {
    return {
      picked:'Тонкое',
      price:'100'
    }
  },

}
</script>

<style lang="scss">
.pick-dough {


  &__header {
    font-size: 20px;
    margin-bottom: 10px;
  }
}

.global-gray-line {
  height: 1px;
  background: rgba(34, 60, 80, 0.2);
}

.dough {
  margin-top: 15px;
  margin-bottom:15px;
  display: flex;

  &__body {
    display: flex;
  }
  &__image {
    margin-right: 15px;
    width: 50px;
    height: 50px;
  }
  &__image_active {
      transition: 0.5s;
      border:solid 3px #41B619FF;
      border-radius: 50%;
  }
  &__thin {
    display: flex;
    align-items: center;
    margin-right: 25px;
  }

  &__bold {
    display: flex;
    align-items: center;
  }
}

.wrapper-description-dough {
  display: flex;
  flex-direction: column;
 justify-content: center;

  &__title{
    font-weight: 600;
    font-size: 20px;
  }
}


//Radio Btns
.dough-radio-btn {
  margin-right: 15px;

  input[type=radio] {
    display: none;
  }
  /* Checked */
  //input[type=radio]:checked + label .dough__image {
  //  transition: 0.5s;
  //  border:solid 3px #41B619FF;
  //  border-radius: 50%;
  //}

  label {
    display: flex;
    cursor: pointer;
    user-select: none;

    &:hover {
      color: #666;
    }
  }
}

</style>

