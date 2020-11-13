<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>Welcome!!</h1><br>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <ProductForm
            v-for="(product, i) in products"
            :key="product.id"
            :product="product"
            :i="i"
          >
          </ProductForm>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProductForm from "@/components/ProductForm.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    ProductForm,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>
