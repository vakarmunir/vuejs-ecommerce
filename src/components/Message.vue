<template>
  <div class="box is-active">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default{

}
</script>

<style>
.box{
  padding: 10 px;
  border-color: gray;
  border: 1px solid blue;
  margin-bottom: 10px;
}
</style>
