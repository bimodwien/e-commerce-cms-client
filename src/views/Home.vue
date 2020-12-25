<template>
  <div class="home">
    <div class="container full-height">
      <div class="card">
        <div class="card-body">
          <table class="table table-hover table-bordered table-striped">
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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProductForm from '@/components/ProductForm.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    ProductForm
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
