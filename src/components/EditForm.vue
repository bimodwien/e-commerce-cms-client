<template>
  <div class="full-height">
    <div class="row justify-content-center">
      <div class="col-4 mt-5">
        <div class="card">
          <div class="card-body p-3">
            <div class="card-title">Edit Product</div>
            <form @submit.prevent="editProduct">
              <div class="form-group">
                <label for="productName">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="productName"
                  v-model="product.name"
                />
              </div>
              <div class="form-group">
                <label for="productImage">Image Product</label>
                <input
                  type="text"
                  class="form-control"
                  id="productImage"
                  v-model="product.image_url"
                />
              </div>
              <div class="form-group">
                <label for="productPrice">Price</label>
                <input
                  type="text"
                  class="form-control"
                  id="productPrice"
                  v-model="product.price"
                />
              </div>
              <div class="form-group">
                <label for="productStock">Stock</label>
                <input
                  type="text"
                  class="form-control"
                  id="productStock"
                  v-model="product.stock"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit-form',
  computed: {
    product () {
      return this.$store.state.currentProducts
    }
  },
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    editProduct () {
      const payload = this.product
      this.$store.dispatch('editProducts', payload)
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
