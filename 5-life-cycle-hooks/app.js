const app = Vue.createApp({
    data() {
        return {
            title: "Test başlığı"
        };
    },
    beforeCreate(){
        console.log("beforeCreate Çalıştı...");
    },
    
    created(){
        console.log("created Çalıştı...");
    },
    beforeMount(){
        console.log("beforeMount Çalıştı...");
    },
    mounted(){
        console.log("mounted Çalıştı...");
    },
    beforeUpdate(){
        console.log("beforeUpdate Çalıştı...");
    },
    updated(){
        console.log("updated Çalıştı...");
    },
    beforeUnmount(){
        console.log("beforeUnmount Çalıştı...");
    },
    unmounted(){
        console.log("unmounted Çalıştı...");
    },
}).mount("#app");