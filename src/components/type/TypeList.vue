<template>
    <div class="q-pa-md">
        <q-list bordered>
            <TypeItem v-for="tp of types" :key="tp.id" :type-detail="tp"></TypeItem>
        </q-list>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Type } from '../../models'
import TypeItem from './TypeItem.vue'

export default defineComponent({
    components: {
        TypeItem
    },
    props: {
        types: {
            type: Object as () => Type[]
        }
    }
})
</script>