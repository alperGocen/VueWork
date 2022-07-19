const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0
        };
    },
    methods: {
        inc1() {
            this.counter += 1;
        },
        dec1() {
            this.counter -= 1;
        },
        inc2() {
            this.counter2 += 1;
        },
        dec2() {
            this.counter2 -= 1;
        },
    },
    computed: {
        getCounterResult() {
            console.log("counter 1 result");
            return this.counter > 5 ? 'BÜYÜK' : 'KÜÇÜK';
        },
        getCounter2Result() {
            console.log("counter2 result");
            return this.counter2 > 5 ? 'BÜYÜK' : 'KÜÇÜK';
        }
    },
    watch: {
        counter(newValue, oldValue) {n  
            console.log(oldValue, "=>", newValue);
        },
    }
}).mount("#app");