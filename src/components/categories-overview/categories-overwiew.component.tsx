import { FunctionComponent, useContext, useEffect } from 'react'

//Styles
import { Container } from './categories-overview.style'

//Utilities
import { CategoryContext } from '../../contexts/category.context'

//Components
import CategoryOverview from '../category-overview/category-overview.component'
import Loading from '../loading/loading.componet'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories, isLoading } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  if (isLoading) return <Loading />

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default CategoriesOverview
