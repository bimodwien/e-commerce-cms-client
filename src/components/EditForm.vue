<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-4">
        <form @submit.prevent="editProduct(id)">
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
</template>

<script>
export default {
  name: "edit-form",
  props: ["id"],
  data() {
    return {
      name: "",
      image_url: "",
      price: "",
      stock: "",
    };
  },
  methods: {
    editProduct(id) {
      let data = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
      };
      this.$store.dispatch("editProducts", data);
    },
  },
  created() {
    this.$store
      .dispatch("fetchProductsId", id)
      .then(({ data }) => {
        this.name = data.name,
        this.image_url = data.image_url,
        this.price = data.price,
        this.stock = data.stock
      })
      .catch(err => {
        console.log(err)
      })
  },
};
</script>

<style>
</style>