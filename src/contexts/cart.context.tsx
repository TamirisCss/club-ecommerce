import { createContext, FunctionComponent, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
  addProductsToCart: (product: Product) => void
  removeProductFromCart: (productId: string) => void
  increseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (productId: string) => void
}

interface children {
  children: React.ReactNode
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductsToCart: () => {},
  removeProductFromCart: () => {},
  increseProductQuantity: () => {},
  decreaseProductQuantity: () => {}
})

const CartContextProvider: FunctionComponent<children> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductsToCart = (product: Product) => {
    // verificar se o produto ja esta no carrinho
    const productIsAlredyInCart = products.some(
      (item) => item.id === product.id
    )
    //se sim => aumentar a quantidade
    if (productIsAlredyInCart) {
      return setProducts((prevState) =>
        prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }
    //se nao, so adiciona-lo
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const removeProductFromCart = (productId: string) => {
    setProducts((products) =>
      products.filter((product) => product.id !== productId)
    )
  }

  const increseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    )
  }

  const decreaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    )
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toggleCart,
        addProductsToCart,
        removeProductFromCart,
        increseProductQuantity,
        decreaseProductQuantity
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
