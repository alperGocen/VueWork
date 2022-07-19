const app = Vue.createApp({
    data() {
        return {
            searchText: "",
            fruitList: ["apple", "apricot", "peach"]
        };
    },
    methods: {
      
    },
    computed: {
       filteredList() {
            return this.fruitList.filter((i) => i.includes(this.searchText));
       }
    }
}).mount("#app");