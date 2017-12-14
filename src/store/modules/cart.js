import * as types from '../mutation-types'

var _ = require('lodash')

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
  [types.ADD_PRODUCT_TO_CART] (state, { product }) {
    var obj = _.filter(state.added, (o) => {
      if (o.product.name === product.name) {
        return o
      }
    })
    if (obj.length > 0) {
      _.find(state.added, function (storedProduct) {
        storedProduct.quantity++
      })
    } else {
      state.added.push({
        product, quantity: 1
      })
    }
  },
  [types.GET_CART] (state) {
    return state.added
  }
}

export default {
  state,
  getters,
  mutations
}
