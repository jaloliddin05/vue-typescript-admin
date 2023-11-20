<template>
    <q-btn square color="secondary" icon="directions" @click="goBack()" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
})
</script>