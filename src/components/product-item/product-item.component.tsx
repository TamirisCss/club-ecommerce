import { FunctionComponent } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

//Utilities
import { addProductToCart } from '../../store/reducers/user/cart/cart.actions'
import Product from '../../types/product.types'

//Components
import CustomButton from '../custom-button/custom-button.component'

//Styles
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.style'
interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCartClick = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton onClick={handleAddToCartClick} startIcon={<BsCartPlus />}>
          Add to cart
        </CustomButton>
      </ProductImage>
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
