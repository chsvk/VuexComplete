<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
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
    }
  }
}
</script>


<style lang="scss">

</style>
