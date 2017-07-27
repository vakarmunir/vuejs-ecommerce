<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <center> <h1>Vue Ecommerce</h1> </center>
      </div>
    </div>
    <div class="row show-grid">
      <!-- Left Nav -->
      <div class="col col-md-2">
        <div class="row">
          <div class="col">
            <b-nav pills vertical>
              <b-nav-item to="/" exact>Products</b-nav-item>
              <b-nav-item to="/add-new">Add New</b-nav-item>
              <!-- <b-nav-item>Another Link</b-nav-item>
              <b-nav-item disabled>Disabled</b-nav-item> -->
            </b-nav>
          </div>
        </div>
      </div>
      <!-- Main Body -->
      <div class="col col-md-10">
        <div class="row">
          <div class="col">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Tabs from './components/Tabs.vue'
export default {
  name: 'app',
  components: {Tabs},
  data () {
    return {

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
