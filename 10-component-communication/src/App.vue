<template>
  <div class="container">
   <UserSection/>
  </div>
</template>

<script>
  import UserSection from "@/components/UserSection";
  export default {
    components: {
      UserSection
    },
    data() {
      return {
        provideData: {
          userList : ["Tayfun", "Gökhan", "Defne", "Handan", "Aslı"]
        }
      }
    },
    methods: {
      addNewItem() {
        this.provideData.userList.push(new Date().getTime());
      }
    },
    provide() {
      return {
        userList: this.provideData.userList,
        addNewItem: this.addNewItem
      }
    }
  }
</script>