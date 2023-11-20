<template>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <q-input filled v-model="form.nameUz" label="name uz" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type something']" />
        <q-input filled v-model="form.cost" label="cost" />
        <q-select v-model="form.type" :options="['1', '2', '3']" label="Type" />
        <q-input filled v-model="form.address" label="address" />
        <q-file v-model="form.url" label="Image" />
        <div>
            <q-btn label="Create" type="submit" color="primary" />
        </div>
    </q-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { mapActions, mapState } from 'vuex';
import { useStore } from 'src/store';
import { CreateProductDto } from 'src/models/product.model';

export default defineComponent({
    setup() {
        const store = useStore()
        const t = ref()
        const form: CreateProductDto = reactive({
            nameUz: '',
            cost: '',
            address: '',
            type: '',
            url: null,
        });

        return { store, form, t }
    },
    methods: {
        ...mapActions({
            getAllTypes: 'type/getAll',
            create: 'product/create',
            changeCreateModalVisible: 'product/changeCreateModalVisible'
        }),
        async onSubmit() {
            await this.create(this.form)
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
        this.t = this.types.map((t: any) => t.id)
    }
})
</script>