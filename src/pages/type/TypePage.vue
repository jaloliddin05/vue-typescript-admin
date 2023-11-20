<template>
  <div>
    <div class="q-pt-sm q-pl-md">
      <q-btn color="primary" icon="add" label="Add" @click="changeDialogvisible(true)" />
    </div>
    <form-dialog :showDialog="typeCreateModal" @changeDialogVisible="changeDialogvisible">
      <TypeCreateForm></TypeCreateForm>
    </form-dialog>
    <TypeList :types="types"></TypeList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

import TypeList from 'src/components/type/TypeList.vue';
import TypeCreateForm from 'src/components/type/TypeCreateForm.vue';

import { useStore } from 'src/store';

export default defineComponent({
  components: {
    TypeList,
    TypeCreateForm
  },
  setup() {
    const store = useStore();
    return { store };
  },

  methods: {
    ...mapActions({
      getAllTypes: 'type/getAll',
      changeCreateModalVisible: 'type/changeCreateModalVisible'
    }),
    changeDialogvisible(bool: boolean) {
      this.changeCreateModalVisible(bool)
    }
  },

  computed: {
    ...mapState({
      types: (state: any) => state.type.types,
      typeCreateModal: (state: any) => state.type.typeCreateModal
    })
  },

  async mounted() {
    await this.getAllTypes()
  }
});
</script>
