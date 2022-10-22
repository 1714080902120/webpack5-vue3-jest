<template>
    <div class="test" @click="onClick">
        {{ num }}
    </div>
</template>

<script setup>
import { ref } from 'vue'

const num = ref(0);

function onClick () {
    num.value += 1
}

</script>