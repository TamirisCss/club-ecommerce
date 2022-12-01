import Product from '../../../../types/product.types'
import CartActionTypes from './cart.action-types'

interface ToggleCartAction {
  type: typeof CartActionTypes.toggleCart
}

export const toggleCart = (): ToggleCartAction => ({
  type: CartActionTypes.toggleCart
})

interface AddProductToCartActio {
  type: typeof CartActionTypes.addProductToCart
  payload: Product
}

export const addProductToCart = (payload: Product): AddProductToCartActio => ({
  type: CartActionTypes.addProductToCart,
  payload
})

interface RemoveProductFromCartAction {
  type: typeof CartActionTypes.removeProductFromCart
  payload: string
}

export const removeProductFromCart = (
  payload: string
): RemoveProductFromCartAction => ({
  type: CartActionTypes.removeProductFromCart,
  payload
})

interface IncreaseCartProductQuantityAction {
  type: typeof CartActionTypes.increaseCartProductQuantity
  payload: string
}

export const increaseCartProductQuantity = (
  payload: string
): IncreaseCartProductQuantityAction => ({
  type: CartActionTypes.increaseCartProductQuantity,
  payload
})

interface DecreaseCartProductQuantityAction {
  type: typeof CartActionTypes.decreaseCartProductQuantity
  payload: string
}

export const decreaseCartProductQuantity = (
  payload: string
): DecreaseCartProductQuantityAction => ({
  type: CartActionTypes.decreaseCartProductQuantity,
  payload
})

interface ClearCartProductsAction {
  type: typeof CartActionTypes.clearCartProducts
}

export const clearCartProducts = (): ClearCartProductsAction => ({
  type: CartActionTypes.clearCartProducts
})

export type CartActions =
  | ToggleCartAction
  | AddProductToCartActio
  | RemoveProductFromCartAction
  | IncreaseCartProductQuantityAction
  | DecreaseCartProductQuantityAction
  | ClearCartProductsAction
