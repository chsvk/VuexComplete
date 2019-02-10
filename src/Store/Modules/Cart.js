import Shop from '@/Shop'

export default {
    state: {
        cart: [],
        checkoutStatus: null
    },
    mutations: {
        pushProductToCart(state, productId){
            state.cart.push({
              id: productId,
              quantity: 1
            })
          },
          incrementItemQuantity(state, cartItem){
            cartItem.quantity++;
          },
          emptyCart(state){
            state.cart = []
          },
          setPurchaseStatus(state, status){
            state.checkoutStatus = status
          },
    },
    getters: {
        
        cartProducts(state, getters, rootState){
        return state.cart.map(cartItem => {
          const product = rootState.products.products.find(product => product.id === cartItem.id)
          return {
            title: product.title,
            price: product.price,
            quantity: cartItem.quantity
          }
        })
      },
      cartTotal(state, getters){
        let total = 0;
        getters.cartProducts.forEach(product => {
          total += product.price * product.quantity
        })
        return total;
      },
    },
    actions: {
        addProductToCart(context, product){
            if(context.getters.isProductAvailable(product)){
              const cartItem = context.state.cart.find(item => item.id === product.id)
              if(!cartItem){
                context.commit('pushProductToCart', product.id)
              }else{
                context.commit('incrementItemQuantity', cartItem)
              }
              context.commit('decrementProductInventory', product)
            }
          },
          checkout( {state,commit}){
            Shop.buyProducts(state.cart,
              ()=>{
                commit('emptyCart')
                commit('setPurchaseStatus', 'Success')
              },
              ()=>{
                commit('setPurchaseStatus', 'Failed')
              }
              )
          }
    }
}