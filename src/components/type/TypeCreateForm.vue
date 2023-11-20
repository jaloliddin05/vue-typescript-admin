<template>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <q-input filled v-model="form.nameUz" label="name uz" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type something']" />
        <q-input filled v-model="form.nameRu" label="name ru" />
        <q-input filled v-model="form.nameEn" label="name en" />
        <q-input type="textarea" filled v-model="form.description" label="description" />
        <div>
            <q-btn label="Create" type="submit" color="primary" />
        </div>
    </q-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { mapActions } from 'vuex';
import { useStore } from 'src/store';
import { CreateTypeDto } from 'src/models/type.model';

export default defineComponent({
    setup() {
        const store = useStore()
        const form: CreateTypeDto = reactive({
            nameUz: '',
            nameRu: '',
            nameEn: '',
            description: '',
        });

        return { store, form }
    },
    methods: {
        ...mapActions({
            create: 'type/create',
            changeCreateModalVisible: 'type/changeCreateModalVisible'
        }),
        async onSubmit() {
            await this.create(this.form)
            this.changeCreateModalVisible(false)
        }
    }
})
</script>