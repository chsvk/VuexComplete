<template>
<!-- The component NO Longer works, because the store is changed -->
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
    // <!-- The component NO Longer works, because the store is changed -->

    computed: {
        products(){
            return this.$store.state.productsOnSale;
        }
    }
}
</script>

<style>

</style>
