<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>
    <hr class="my-2" />
    <AddSection @add-todo="addNewItem"/>
    <TodoList @delete-item="deleteTodoItem" :myData="todoList"/>
    <ResultBar :itemCount="`${todoList.length}`"/>
  </div>
</template>

<script>
  import AddSection from "@/components/AddSection";
  import TodoList from "@/components/TodoList";
  import ResultBar from "@/components/ResultBar";

  export default {
    components: {
      AddSection,
      TodoList,
      ResultBar
    },
    data() {
      return {
        todoList : [
          {id: 1, text: "Bootcamp #2"},
          {id: 2, text: "Bootcamp #2.1"},
          {id: 3, text: "Bootcamp #2.2"},
          {id: 4, text: "Bootcamp #2.3"},
          {id: 5, text: "Bootcamp #2.4"},
          {id: 6, text: "Bootcamp #2.5"},
        ]
      }
    },
    methods: {
      deleteTodoItem(todoItem) {
        this.todoList = this.todoList.filter(todo => todo !== todoItem);
      },
      addNewItem(todo) {
        this.todoList.push({
          id : new Date().getTime(),
          text: todo
        });
      }
    }
  }
</script>