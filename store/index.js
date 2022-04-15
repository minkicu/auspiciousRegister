export const state = () => ({
    dialog:{
        isShow: false,
        title: '',
        message: ','
    },
    line:{
        pictureUrl: null,
        displayName: null,
        userId: null
    },
    register: {
        firstname: '',
        lastname: '',
        gender: 1,
        birthdate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        birthtime: '',
        birthplace: ''

    }
})

export const getters = {
    getRegister(state){
        return state.register
    },
    getDialog(state){
        return state.dialog
    },
    getLine(state){
        return state.line
    }

}

export const mutations = {
    SET_REGISTER(state, data){
        state.register = {
            ...state.register,
            ...data
        }
    },
    SET_DIALOG(state, data){
        state.dialog = {
            ...state.dialog,
            ...data
        }
    },
    SET_LINE(state, data){
        state.line = {
            ...state.line,
            ...data
        }
    }
}

export const actions = {
    setRegister({ commit }, data){
        commit('SET_REGISTER', data)
    },
    setDialog({ commit }, data){
        commit('SET_DIALOG', data)
    },
    setLine({ commit }, data){
        commit('SET_LINE', data)
    }
}