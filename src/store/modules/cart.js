import * as types from '../mutation-types'

var _ = require('lodash')

// initial state
// shape: [{ id, quantity }]
const state = {
  added: []
}

const getters = {
  getCart: state => state.added,
  getTotal: state => {
    var val = 0
    _.forEach(state.added, function (product) {
      if (product.product !== undefined) {
        val += product.product.price * product.quantity
      }
    })
    return val
  }
}

// mutations
const mutations = {
  [types.ADD_PRODUCT_TO_CART] (state, { product, quantity }) {
    var obj = _.filter(state.added, (o) => {
      if (o.product.id === product.id) {
        return o
      }
    })
    if (obj.length > 0) {
      _.forEach(obj, (prod) => {
        prod.quantity += quantity
      })
    } else {
      state.added.push({
        product, quantity: quantity
      })
    }
  },
  [types.GET_CART] (state) {
    return state.added
  },
  [types.UPDATE_QUANTITY_IN_CART] (state, payload) {
    _.head(_.filter(state.added, (o) => {
      if (o.product.id === payload.product.id) {
        return o
      }
    })).quantity = payload.quantity
  },
  [types.REMOVE_PRODUCT_FROM_CART] (state, payload) {
    var elementPos = state.added.findIndex(x => x.product.id === payload.product.id)
    state.added.splice(elementPos, 1)
  }
}

export default {
  state,
  getters,
  mutations
}
