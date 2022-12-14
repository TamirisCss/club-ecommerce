import { FunctionComponent, useContext } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { BsCartCheck } from 'react-icons/bs'

import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart.style'

import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'

const Cart: FunctionComponent = () => {
  const { isVisible, products, productsTotalPrice, productsCount, toggleCart } =
    useContext(CartContext)

  const navigate = useNavigate()

  const handleGoToCheckout = () => {
    navigate('/checkout')
    toggleCart()
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Your Cart</CartTitle>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <CartTotal>Total: R${productsTotalPrice}</CartTotal>
        )}

        {productsCount > 0 && (
          <CustomButton
            startIcon={<BsCartCheck />}
            onClick={handleGoToCheckout}>
            Go to Checkout
          </CustomButton>
        )}

        {productsCount === 0 && <p>Your Cart is empty!</p>}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
