import { FunctionComponent, useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CustomButton from '../custom-button/custom-button.component'

import { BsBagCheck } from 'react-icons/bs'

import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkout.style'
import CartItem from '../cart-item/cart-item.component'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)
  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>
          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

          <CustomButton startIcon={<BsBagCheck />}>
            Finish purchase
          </CustomButton>
        </>
      ) : (
        <p>Your Cart is Empty!!!</p>
      )}
    </CheckoutContainer>
  )
}

export default Checkout
