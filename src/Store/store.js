import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/Store/Actions'

// Importing Modules

import cart from '@/Store/Modules/Cart'
import products from '@/Store/Modules/Products'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    cart,
    products
  },

  state: {
    
  },
  // Normally used when you need a specific part of the whole data.
  // Getters dont accept arguments by default 
  // Arguments have to be passed to getters through higher order functions
  // eg: get only the products for which the price is above 10, etc
  // Getters are normally declared inside computed properties. 
  // Getters are very similar to computed properties
  getters: {
    
  },

  actions,

   
  // Mutations can be very simple and should update only a piece of the state
  // We use mutations to make changes to the state.
  // We use mutations to make changes to the state because, if the changes are made in the front end, it would be
  // harder to debug 
  // Mutations have to be called using commit method.
  // Eg: this.$store.commit('reducePrice')
  // Mutations cannot perform asynchronous tasks
  // Mutations can take parameters as state
  mutations: {
    
    
    
  },
 
})
