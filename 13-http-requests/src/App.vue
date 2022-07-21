<template>
  <div class="container">
  <h3>Alışveriş Listesi</h3>
    <hr>  
    <div class="my-2">
      <input type="text" placeholder="ne alacaksın?" @keydown.enter="onSave">
    </div>
    <ul>
      <li class="d-flex justify-content-between align-items-center">
        <span>Eleman 1</span>
        <button class="sm red">Sil</button>
      </li>
      
      <li class="d-flex justify-content-between align-items-center">
        <span>Eleman 1</span>
        <button class="sm red">Sil</button>
      </li>
    </ul>
    <small class="mt-2 text-red d-flex justify-content-end align-items-center">5 adet alınacak ürün vardır</small>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data() {
      return {
        itemsList: []
      }
    },
    mounted() {
      axios.get("http://localhost:3000/items").then(items_response => {
        console.log("items_response :>> ", items_response.data);
        this.itemsList = items_response.data || [];
      });
    },
    methods: {
      onSave(event) {
        let saveObject = {
          title: event.target.value,
          createdAt: new Date(),
          completed: false
        };

        axios.post("http://localhost:3000/items", saveObject).then(save_response => {
          console.log(save_response);
        })
      }
    }
  }
</script>