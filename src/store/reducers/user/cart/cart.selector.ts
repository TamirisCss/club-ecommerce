import { RootState } from '../../../store'

export const selectProductsTotalPrice = (state: RootState) => {
  return state.cartReducer.products.reduce((acc, currentProducts) => {
    return acc + currentProducts.price * currentProducts.quantity
  }, 0)
}
export const selectProductCount = (state: RootState) => {
  return state.cartReducer.products.reduce((acc, currentProducts) => {
    return acc + currentProducts.quantity
  }, 0)
}
