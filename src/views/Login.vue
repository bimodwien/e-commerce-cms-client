<template>
    <div class="login">
    <h1>This is a login page</h1>
    <div class="justify-content-center">
      <LoginForm />
    </div>
    
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style>

</style>
