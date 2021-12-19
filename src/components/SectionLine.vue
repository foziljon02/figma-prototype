<template>
  <div class="d-flex justify-content-between">
    <p class="font-weight-bold text-monospace mt-3 mb-3">{{text}}</p>
    <p class="font-weight-bold text-monospace mt-3 mb-3 text-blue"><a :href="link">View All</a></p>
  </div>
</template>

<script>
export default {
    name: 'SectionLine',
    props: {
        text: String,
        link: String
    }
}
</script>