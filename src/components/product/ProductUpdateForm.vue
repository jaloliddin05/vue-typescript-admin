<template>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <q-input filled v-model="form.nameUz" label="name uz" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type something']" />
        <q-input filled v-model="form.cost" label="cost" />

        <select class="f-select" v-model="form.type" placeholder="type">
            <option value="" disabled selected>Type</option>
            <option v-for="tp in types" :key="tp.id" :value="tp.id">{{ tp.nameUz }}</option>
        </select>

        <q-input filled v-model="form.address" label="address" />
        <q-file v-model="form.url" label="Image" />
        <div>
            <q-btn label="Update" type="submit" color="primary" />
        </div>
    </q-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { mapActions, mapState } from 'vuex';
import { useStore } from 'src/store';
import { CreateProductDto } from 'src/models/product.model';

export default defineComponent({
    setup() {
        const store = useStore()
        const form: Partial<CreateProductDto> = reactive({
            nameUz: '',
            cost: '',
            address: '',
            type: '',
            url: null,
        });

        return {
            store, form
        }
    },
    methods: {
        ...mapActions({
            getAllTypes: 'type/getAll',
            update: 'product/update',
            changeUpdateModalVisible: 'product/changeUpdateModalVisible'
        }),
        async onSubmit() {
            const formData = new FormData();
            this.form.nameUz ? formData.append('nameUz', this.form.nameUz) : null;
            this.form.cost ? formData.append('cost', this.form.cost) : null;
            this.form.address ? formData.append('address', this.form.address) : null;
            this.form.type ? formData.append('type', this.form.type) : null;
            this.form.url ? formData.append('url', this.form.url as File) : null;

            await this.update({ id: this.productDeteil?.id, data: formData })
            this.changeUpdateModalVisible(false)
        }
    },
    computed: {
        ...mapState({
            types: (state: any) => state.type.types,
            productDeteil: (state: any) => state.product.productDeteil
        })
    },
    async mounted() {
        await this.getAllTypes()

        this.form.nameUz = this.productDeteil?.nameUz || ''
        this.form.cost = this.productDeteil?.cost || ''
        this.form.address = this.productDeteil?.address || ''
        this.form.type = this.productDeteil?.type?.id || ''
    }
})
</script>

<style scoped>
.f-select {
    width: 94%;
    border: none;
    padding: 20px 10px;
    outline: none;
    color: #606060;
    border-radius: 5px;
}
</style>