import { FunctionComponent, useContext } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { BsCartCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

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
import { userAppSelector } from '../../hooks/redux.hooks'
import { toggleCart } from '../../store/reducers/user/cart/cart.actions'

const Cart: FunctionComponent = () => {
  const { isVisible, products } = userAppSelector((state) => state.cartReducer)

  const { productsTotalPrice, productsCount } = useContext(CartContext)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleGoToCheckout = () => {
    navigate('/checkout')
    dispatch(toggleCart())
  }

  const handleEscapeAreaClick = () => {
    dispatch(toggleCart())
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
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
