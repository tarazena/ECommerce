import * as types from './mutation-types'

export const addToCart = ({ commit }, {product, quantity}) => {
  commit(types.ADD_PRODUCT_TO_CART, {
    product: product,
    quantity: quantity
  })
}

export const updateQuantityInCart = ({ commit }, payload) => {
  commit(types.UPDATE_QUANTITY_IN_CART, payload)
}

export const getCart = ({ commit }) => {
  commit(types.GET_CART)
}

export const removeFromCart = ({ commit }, payload) => {
  commit(types.REMOVE_PRODUCT_FROM_CART, payload)
}
