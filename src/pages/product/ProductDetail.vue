<template>
  <div class="q-pa-md">
    <go-back class="q-mb-md"></go-back>
    <q-list bordered>
      <ProductItem :product="productDeteil"></ProductItem>
    </q-list>
  </div>
  <form-dialog :showDialog="productUpdateModal" @changeDialogVisible="changeUpdateDialogvisible">
    <ProductUpdateForm></ProductUpdateForm>
  </form-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProductUpdateForm from 'src/components/product/ProductUpdateForm.vue';
import { mapActions, mapState } from 'vuex';
import { useStore } from 'src/store';
import ProductItem from 'src/components/product/ProductItem.vue';

export default defineComponent({
  components: {
    ProductItem,
    ProductUpdateForm
  },
  setup() {
    const store = useStore()
    return { store }
  },
  methods: {
    ...mapActions({
      getOne: 'product/getOne',
      changeUpdateModalVisible: 'product/changeUpdateModalVisible'
    }),
    changeUpdateDialogvisible(bool: boolean) {
      this.changeUpdateModalVisible(bool)
    },
  },
  computed: {
    ...mapState({
      productDeteil: (state: any) => state.product.productDeteil,
      productUpdateModal: (state: any) => state.product.productUpdateModal,
    })
  },
  async mounted() {
    await this.getOne(this.$route.params.id)
  }
});
</script>
