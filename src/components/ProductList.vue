<template>
    <div>
        <h3>Product List</h3>
        <ul>
            <li v-for="(product, index) in products" :key="index">{{product.title}} - {{product.price}}
                <button @click="addProductToCart(product)"> Add To Cart </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        products(){
            return this.$store.getters.availableProducts
        }
    },
    created(){
        this.$store.dispatch('fetchProducts').then(()=>{
            console.log("Products Fetched")
        })
    },
    methods: {
        addProductToCart(product){
            this.$store.dispatch('addProductToCart', product);
        }
    }
}
</script>

<style>

</style>
