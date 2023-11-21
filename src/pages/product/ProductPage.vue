<template>
  <div>
    <div class="q-pt-sm q-pl-md">
      <q-btn color="primary" icon="add" label="Add" @click="changeDialogvisible(true)" />

      <select class="f-select q-ml-md" v-model="type" placeholder="type" @change="getByTypeFromSelect">
        <option value="" disabled selected>Type</option>
        <option v-for="tp in types" :key="tp.id" :value="tp.id">{{ tp.nameUz }}</option>
      </select>

      <q-btn class="q-ml-md" color="primary" label="Get All" @click="getAllProducts" />
    </div>
    <ProductList :products="products"></ProductList>
  </div>

  <form-dialog :showDialog="productCreateModal" @changeDialogVisible="changeDialogvisible">
    <ProductCreateForm></ProductCreateForm>
  </form-dialog>

  <form-dialog :showDialog="productUpdateModal" @changeDialogVisible="changeUpdateDialogvisible">
    <ProductUpdateForm></ProductUpdateForm>
  </form-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProductList from 'src/components/product/ProductList.vue';
import ProductCreateForm from 'src/components/product/ProductCreateForm.vue';
import ProductUpdateForm from 'src/components/product/ProductUpdateForm.vue';
import { useStore } from 'src/store';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  components: {
    ProductList,
    ProductCreateForm,
    ProductUpdateForm
  },
  setup() {
    const store = useStore();
    const type = ref('')
    return { store, type };
  },

  methods: {
    ...mapActions({
      getAllTypes: 'type/getAll',
      getByType: 'product/getByType',
      getAllProducts: 'product/getAll',
      changeCreateModalVisible: 'product/changeCreateModalVisible',
      changeUpdateModalVisible: 'product/changeUpdateModalVisible'
    }),
    changeDialogvisible(bool: boolean) {
      this.changeCreateModalVisible(bool)
    },
    changeUpdateDialogvisible(bool: boolean) {
      this.changeUpdateModalVisible(bool)
    },
    async getByTypeFromSelect() {
      await this.getByType(this.type)
    }
  },

  computed: {
    ...mapState({
      products: (state: any) => state.product.products,
      productCreateModal: (state: any) => state.product.productCreateModal,
      productUpdateModal: (state: any) => state.product.productUpdateModal,
      types: (state: any) => state.type.types
    })
  },

  async mounted() {
    await this.getAllTypes()
    await this.getAllProducts()
  }
});
</script>

<style scoped>
.f-select {
  border: none;
  padding: 10px 10px;
  outline: none;
  color: #1a1919;
  border-radius: 5px;
}
</style>