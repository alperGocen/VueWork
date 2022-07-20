<template>
    <label for="todoText"></label>
    <input v-model="todoText" @keydown.enter="addNewItem" type="text" id="todoText" placeholder="bir şeyler yazınız" />
</template>

<script>
    export default {
        data() {
            return {
                todoText: null
            }
        },
        methods: {
            addNewItem(event) {
                this.$emit('add-todo', this.todoText);
                event.target.value = '';
            }
        }
    }
</script>