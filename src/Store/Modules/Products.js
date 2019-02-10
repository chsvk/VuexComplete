import Shop from '@/Shop'


export default {
    state: {
        products: []
    },
    getters: {
        availableProducts(state, getters){
            return state.products.filter(product => product.inventory> 0)
          },
          
          isProductAvailable(state){
            return (product)=> {
              return product.inventory > 0;
            }
          }
    },
    mutations: {
        setProducts(state, products){
            state.products = products;
          },
          decrementProductInventory(state, product){
            product.inventory--;
          },
    },
    actions: {
        fetchProducts({commit}){
            return new Promise((resolve, reject)=>{
              Shop.getProducts(products => {
                commit('setProducts', products)
              })
              resolve()
            })
          },
    }
}