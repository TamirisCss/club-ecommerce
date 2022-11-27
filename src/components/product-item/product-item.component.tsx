import { FunctionComponent, useContext } from 'react'
import Product from '../../types/product.types'
import CustomButton from '../custom-button/custom-button.component'
import { BsCartPlus } from 'react-icons/bs'

import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.style'
import { CartContext } from '../../contexts/cart.context'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductsToCart } = useContext(CartContext)

  const handleAddToCartClick = () => {
    addProductsToCart(product)
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
