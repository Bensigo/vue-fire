<template>

  <v-app>
    <v-navigation-drawer class='purple lighten-3 hidden-xs-only' permanent clipped >
        <v-list-tile v-for="item in menuItems" :key='item.title' :style="{ listStyle: 'none'}" > 
            <v-list-tile-action>
                <v-icon left class='white--text'>{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title class="white--text">{{item.title}}</v-list-tile-title>
            </v-list-tile-content>    
        </v-list-tile> 
    </v-navigation-drawer>  
    <v-navigation-drawer v-model="drawer" temporary :style="{ listStyle: 'none'}" >
             <v-list-tile v-for="item in menuItems" :key='item.title' > 
            <v-list-tile-action>
                <v-icon left >{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title >{{item.title}}</v-list-tile-title>
            </v-list-tile-content>    
        </v-list-tile> 
    </v-navigation-drawer>
    <v-toolbar class='purple ' dark> 
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer" class='hidden-sm-and-up'></v-toolbar-side-icon> 
        <v-toolbar-title>Taskify</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat >
                <v-icon class='white--text' left>lock</v-icon>
                sign out
            </v-btn>
        </v-toolbar-items>

    
    </v-toolbar>
  </v-app>
 
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: [
        {icon: 'add', title: 'new task'},
        {icon: 'build', title: 'settings'},
        {icon: 'lock', title: 'sign out'}
      ]
    }
  }
}
</script>

<style>
</style>
