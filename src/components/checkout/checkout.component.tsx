import { FunctionComponent, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsBagCheck } from 'react-icons/bs'

//Utilities
import { CartContext } from '../../contexts/cart.context'

//Components
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

//Styles
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkout.style'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  const navigate = useNavigate()

  const handleFinishPurchase = () => {
    navigate('/payment-confirmation')
  }

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

          <CustomButton
            startIcon={<BsBagCheck />}
            onClick={handleFinishPurchase}>
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
