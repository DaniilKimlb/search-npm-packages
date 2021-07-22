import {URL_API} from "../constants";

export default {
    state() {
        return {
            packages: [],
            isLoader: false,
            isNothingFound: false,
            currentPage: 1,
        }
    },
    getters: {
        getPackages: s => {
            let packagesSkip
            if (s.currentPage !== 1) {
                packagesSkip = (s.currentPage - 1) * 10
            } else {
                packagesSkip = 0
            }
            const pageSize = s.currentPage * 10
            return s.packages.filter((el, idx) => idx < pageSize && idx >= packagesSkip)
        },
        getLengthPagination: s =>  {
            return Math.floor(s.packages.length / 10)
        },
        getIsLoader: s => s.isLoader,
        getNothingFound: s => s.isNothingFound,
    },
    mutations: {
        setPackages(state, payload) {
            state.packages = payload
        },
        changeCurrentPage(state, payload){
            state.currentPage = payload
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
            commit('changeCurrentPage', 1)
            try {
                const data = await fetch(`${URL_API}-/v1/search?text=${payload}&size=100`)
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
