<template>
     <tr>
      <th scope="row">{{i+1}}</th>
      <td>{{product.name}}</td>
      <td><img :src="product.image_url" alt="" style="width:200px"></td>
      <td>{{product.price}}</td>
      <td>{{product.stock}}</td>
      <td>
        <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button> |
        <button class="btn btn-primary" @click="editProduct(product.id)" >Edit</button>
      </td>
      
    </tr>
</template>

<script>
export default {
  props : ['product' ,'i'],
  methods : {
    deleteProduct(id) {
      this.$store.dispatch('deleteProducts', {id})
    },
    editProduct(id) {
      this.$store.commit('SET_CURRENT_PRODUCTS', this.product)
      this.$router.push(`/edit/${id}`)
    }
  }
}
</script>

<style>

</style>