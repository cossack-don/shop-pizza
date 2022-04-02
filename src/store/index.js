import { createStore } from 'vuex'

import constructorPizza from './constructor-pizza';
import basket from './basket';

export default createStore({
  state: {
      //массив с заказами
      arrayWithOrder:[],
    // ingredients:
      // [
      //   {
      //     id:1,
      //     name:'Грибы',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/mushrooms.png'),
      //   },
      //   {
      //     id:2,
      //     name:'Чеддер',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/cheddar.png'),
      //   },
      //   {
      //     id:3,
      //     name:'Салями',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/salami.png'),
      //   },
      //   {
      //     id:4,
      //     name:'Ветчина',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/ham.png'),
      //   },
      //   {
      //     id:5,
      //     name:'Ананас',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/pineapple.png'),
      //
      //   },
      //   {
      //     id:6,
      //     name:'Бекон',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/bacon.png'),
      //
      //   },
      //   {
      //     id:7,
      //     name:'Лук',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/allium.png')
      //
      //   },
      //   {
      //     id:8,
      //     name:'Чили',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/chile.png')
      //
      //   },
      //   {
      //     id:9,
      //     name:'Халапеньо',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/jalapeno.png')
      //   },
      //   {
      //     id:10,
      //     name:'Маслины',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/olea.png')
      //   },
      //   {
      //     id:11,
      //     name:'Томаты',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/tomato.png')
      //   },
      //   {
      //     id:12,
      //     name:'Лосось',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/salmon.png')
      //   },
      //   {
      //     id:13,
      //     name:'Моцарелла',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/mozzarella.png')
      //   },
      //   {
      //     id:14,
      //     name:'Пармезан',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/parmesa.png')
      //   },
      //   {
      //     id:15,
      //     name:'Блю чиз',
      //     counter:0,
      //     urlImage:require('@/assets/ingredients/blue-cheese.png')
      //   },
      // ],

  },
  mutations: {
      MUTATION_ADD_BASKET(state, order) {
        state.arrayWithOrder.push(
            order
        )
      },

      MUTATION_CLEAN_BASKET(state) {
        state.arrayWithOrder = []
      },

      MUTATION_BOOST_QUANTITY_PIZZA_PLUS(state) {

      },

      MUTATION_BOOST_QUANTITY_PIZZA_MINUS(state,indexItem) {
          //удаляем элемент из массива по index - при клике
          state.arrayWithOrder.splice(indexItem,1)
      },

  },
  actions: {
      ACTION_ADD_BASKET({commit}) {
          commit('MUTATION_ADD_BASKET')
      },

      ACTION_CLEAN_BASKET({commit}) {
          commit('MUTATION_CLEAN_BASKET')
      },

      ACTION_BOOST_QUANTITY_PIZZA_PLUS({commit}) {
          commit('MUTATION_CLEAN_BASKET')
      },

      ACTION_BOOST_QUANTITY_PIZZA_MINUS({commit}, indexItem) {
          commit('MUTATION_CLEAN_BASKET', indexItem)
      }
  },
  modules: {
      // обращаться к стору-модулю
      //$store.state.constructorPizza
      constructorPizza,
      basket
  }
})
