<template>
<div class="container py-4">


    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Online SMS spoofing service</h1>
        <p class="col-md-8 fs-4">Free, Anonymous and Unlimited SMS spoofing tool.</p>
        <button @click.prevent="register" class="btn btn-dark btn-lg" type="button">Register now</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {},
  methods:{
    register(){
      this.$router.push('/register')
    }
  }
}
</script>
