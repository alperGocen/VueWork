<template>
    <button @click="addNewItem">Set Data</button>
</template>

<script>
    export default {
        inject: ["addNewItem"]
    }
</script>