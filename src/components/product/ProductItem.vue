<template>
    <div v-if="product">
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
                <q-btn color="amber" glossy label="Update" @click="changeDialogvisible(true)" />
            </q-item-section>
            <q-item-section>
                <q-btn color="deep-orange" glossy label="Delete" @click="deleteItem" />
            </q-item-section>
        </q-item>
    </div>
    <div v-if="!product">
        Empty
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import { useStore } from 'src/store';
import { Product } from '../../models'

export default defineComponent({
    components: {
    },
    setup() {
        const store = useStore()

        return { store }
    },
    props: {
        product: {
            type: Object as () => Product
        }
    },
    methods: {
        ...mapActions({
            changeUpdateModalVisible: 'product/changeUpdateModalVisible',
            getOne: 'product/getOne',
            remove: 'product/remove'
        }),
        goDetail() {
            this.$router.push(`/product/${this.product?.id}`)
        },
        async changeDialogvisible(bool: boolean) {
            await this.getOne(this.product?.id)
            this.changeUpdateModalVisible(bool)
        },
        async deleteItem() {
            await this.remove(this.product?.id)
        },
    },
    computed: {
        ...mapState({
            productUpdateModal: (state: any) => state.product.productUpdateModal
        }),
    }

})
</script>