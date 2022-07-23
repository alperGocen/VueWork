<template>
    <button @click="updateName">Yeni Item Ekle..</button>
</template>

<script>
    export default {
        methods: {
            updateName() {
                const userData = {id: new Date().getTime(), title: "Raf" + new Date().getTime(), type:"Mobilya"};
                //this.$store.commit("newItem", userData);
                this.$store.dispatch("newItem", userData);
                //this.$store.state.fullName = new Date().getTime();
            }
        }
    }
</script>