import { createStore } from "vuex"

const store = createStore({
    state: {
        user: {
            name: "Alper",
            lName: "Göçen",
            password: "12345",
            age: 33
        },
        theme: "dark",
        permissions: [1, 2, 3, 4, 5],
        itemList: [
            {id: 1, title: "Masa", type: "Mobilya"},
            {id: 2, title: "Sandalye", type: "Mobilya"},
            {id: 3, title: "TV", type: "Elektronik"},
            {id: 4, title: "Monitör", type: "Elektronik"},
            {id: 5, title: "Bardak", type: "Plastik"},
        ]
    },
    mutations: { // Mutations run syncronously
        newItem(state, item) {
            state.itemList.push(item);
        }
    },
    actions: { // Actions run asyncronously
        async newItem({commit}, item) {
            await setTimeout(() => {
                commit("newItem", item);
            }, 2000);
        }
    },
    getters: {
        _woodItems: state => state.itemList.filter(i => i.type === "Mobilya"),
        _activeUser(_, state) {
            const user = {
                ...state.user
            };

            delete user.password;
            return user;
        }
    }
});

export default store;