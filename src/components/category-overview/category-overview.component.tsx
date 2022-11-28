import { FunctionComponent } from 'react'

//Utilities
import Category from '../../types/category.types'

//Components
import ProductItem from '../product-item/product-item.component'

//Tyles
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-overview.style'

interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>
      <ProductsContainer>
        {category.products.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryOverview
