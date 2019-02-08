import Vue from 'vue'
import Vuex from 'vuex'

import Shop from '@/Shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  // Normally used when you need a specific part of the whole data.
  // eg: get only the products for which the price is above 10, etc
  // Getters are normally declared inside computed properties. 
  // Getters are very similar to computed properties
  getters: {
    availableProducts(state, getters){
      return state.products.filter(product => product.inventory> 0)
    }
  },

    // actions are used to perform Asynchronous tasks.
    // Its better practice to call mutations from inside actions.
    // Actions need to be dispatched just like mutations has to be commited
    // this.$store.dispatch('reducePrice)
    // Actions can take parameters as context, which is very much similar to state
    // Actions can be very complex but should not update the state

  actions: {
    fetchProducts({commit}){
      return new Promise((resolve, reject)=>{
        Shop.getProducts(products => {
          commit('setProducts', products)
        })
        resolve()
      })
      
    }
  },
  // Mutations can be very simple and should update only a piece of the state
  // We use mutations to make changes to the state.
  // We use mutations to make changes to the state because, if the changes are made in the front end, it would be
  // harder to debug 
  // Mutations have to be called using commit method.
  // Eg: this.$store.commit('reducePrice')
  // Mutations cannot perform asynchronous tasks
  // Mutations can take parameters as state
  mutations: {
    setProducts(state, products){
      state.products = products;
    }
  },
 
})
