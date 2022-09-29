import { FunctionComponent } from 'react'

import Category from '../../types/category.types'

import './category-item.style.css'

interface CategoryItemProps {
  category: Category
}
const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className="category-item-container"
      style={{ backgroundImage: `url('${category.imgUrl}')` }}>
      <div className="category-name">
        <p>{category.displayName}</p>
        <p>Explore</p>
      </div>
    </div>
  )
}

export default CategoryItem
