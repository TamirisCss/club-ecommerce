import { FunctionComponent, useContext } from 'react'
import CartProduct from '../../types/cart.types'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item.style'
import { CartContext } from '../../contexts/cart.context'

interface CartItemProps {
  product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const { removeProductFromCart, increseProductQuantity } =
    useContext(CartContext)

  const handleRemoveClick = () => {
    removeProductFromCart(product.id)
  }

  const handleIncreseClick = () => {
    increseProductQuantity(product.id)
  }

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />
      <CartItemInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <CartItemQuantity>
          <AiOutlineMinus size={20} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} onClick={handleIncreseClick} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem