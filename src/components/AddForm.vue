<template>
  <div class="full-height">
    <div class="row justify-content-center">
      <div class="col-4 mt-5">
        <div class="card">
          <div class="card-body p-3">
            <div class="card-title">Add Product</div>
            <form @submit.prevent="addProduct">
              <div class="form-group">
                <label for="productName">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="productName"
                  v-model="name"
                />
              </div>
              <div class="form-group">
                <label for="productImage">Image Product</label>
                <input
                  type="text"
                  class="form-control"
                  id="productImage"
                  v-model="image_url"
                />
              </div>
              <div class="form-group">
                <label for="productPrice">Price</label>
                <input
                  type="text"
                  class="form-control"
                  id="productPrice"
                  v-model="price"
                />
              </div>
              <div class="form-group">
                <label for="productStock">Stock</label>
                <input
                  type="text"
                  class="form-control"
                  id="productStock"
                  v-model="stock"
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
  name: 'add-form',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const data = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProducts', data)
    }
  }
}
</script>

<style>
</style>
