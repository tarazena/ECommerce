import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  added: []
}

const getters = {
  getCart: state => state.added
}

// mutations
const mutations = {
  [types.ADD_PRODUCT_TO_CART] (state, {
    product
  }) {
    state.added.push(product)
  }
}

export default {
  state,
  getters,
  mutations
}
