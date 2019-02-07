<template>
  <div id="app">
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from '@/components/ProductListOne'
import ProductListTwo from '@/components/ProductListTwo'
export default {
  components: {
    ProductListOne,
    ProductListTwo
  },
  data(){
    return{
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
    }
  }
}
</script>


<style lang="scss">

</style>
