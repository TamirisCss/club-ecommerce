import { stat } from 'fs'
import CartProduct from '../../../../types/cart.types'
import CartActionTypes from './cart.action-types'

interface InitialState {
  isVisible: boolean
  products: CartProduct[]
}

const initialState: InitialState = {
  isVisible: false,
  products: []
}

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActionTypes.toggleCart:
      return { ...state, isVisible: !state.isVisible }
    case CartActionTypes.addProductToCart: {
      // verificar se o produto ja esta no carrinho
      const product = action.payload
      const productIsAlredyInCart = state.products.some(
        (item) => item.id === product.id
      )
      //se sim => aumentar a quantidade
      if (productIsAlredyInCart) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      //se nao, so adiciona-lo
      return {
        ...state,
        products: [...state.products, { ...product, quantity: 1 }]
      }
    }

    case CartActionTypes.removeProductFromCart:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload //productId
        )
      }

    case CartActionTypes.increaseCartProductQuantity:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      }

    case CartActionTypes.decreaseCartProductQuantity:
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0) //quantidade 0 remove do cart
      }
    case CartActionTypes.clearCartProducts:
      return {
        ...state,
        products: []
      }

    default:
      return {
        ...state
      }
  }
}

export default cartReducer
