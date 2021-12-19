<template>
    <div class="fieldset d-flex justify-content-center">
        <div class="fieldset-line"></div>
        <legend class="w-auto px-2 text-muted sign-in__legend">{{legend}}</legend>
        <div class="fieldset-line"></div>
    </div>
</template>

<script>
export default {
    name: 'Fieldset',
    props: {
      legend: String
    }
}
</script>

<style>
.fieldset {
  align-items: center;
}

.fieldset-line {
  width: 150px;
  height: 0.5px;
  background: #888;
  margin-bottom: 8px;
}

.sign-in__legend {
  font-size: 0.9rem;
}

</style>