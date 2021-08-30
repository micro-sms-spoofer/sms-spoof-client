<template>
      <div class="container py-4">
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
            <div class="card mx-auto">
                <div class="card-header text-white bg-dark">
                    <h4>Login</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="loginUser">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input id="username" type="text" placeholder="Username" name="username" v-model="username" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input id="password" type="password" placeholder="Password" name="password" v-model="password" class="form-control" required>
                        </div>
                        <input type="submit" class="btn btn-dark mt-2" value="Login">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <router-link to="/register" class="card-link">Need an account?</router-link>                       
                    </form>
                </div>
            </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        ...mapActions(['login']),
        loginUser(){
            let user = {
                username: this.username,
                password: this.password
            }
            this.login(user).then(res => {
                if(res.data.success){
                    this.$router.push('/profile')
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>