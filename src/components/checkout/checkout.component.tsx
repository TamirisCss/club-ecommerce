import { FunctionComponent, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsBagCheck } from 'react-icons/bs'
import { userAppSelector } from '../../hooks/redux.hooks'

//Utilities
import { selectProductsTotalPrice } from '../../store/reducers/user/cart/cart.selector'

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
  const { products } = userAppSelector((state) => state.cartReducer)
  const productsTotalPrice = userAppSelector(selectProductsTotalPrice)

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
