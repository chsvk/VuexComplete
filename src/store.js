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
  // Normally used when you need a specific part of the whole data.
  // eg: get only the products for which the price is above 10, etc
  // Getters are normally declared inside computed properties. 
  getters: {
    productsOnSale: state => {
      return state.products.map(product =>{
        return{
          name: 'Sale on' + product.name,
          price: product.price/2
        }
      })
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
    reducePrice: state=>{
      state.products.forEach(product=>{
        product.price = product.price-1;
      })
    }
  },
  // actions are used to perform Asynchronous tasks.
  // Its better practice to call mutations from inside actions.
  // Actions need to be dispatched just like mutations has to be commited
  // this.$store.dispatch('reducePrice)
  // Actions can take parameters as context, which is very much similar to state
  actions: {
    reducePrice: context=>{
      context.commit('reducePrice');
    }
  }
})
