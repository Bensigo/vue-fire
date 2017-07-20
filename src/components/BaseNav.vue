<template>
 <v-toolbar flat>
     <v-toolbar-title left> 
        <router-link  v-bind:style="{cursor:'pointer'}" to='/' class='purple--text' tag="span" >{{title}} </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn flat router :to='link' class='purple--text' >
            <v-icon left class='purple--text'>lock_open</v-icon>
            {{link}}
        </v-btn>
    </v-toolbar-items>
 </v-toolbar> 
</template>

<script>
export default {
  data () {
    return {
      title: 'Tasify'
    }
  },
  props: ['link']
}
</script>

<style scoped>
</style>

