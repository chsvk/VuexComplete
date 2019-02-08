<template>
    <div>
        <h3>Product List</h3>
        <ul>
            <li v-for="(product, index) in products" :key="index">{{product.title}} - {{product.price}}</li>
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
    }
}
</script>

<style>

</style>
