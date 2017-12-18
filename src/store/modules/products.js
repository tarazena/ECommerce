import * as types from '../mutation-types'
import * as $ from 'jquery'

var url

if (process.env.NODE_ENV === 'development') {
  url = './static/product-items.json'
} else {
  url = 'http://api-ecommerce.azurewebsites.net/v1/getproductlist'
}

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all,
  getProduct: state => id => state.all.filter(item => item.id === id)
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    $.getJSON(url).done(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
