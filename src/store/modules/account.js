import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  token: null,
  account: {}
}

const getters = {
  getToken: state => state.token,
  getAccount: state => state.account,
  getOrder: state => id => state.account.orders.filter(order => order.id === id)
}

// mutations
const mutations = {
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_ACCOUNT] (state, payload) {
    state.account = payload
  }
}

const actions = {
  setToken ({ commit }, payload) {
    commit(types.SET_TOKEN, payload)
  },
  setAccount ({commit}, payload) {
    commit(types.SET_ACCOUNT, payload)
  },
  getAccount ({commit}) {
    $.getJSON('../../../static/account.json').done(account => {
      commit(types.SET_ACCOUNT, account)
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
