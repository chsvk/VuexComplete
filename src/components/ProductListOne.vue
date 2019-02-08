<template>
    <div class="listOne">
        <ul>
            <li v-for="(product, index) in products" :key="index">
                <span>{{product.name}}</span>
                <span>{{product.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        products(){
            return this.$store.state.productsOnSale;
        }
    }
}
</script>

<style>

</style>
