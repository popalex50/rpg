<template>
 <div class = "mainpage">      
    <section class="hero">
                <div class="hero-body">
                  <div class="container">
                      <img src="./images/hero.jpg"  style="width: 800px;height: 100px">
                    
                  </div>  
                </div>
              </section>
    <div class='columns' is-one-quarter>        
    <aside class="menu">
                
                <ul class="menu-list">

                  <li><a class="button is-primary"> Main Page</a></li>

                  <li><a class="button is primary" @click="goToFightMonster" is-dark> Fight Monsters</a></li>

               

                </ul>
                               
</aside>                           
</div>
</div>  
</template>


<script>
export default {
    methods:{
      goToFightMonster(){
        this.$router.push('/fightMonster')
      }

    }
}
</script>


<style>


</style>
