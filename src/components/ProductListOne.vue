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
    props: {
        products: {
            required: true,
            type: Array
        }
    }
}
</script>

<style>

</style>
