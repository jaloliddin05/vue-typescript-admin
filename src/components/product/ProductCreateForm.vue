<template>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <q-input filled v-model="form.nameUz" label="name uz" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type something']" />
        <q-input filled v-model="form.cost" label="cost" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type something']" />

        <select class="f-select" v-model="form.type" placeholder="type">
            <option value="" disabled selected>Type</option>
            <option v-for="tp in types" :key="tp.id" :value="tp.id">{{ tp.nameUz }}</option>
        </select>

        <q-input filled v-model="form.address" label="address" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type something']" />
        <q-file v-model="form.url" label="Image" />
        <div>
            <q-btn label="Create" type="submit" color="primary" />
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
        const form: CreateProductDto = reactive({
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
            create: 'product/create',
            changeCreateModalVisible: 'product/changeCreateModalVisible'
        }),
        async onSubmit() {
            const formData = new FormData();
            formData.append('nameUz', this.form.nameUz);
            formData.append('cost', this.form.cost);
            formData.append('address', this.form.address);
            this.form.type ? formData.append('type', this.form.type) : null;
            this.form.url ? formData.append('url', this.form.url as File) : null;

            await this.create(formData)
            this.changeCreateModalVisible(false)
        }
    },
    computed: {
        ...mapState({
            types: (state: any) => state.type.types
        })
    },
    async mounted() {
        await this.getAllTypes()
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