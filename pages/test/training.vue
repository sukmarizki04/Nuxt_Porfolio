<script setup>
import About from '../About.vue';
import Contact from '../Contact.vue';
import home from '../home.vue';
</script>


<script>
export default {
    data() {
        return {
            message: 'wwjwjwjjwjw'
        }
    },
    methods: {
        reversMessage() {
            this.message = this.message.split('').reverse().join('')
        },
        notify() {
            alert('Notification is stronger')
        }
    }
}
</script>


<template>
    <h1></h1>


</template>