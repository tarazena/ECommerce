import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  commit(types.ADD_PRODUCT_TO_CART, {
    product: product
  })
}

export const getCart = ({ commit }) => {
  commit(types.GET_CART)
}
