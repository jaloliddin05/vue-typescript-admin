<template>
  <div class="q-pa-md">
    <go-back class="q-mb-md"></go-back>
    <q-list bordered>
      <TypeItem :type-detail="typeDetail"></TypeItem>
    </q-list>
  </div>

  <form-dialog :showDialog="typeUpdateModal" @changeDialogVisible="changeUpdateDialogvisible">
    <TypeUpdateForm></TypeUpdateForm>
  </form-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapActions, mapState } from 'vuex';
import { useStore } from 'src/store';
import TypeItem from 'src/components/type/TypeItem.vue';
import TypeUpdateForm from 'src/components/type/TypeUpdateForm.vue';

export default defineComponent({
  components: {
    TypeItem,
    TypeUpdateForm
  },
  setup() {
    const store = useStore()
    return { store }
  },
  methods: {
    ...mapActions({
      getOne: 'type/getOne',
      changeUpdateModalVisible: 'type/changeUpdateModalVisible'
    }),
    changeUpdateDialogvisible(bool: boolean) {
      this.changeUpdateModalVisible(bool)
    }
  },
  computed: {
    ...mapState({
      typeDetail: (state: any) => state.type.typeDetail,
      typeUpdateModal: (state: any) => state.type.typeUpdateModal
    })
  },
  async mounted() {
    await this.getOne(this.$route.params.id)
  }
});
</script>
