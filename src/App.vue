<template>
  <div id="app">
    <product-list/>
    <hr>
    <shopping-cart/>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart'
export default {
  components: {
    ProductList,
    ShoppingCart
  },
  data(){
    return{
    }
  }
}
</script>


<style lang="scss">

</style>
