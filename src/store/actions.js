import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_PRODUCT_TO_CART, {
      product: product
    })
  }
}
