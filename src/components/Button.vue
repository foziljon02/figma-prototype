<template>
    <div class="btn-container">
        <button :class="btnClass">{{text}}</button>
    </div>

</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        btnClass: String,
        logo: String
    }
}
</script>

<style scoped>

</style>