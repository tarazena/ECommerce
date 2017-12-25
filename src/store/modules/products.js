import * as types from '../mutation-types'
import * as $ from 'jquery'
require('../../../static/product-items.json')
// var url = 'http://api-ecommerce.azurewebsites.net/v1/getproductlist'
var url = '../../../static/product-items.json'
// initial state
const state = {
  all: [],
  modal: null
}

// getters
const getters = {
  allProducts: state => state.all,
  getProduct: state => id => state.all.filter(item => item.id === id),
  getModal: state => state.modal
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    $.getJSON(url).done(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
      commit(types.SET_MODAL, { item: products[0], added: false })
    })
  },
  setModal ({ commit }, payload) {
    commit(types.SET_MODAL, payload)
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },
  [types.SET_MODAL] (state, item) {
    state.modal = item
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
