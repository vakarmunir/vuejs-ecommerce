<template lang="html">
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
            <b-form-fieldset
                description="Let us know your full name."
                label="Enter your name"
                :feedback="feedback"
                :state="state"
                :label-cols="3">
                 <b-form-input v-model="name" :state="state"></b-form-input>
            </b-form-fieldset>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    feedback() {
      return this.name.length ? '' : 'Please enter something';
    },
    state() {
      return this.name.length ? 'success':'warning';
    },
  },
  data() {
    return {
      name:''
    }
  }
}
</script>

<style lang="css">
</style>
