<template>
<div class="container">
  <Red class="mb-2"/>
  <Green class="mb-2"/>
  <Blue class="mb-2"/>
</div>
</template>

<script>
  import Red from "@/components/Red"
  import Green from "@/components/Green"
  import Blue from "@/components/Blue"

  export default {
    components: {
      Red,
      Green,
      Blue
    }
  }
</script>