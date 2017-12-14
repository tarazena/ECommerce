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
      _.forEach(obj, (prod) => {
        prod.quantity++
      })
    } else {
      state.added.push({
        product, quantity: 1
      })
    }
  },
  [types.GET_CART] (state) {
    return state.added
  },
  [types.UPDATE_QUANTITY_IN_CART] (state, payload) {
    _.head(_.filter(state.added, (o) => {
      if (o.product.name === payload.product.name) {
        return o
      }
    })).quantity = payload.quantity
  }
}

export default {
  state,
  getters,
  mutations
}
