<template>
    <div class="form-group">
        <label v-bind:for="labelFor" class="font-weight-bold">{{label}}:</label>
        <input
          v-bind:type="inputType"
          class="form-control"
          v-bind:id="label"
          v-bind:placeholder="myPlaceholder"
          v-bind:name="labelFor"
        />
      </div>
</template>

<script>
export default {
    name: 'Inputfield',
    props: {
        label: String,
        labelFor: String,
        inputType: String,
        myPlaceholder: String 
    }
}
</script>

<style scoped>

</style>