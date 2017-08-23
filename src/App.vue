<!-- <template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <center> <h1>Vue Ecommerce</h1> </center>
      </div>
    </div>
    <div class="row show-grid">
      <div class="col col-md-2">
        <div class="row">
          <div class="col">
            <b-nav pills vertical>
              <b-nav-item to="/" exact>Products</b-nav-item>
              <b-nav-item to="/add-new">Add New</b-nav-item>

            </b-nav>
          </div>
        </div>
      </div>

      <div class="col col-md-10">
        <div class="row">
          <div class="col">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>

  </div>
</template> -->
<template>
  <v-app
    height="415px"
    light
    id="e3"
    standalone
  >
    <v-navigation-drawer
      class="pb-0"
      persistent
      absolute
      height="100%"
      clipped
      enable-resize-watcher
      v-model="drawer"
    >
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="indigo" dark>
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <!-- <v-icon class="ml-3">fa-youtube</v-icon> -->
        Vue App
      </v-toolbar-title>

    </v-toolbar>
    <main>
      <v-container>
        <v-layout>
          <v-flex xs12>
            <v-card>
              <v-card-text>
                <v-container fluid>
                  <v-layout row>
                    <v-flex xs12>
                      <v-content>
                        <router-view></router-view>
                      </v-content>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>


          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import Tabs from './components/Tabs.vue'
export default {
  name: 'app',
  components: {Tabs},
  data () {
    return {
      drawer: true,
       items: [
         { icon: 'dashboard', text: 'Home' , link: "/" },
         { icon: 'add_box', text: 'Add Product' , link: '/add-new' }
       ]
    }
  },
  created()
  {

  }
}
</script>

<style>
.show-grid .col
{
  /*border: 1px solid gray;*/
}
.nav .router-link-active
{
  color: #fff !important;
}
</style>
