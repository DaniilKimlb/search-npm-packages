import {URL_API} from "../constants";

export default {
    state() {
        return {
            packages: [],
            isLoader: false,
            isNothingFound: false
        }
    },
    getters: {
        getPackages: s => s.packages,
        getIsLoader: s => s.isLoader,
        getNothingFound: s => s.isNothingFound,
    },
    mutations: {
        setPackages(state, payload) {
            state.packages = payload
        },
        setNothingFound(state, payload) {
            state.isNothingFound = payload
        },
        setIsLoader(state, payload) {
            state.isLoader = payload
        }
    },
    actions: {
        async changePackages({commit}, payload) {
            commit('setIsLoader', true)
            commit('setPackages', [])
            try {
                const data = await fetch(`${URL_API}-/v1/search?text=${payload}&size=10`)
                const packages = await data.json()
                if (!packages.total) {
                    return commit('setNothingFound', true)
                }
                commit('setNothingFound', false)
                commit('setPackages', packages?.objects)
            } catch (e) {
                console.error(e.message)
            } finally {
                commit('setIsLoader', false)
            }
        }

    }
}
