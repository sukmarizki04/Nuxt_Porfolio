<template>
    <div>
        <p>product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolores! Aut aliquam ut debitis rerum maxime
            placeat alias? Quisquam, libero.</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped></style>