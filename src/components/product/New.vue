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
          <b-form @keyup.native="wValidation.validateInput($event,5)">
            <b-form-fieldset
                description="What you are selling ? "
                label="Name"
                :feedback="feedback"
                :state="state"
                :label-cols="3">
                 <b-form-input v-model="name" id="name" :state="state" value=""></b-form-input>
            </b-form-fieldset>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class WValidation {
  constructor() {

  }
  validateInput(event,length=10)
  {
    let validationRespones = {has_error : false}
    console.log( event.target.value.length , length )
    console.log( event.target.value.lenght > length )
    if (event.target.value.lenght > length) {
      alert("got in ...")
      // validationRespones['has_error'] = true
    }
    //console.log( "validationRespones === ", event.target.value)
    console.log( "validationRespones from wValidation === ", validationRespones)
    Event.$emit("validationResponesFN",validationRespones)
  }
}
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
      name:'',
      wValidation : new WValidation()
    }
  },
  methods :{
    onSubmit(){
      alert("on submitting....");
    },

  },
  mounted(){
    Event.$on('validationResponesFN',(response)=>{
      console.log("finaallyyy === ", response);
    })
  }
}
</script>

<style lang="css">
</style>
