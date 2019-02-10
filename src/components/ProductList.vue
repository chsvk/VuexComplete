<template>
    <div>
        <h3>Product List</h3>
        <ul>
            <li v-for="(product, index) in products" :key="index">{{product.title}} - {{product.price}}
                <button :disabled="!(inStock(product))" @click="addToCart(product)"> Add To Cart </button>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState({
            products: state => state.products.products
        }),
        ...mapGetters({
            inStock: 'isProductAvailable'
        }),
    },
    created(){
        this.fetch().then(()=>{
            console.log(this.products)
        })
    },
    methods: {
        ...mapActions({
            fetch: 'fetchProducts',
            addToCart: 'addProductToCart'
        }),
    }
}
</script>

<style>

</style>
