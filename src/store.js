import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        name: 'Product One',
        price: 20
      },
      {
        name: 'Product Two',
        price: 30
      },
      {
        name: 'Product Three',
        price: 40
      },
      {
        name: 'Product Four',
        price: 50
      },
    ]
  },
  mutations: {

  },
  actions: {

  }
})
