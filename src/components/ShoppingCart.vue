<template>
    <div>
        <h3>Shopping Cart</h3>
        <ul>
            <li v-for="(product,index) in products" :key="index">
                {{product.title}} - {{product.price}} - {{product.quantity}}
            </li>
        </ul>
        <p>Cart Total: {{total}}</p>
        <p v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p>
        <button @click="$store.dispatch('checkout')">Checkout</button>
    </div>
</template>

<script>
export default {
    computed: {
        products(){
            return this.$store.getters.cartProducts
        },
        total(){
            return this.$store.getters.cartTotal
        }
    }
}
</script>

<style>

</style>
