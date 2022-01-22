import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: () => ({
        list: [{
                id: 1,
                title: 'Luce'
            },
            {
                id: 2,
                title: 'Walker '
            },
            {
                id: 3,
                title: 'Solis'
            },
            {
                id: 4,
                title: 'Emilia '
            },
            {
                id: 5,
                title: 'Campos'
            },
            {
                id: 6,
                title: 'Travis '
            },
            {
                id: 7,
                title: 'Berger'
            },
            {
                id: 8,
                title: 'Nevaeh '
            },
            {
                id: 9,
                title: 'Kent'
            },
            {
                id: 10,
                title: 'Allison '
            },
            {
                id: 11,
                title: 'Santana'
            },
            {
                id: 12,
                title: 'James '
            },
            {
                id: 13,
                title: 'Robbins'
            },
            {
                id: 14,
                title: 'Marley '
            },
            {
                id: 15,
                title: 'Watkins'
            },
            {
                id: 16,
                title: 'Zaniyah '
            },
            {
                id: 17,
                title: 'Fernandez'
            },
            {
                id: 18,
                title: 'Isabelle '
            },
            {
                id: 19,
                title: 'Callahan'
            },
            {
                id: 20,
                title: 'Demarion '
            },
            {
                id: 21,
                title: 'Galloway'
            },
            {
                id: 22,
                title: 'Annalise '
            },
            {
                id: 23,
                title: 'Olsen'
            },
            {
                id: 24,
                title: 'Oscar '
            },
            {
                id: 25,
                title: 'Mcneil'
            },
            {
                id: 26,
                title: 'Twinkly'
            },
            {
                id: 27,
                title: 'Kirby'
            },
            {
                id: 28,
                title: 'Drake'
            },
            {
                id: 29,
                title: 'Einstein'
            },
            {
                id: 30,
                title: 'Tater'
            },
            {
                id: 31,
                title: 'Kirby'
            },
            {
                id: 32,
                title: 'Drake'
            },
            {
                id: 33,
                title: 'Einstein'
            },
            {
                id: 34,
                title: 'Luce'
            },
        ],
        result: []
    }),
    getters: {
        getList(state) {
            return state.list
        },
        getCoutn(state) {
            return state.result.length
        },
        getResult(state) {
            return state.result
        }
    },
    mutations: {
        filter(state, payload) {
            state.result = state.list.filter(el => el.title.toLocaleLowerCase().includes(payload.toLocaleLowerCase()))
        }
    }
})

export default store