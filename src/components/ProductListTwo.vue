<template>
<!-- The component NO Longer works, because the store is changed -->

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
    // <!-- The component NO Longer works, because the store is changed -->

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
