<template>
  <div>
    <div class="q-pt-sm q-pl-md">
      <q-btn color="primary" icon="add" label="Add" @click="changeDialogvisible(true)" />
    </div>
    <TypeList :types="types"></TypeList>
  </div>

  <form-dialog :showDialog="typeCreateModal" @changeDialogVisible="changeDialogvisible">
    <TypeCreateForm></TypeCreateForm>
  </form-dialog>

  <form-dialog :showDialog="typeUpdateModal" @changeDialogVisible="changeUpdateDialogvisible">
    <TypeUpdateForm></TypeUpdateForm>
  </form-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

import TypeList from 'src/components/type/TypeList.vue';
import TypeCreateForm from 'src/components/type/TypeCreateForm.vue';
import TypeUpdateForm from 'src/components/type/TypeUpdateForm.vue';

import { useStore } from 'src/store';

export default defineComponent({
  components: {
    TypeList,
    TypeCreateForm,
    TypeUpdateForm
  },
  setup() {
    const store = useStore();
    return { store };
  },

  methods: {
    ...mapActions({
      getAllTypes: 'type/getAll',
      changeCreateModalVisible: 'type/changeCreateModalVisible',
      changeUpdateModalVisible: 'type/changeUpdateModalVisible'
    }),
    changeDialogvisible(bool: boolean) {
      this.changeCreateModalVisible(bool)
    },
    changeUpdateDialogvisible(bool: boolean) {
      this.changeUpdateModalVisible(bool)
    }
  },

  computed: {
    ...mapState({
      types: (state: any) => state.type.types,
      typeCreateModal: (state: any) => state.type.typeCreateModal,
      typeUpdateModal: (state: any) => state.type.typeUpdateModal
    })
  },

  async mounted() {
    await this.getAllTypes()
  }
});
</script>
