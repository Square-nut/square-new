import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        path: '',
        subPath: ''
    },
    mutations: {
        funcHome(state){
            state.path = 'home';
        },
        funcQQ(state){
            state.path = 'qq';
        }
    },
    getters: {
        path: state => state.path,
        subPath: state => state.subPath
    }
})

export default store;
