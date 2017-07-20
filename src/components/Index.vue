<template>
  <div id='main'> 
    <base-nav link='Login'></base-nav>  
    <v-container >
      <div id="context">  
        <h3 class="purple--text">Task Planner</h3>
        <h5 class="grey--text">Build your Team with a social task planner!</h5>
        <span>
            <v-btn class='purple white--text' router to='register'>Register</v-btn>
        </span>
    
      </div>  
    </v-container>
  </div>
</template>



<script>
import BaseNav from '@/components/BaseNav'

export default {
  data () {
    return {}
  },
  components: {
    'base-nav': BaseNav
  }
}
</script>

<style scoped>
#context {
  display:flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100vh; 

}
#main{
   background-image: url('http://7-themes.com/data_images/collection/4/4454706-stars-wallpapers.jpg'); 
   background-repeat: no-repeat;
   background-size: cover;
}

</style>
