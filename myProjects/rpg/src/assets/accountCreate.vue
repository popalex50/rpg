<template>
<div class="form">
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" v-model="user.name" placeholder="Name input">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control">
    <input class="input is-success" type="text" v-model="user.username" placeholder="Username input" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success"></p>
</div>

<div class="field">
  <label class="label">Password</label>
  <div class="control">
    <input class="input" type="password" v-model="user.password" placeholder="Password input">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" v-model="user.email" placeholder="Email input" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
 
</div>


<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>



<div class="field is-grouped">
  <div class="control">
    <button class="button is-text" @click="submit"><router-link to='characterCreate'> Submit </router-link></button>
  </div>
  <div class="control">
    <button class="button is-text">Cancel</button>
  </div>
</div>
</div>    
</template>


<script>
export default {
    data(){
      return{
          user:{
            name:"",
            username:"",
            password:"",
            email:"",
          }
      };
    },
    methods:{
      submit(){
        this.$http.post("https://vue-rpg.firebaseio.com/data.json", this.user, )
            .then(Response =>{
              console.log(Response);
            },error => {
              console.log(error);
            
            });
      }
    }
}
</script>


<style>

</style>
