<template>
    <div>
        <h3>Shopping Cart</h3>
        <ul>
            <li v-for="(product,index) in products" :key="index">
                {{product.title}} - {{product.price}} - {{product.quantity}}
            </li>
        </ul>
        <p>Cart Total: {{total}}</p>
        <p v-if="status">{{status}}</p>
        <button @click="checkout">Checkout</button>
    </div>
</template>

<script>
import {mapState ,mapGetters, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState({
            status: state => state.cart.checkoutStatus
        }),
        ...mapGetters({
            products: 'cartProducts',
            total: 'cartTotal'
        })
    },
    methods: {
        ...mapActions({
            checkout: 'checkout'
        })
    }
}
</script>

<style>

</style>
