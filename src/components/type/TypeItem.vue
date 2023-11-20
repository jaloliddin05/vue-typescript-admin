<template>
    <div v-if="typeDetail">
        <form-dialog :showDialog="typeUpdateModal" @changeDialogVisible="changeDialogvisible">
            <TypeUpdateForm :typeDetail="typeDetail"></TypeUpdateForm>
        </form-dialog>
        <q-item class="z-top">
            <q-item-section>
                {{ typeDetail?.nameUz }}
            </q-item-section>
            <q-item-section>
                {{ typeDetail?.nameRu }}
            </q-item-section>
            <q-item-section>
                {{ typeDetail?.nameEn }}
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
    <div v-if="!typeDetail">
        Empty
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import TypeUpdateForm from './TypeUpdateForm.vue';
import { Type as TypeModel } from '../../models'
import { useStore } from 'src/store';

export default defineComponent({
    setup() {
        const store = useStore()

        return { store }
    },
    props: {
        typeDetail: {
            type: Object as () => TypeModel
        }
    },
    methods: {
        goDetail() {
            this.$router.push(`/type/${this.typeDetail?.id}`)
        },
        ...mapActions({
            remove: 'type/remove',
            changeUpdateModalVisible: 'type/changeUpdateModalVisible'
        }),
        async deleteItem() {
            await this.remove(this.typeDetail?.id)
        },
        changeDialogvisible(bool: boolean) {
            this.changeUpdateModalVisible(bool)
        }
    },
    computed: {
        ...mapState({
            typeUpdateModal: (state: any) => state.type.typeUpdateModal
        })
    },
    components: {
        TypeUpdateForm
    }

})
</script>