<template>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <q-input filled v-model="form.nameUz" label="name uz" />
        <q-input filled v-model="form.nameRu" label="name ru" />
        <q-input filled v-model="form.nameEn" label="name en" />
        <q-input type="textarea" filled v-model="form.description" label="description" />
        <div>
            <q-btn label="Update" type="submit" color="primary" />
        </div>
    </q-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { mapActions } from 'vuex';
import { useStore } from 'src/store';
import { Type } from 'src/models'
import { CreateTypeDto } from 'src/models/type.model';

export default defineComponent({
    setup() {
        const store = useStore()
        const form: Partial<CreateTypeDto> = reactive({
            nameUz: '',
            nameRu: '',
            nameEn: '',
            description: '',
        });

        return { store, form }
    },
    props: {
        typeDetail: {
            type: Object as () => Type
        }
    },
    methods: {
        ...mapActions({
            update: 'type/update',
            changeUpdateModalVisible: 'type/changeUpdateModalVisible'
        }),
        async onSubmit() {
            await this.update({ id: this.typeDetail?.id, data: this.form })
            this.changeUpdateModalVisible(false)
        }
    },
    mounted() {
        this.form.nameUz = this.typeDetail?.nameUz
        this.form.nameRu = this.typeDetail?.nameRu
        this.form.nameEn = this.typeDetail?.nameEn
        this.form.description = this.typeDetail?.description
    }
})
</script>