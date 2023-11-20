<template>
  <div class="q-pa-md">
    <go-back class="q-mb-md"></go-back>
    <q-list bordered>
      <TypeItem :type-detail="typeDetail"></TypeItem>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapActions, mapState } from 'vuex';
import { useStore } from 'src/store';
import TypeItem from 'src/components/type/TypeItem.vue';

export default defineComponent({
  components: {
    TypeItem
  },
  setup() {
    const store = useStore()
    return { store }
  },
  methods: {
    ...mapActions({
      getOne: 'type/getOne'
    })
  },
  computed: {
    ...mapState({
      typeDetail: (state: any) => state.type.typeDetail
    })
  },
  async mounted() {
    await this.getOne(this.$route.params.id)
  }
});
</script>
