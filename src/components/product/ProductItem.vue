<template>
    <q-item>
        <q-item-section>
            <q-img :src="product?.url?.url" spinner-color="white" style="height: 140px; max-width: 150px" />
        </q-item-section>
        <q-item-section>
            {{ product?.nameUz }}
        </q-item-section>
        <q-item-section>
            {{ product?.cost }}
        </q-item-section>
        <q-item-section>
            {{ product?.address }}
        </q-item-section>
        <q-item-section>
            <q-btn color="info" label="Detail" @click="goDetail()" />
        </q-item-section>
        <q-item-section>
            <q-btn color="amber" glossy label="Update" />
        </q-item-section>
        <q-item-section>
            <q-btn color="deep-orange" glossy label="Delete" />
        </q-item-section>
    </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from '../../models'

export default defineComponent({
    props: {
        product: {
            type: Object as () => Product
        }
    },
    methods: {
        goDetail() {
            this.$router.push(`/product/${this.product?.id}`)
        }
    }

})
</script>