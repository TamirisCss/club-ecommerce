import { useContext, useEffect } from 'react'

//Components
import CategoryItem from '../category-item/category-item.component'
import Loading from '../loading/loading.componet'

//Styles
import { CategoriesContainer, CategoriesContent } from './categories.style'

//Utilities
import { CategoryContext } from '../../contexts/category.context'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../store/reducers/category/category.actions'

const Categories = () => {
  const { categories, isLoading } = useContext(CategoryContext)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories() as any)
  }, [])

  return (
    <CategoriesContainer>
      {isLoading && <Loading />}
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
