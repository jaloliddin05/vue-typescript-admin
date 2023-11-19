<template>
  <div>Type</div>
  <div>{{ data }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'src/store';

export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store.state);

    const data = store.state.type?.count;

    return { store, data };
  },
});
</script>
