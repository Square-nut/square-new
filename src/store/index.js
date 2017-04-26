import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        friend:{
            id: '',
            name: ''
        },
        layoutLeftInfo: '消息',
		isBack: false,

    },
    mutations: {
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
