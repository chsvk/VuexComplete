import Vue from 'vue'
import Vuex from 'vuex'

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
    productsCount(){

    }
  },

   // actions are used to perform Asynchronous tasks.
  // Its better practice to call mutations from inside actions.
  // Actions need to be dispatched just like mutations has to be commited
  // this.$store.dispatch('reducePrice)
  // Actions can take parameters as context, which is very much similar to state
  actions: {
    fetchProducts(){

    }
  },

  // We use mutations to make changes to the state.
  // We use mutations to make changes to the state because, if the changes are made in the front end, it would be
  // harder to debug 
  // Mutations have to be called using commit method.
  // Eg: this.$store.commit('reducePrice')
  // Mutations cannot perform asynchronous tasks
  // Mutations can take parameters as state
  mutations: {
    setProducts(){
      
    }
  },
 
})
