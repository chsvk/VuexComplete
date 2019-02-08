<template>
    <div>
        <h3>Product List</h3>
        <ul>
            <li v-for="(product, index) in products" :key="index">{{product.title}} - {{product.price}}</li>
        </ul>
    </div>
</template>

<script>
import Shop from '@/Shop'
export default {
    data(){
        return{
            products: []
        }
    },
    created(){
        Shop.getProducts(products =>{
            this.products = products
        })
    }
}
</script>

<style>

</style>
