<template>
  <div>
    <ProductList :products="products"></ProductList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductList from 'src/components/product/ProductList.vue';
import { useStore } from 'src/store';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  components: {
    ProductList
  },
  setup() {
    const store = useStore();
    return { store };
  },

  methods: {
    ...mapActions({
      getAllProducts: 'product/getAll'
    }),
  },

  computed: {
    ...mapState({
      products: (state: any) => state.product.products,
    })
  },

  async mounted() {
    await this.getAllProducts()
  }
});
</script>
