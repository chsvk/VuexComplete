<template>
    <div class="listTwo">
        <ul>
            <li v-for="(product, index) in products" :key="index">
                <span>{{product.name}}</span> <br>
                <span>{{product.price}}</span>
            </li>
        </ul>
        <button @click="ReducePrice">Reduce</button>
    </div>
</template>

<script>
export default {
    computed: {
        products(){
            return this.$store.getters.productsOnSale
        },
    },
    methods: {
        ReducePrice(){
            this.$store.dispatch('reducePrice')
        }
    }
}
</script>

<style>

</style>
