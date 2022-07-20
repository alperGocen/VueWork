<template>
   <!-- <ul>
      <li 
      v-for="todoItem in todoList"
      :key="todoItem.id"
      class="d-flex justify-content-between align-items-center"><span>{{ todoItem.text }} </span>
      <button @click="deleteItem(todoItem)" class="sm red">Sil</button>
      </li>
    </ul> -->
    <ul>
        <TodoListItem @delete-item="$emit('delete-item', $event)" v-for="todoItem in myData" :item="todoItem" :key="todoItem.id" />
    </ul>
</template>

<script>
    import TodoListItem from "@/components/TodoListItem"
    export default {
        props: ["myData"],
        components: {
            TodoListItem
        },
        methods: {
        
        }
    }
</script>