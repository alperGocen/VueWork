<template>

<UserList />
<NewUser />
</template>

<script>
  import UserList from "@/components/UserList";
  import NewUser from "@/components/NewUser";
  export default {
    name: "App",
    components: {
      UserList,
      NewUser
    },
    created() {
      console.log(this.$store.getters.activeUser);

    }
  }
</script>