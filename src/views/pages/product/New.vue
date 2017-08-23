<!-- <template lang="html">
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col">
          <h3>Add New Product</h3>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-form>
            <w-input-text label="Name" description="What you are selling ? " :max-length="70"></w-input-text>
            <v-chip :close="true">Waqar</v-chip>
            <w-input-text :textarea="true" :rows="5" label="Description" description="Write a detail about what you're selling ? " :max-length="555"></w-input-text>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template> -->
<template>
  <div class="">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            label="Product"
            v-model="name"
            counter
            max="50"
            required
            persistent-hint
            hint="For example: Car, Shirt or Mobile"
          ></v-text-field>
        </v-flex>

        <v-flex xs12>
          <v-text-field
            multi-line
            label="Description"
            v-model="description"
            counter
            max="300"
            :required="true"
            persistent-hint
            hint="For example: Key Features - Brand Warranty etc"
          ></v-text-field>
        </v-flex>
        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import wInputText from "wFormElements/wInputText.vue"
export default {
  components: {wInputText},
  data()
  {
    return {
      name: '',
      description: '',
      email: '',
      rules: {
        required: (value) => {
          return (!!value || 'Required.')
        },
        email: (value) => {
          const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
