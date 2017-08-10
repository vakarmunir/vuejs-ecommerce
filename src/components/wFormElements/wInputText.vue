<template lang="html">
  <div class="row">
    <div class="col">
      <b-form-fieldset
          :description="fieldDescription"
          :label="fieldLabel"
          :feedback="feedback"
          :state="state"
          :label-cols="3">
           <b-form-input :textarea="fieldIsTextArea" :rows="fieldRows" v-model="name" id="name" :state="state" value="" @input="validateInput($event)"></b-form-input>
      </b-form-fieldset>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    textarea:{
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 0
    },
    description : {
      type:String,
      default:""
    },
    label : {
      type:String,
      default:"Label Text"
    },
    maxLength : {
      type:Number,
      default:255
    },
  },
  computed: {
    feedback() {
      return this.fieldFeedback;
    },
    state() {
      return this.fieldState;
    }
  },
  data() {
    return {
      name:'',
      type:'',
      fieldMaxLength: this.maxLength,
      fieldState: "",
      fieldFeedback: "",
      fieldDescription: this.description,
      fieldLabel: this.label,
      fieldIsTextArea: this.textarea,
      fieldRows: this.rows
    }
  },
  methods :{
    validateInput(event)
    {
      if ( event.length > 0 && event.length > this.fieldMaxLength ) {
        this.fieldState = "danger"
        this.fieldFeedback = "Maximum character limit is " + this.fieldMaxLength
      }else if ( event.length > 0 && event.length <= this.fieldMaxLength ) {
        this.fieldState = "success"
        this.fieldFeedback = ""
      }else {
        this.fieldState = ""
        this.fieldFeedback = ""
      }
    }
  },
  mounted(){
  }
}
</script>

<style lang="css">
</style>
