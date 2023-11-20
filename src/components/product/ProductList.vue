<template>
    <div class="q-pa-md">
        <q-list bordered separator>
            <ProductItem v-for="product of products" :key="product.id" :product="product"></ProductItem>
        </q-list>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from '../../models'
import ProductItem from './ProductItem.vue'

export default defineComponent({
    components: {
        ProductItem,
    },
    props: {
        products: {
            type: Object as () => Product[]
        }
    }
})
</script>