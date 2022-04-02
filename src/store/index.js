import { createStore } from 'vuex'

import constructorPizza from './constructor-pizza';
import basket from './basket';

export default createStore({

  state: {
      //массив с заказами
      arrayWithOrder:[],
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

      //ТУТ НУЖНО ДОДЕЛАТЬ
      //ЕСЛИ СЧЕТЧИК БОЛЬШЕ 1 ТО НАМ НУЖНО СУММИРОВАТЬ ЦЕНУ С ПИЦЦЕЙ И ВЫВОДИТЬ ИТОГ
      //МБ СТОИТ СОЗДАТЬ В СТОРЕ ЕЩЕ 1 ПЕРЕМЕННУЮ И ТУДА ОПРАКИДЫВАТЬ
      MUTATION_BOOST_QUANTITY_PIZZA_PLUS(state, indexItem) {
          // console.log(state.arrayWithOrder[indexItem].costOnePizza)
          state.arrayWithOrder[indexItem].counterQuantityPizza++

          // if(state.arrayWithOrder[indexItem].counterQuantityPizza >= 1 ) {
          //   console.log(333)
          // }
      },

      MUTATION_BOOST_QUANTITY_PIZZA_MINUS(state, indexItem) {
          //удаляем элемент из массива по index - при клике

          state.arrayWithOrder[indexItem].counterQuantityPizza--

            if(state.arrayWithOrder[indexItem].counterQuantityPizza < 1 ) {
                state.arrayWithOrder.splice(indexItem,1)
                return
            }
      },

  },

  actions: {
      ACTION_ADD_BASKET({commit}) {
          commit('MUTATION_ADD_BASKET')
      },

      ACTION_CLEAN_BASKET({commit}) {
          commit('MUTATION_CLEAN_BASKET')
      },

      ACTION_BOOST_QUANTITY_PIZZA_PLUS({commit}, indexItem) {
          commit('MUTATION_BOOST_QUANTITY_PIZZA_PLUS', indexItem)
      },

      ACTION_BOOST_QUANTITY_PIZZA_MINUS({commit}, indexItem) {
          commit('MUTATION_BOOST_QUANTITY_PIZZA_MINUS', indexItem)
      }
  },

  modules: {
      // обращаться к стору-модулю
      //$store.state.constructorPizza
      // constructorPizza,
      // basket
  }
})
