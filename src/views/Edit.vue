<template>
  <div>
    <h1>Ini adalah halaman Edit</h1>
    <EditForm :id="this.$route.params.id"></EditForm>
  </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue'
export default {
  components: {
    EditForm
  }
}
</script>

<style>

</style>