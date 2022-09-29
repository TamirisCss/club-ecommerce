import { FunctionComponent } from 'react'

import Category from '../../types/category.types'

import { CategoryItemContainer, CategoryName } from './category-item.style'
interface CategoryItemProps {
  category: Category
}
const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer backgroundImage={category.imgUrl}>
      <CategoryName className="category-name">
        <p>{category.displayName}</p>
        <p>Explore</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
