import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  commit(types.ADD_PRODUCT_TO_CART, {
    product: product,
    quantity: 1
  })
}

export const updateQuantityInCart = ({ commit }, payload) => {
  commit(types.UPDATE_QUANTITY_IN_CART, payload)
}

export const getCart = ({ commit }) => {
  commit(types.GET_CART)
}
