<template>
  <div>
    <div class="q-pt-sm q-pl-md">
      <q-btn color="primary" icon="add" label="Add" @click="changeDialogvisible(true)" />
    </div>
    <form-dialog :showDialog="productCreateModal" @changeDialogVisible="changeDialogvisible">
      <ProductCreateForm></ProductCreateForm>
    </form-dialog>
    <ProductList :products="products"></ProductList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductList from 'src/components/product/ProductList.vue';
import ProductCreateForm from 'src/components/product/ProductCreateForm.vue';
import { useStore } from 'src/store';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  components: {
    ProductList,
    ProductCreateForm
  },
  setup() {
    const store = useStore();
    return { store };
  },

  methods: {
    ...mapActions({
      getAllProducts: 'product/getAll',
      changeCreateModalVisible: 'product/changeCreateModalVisible'
    }),
    changeDialogvisible(bool: boolean) {
      this.changeCreateModalVisible(bool)
    }
  },

  computed: {
    ...mapState({
      products: (state: any) => state.product.products,
      productCreateModal: (state: any) => state.product.productCreateModal
    })
  },

  async mounted() {
    await this.getAllProducts()
  }
});
</script>
