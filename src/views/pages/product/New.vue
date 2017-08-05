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
            <w-input-text label="Name" description="What you are selling ? " :max-length="70"></w-input-text>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wInputText from "../../../components/wFormElements/wInputText.vue"
export default {
  components: {wInputText}
}
</script>

<style lang="css">
</style>
