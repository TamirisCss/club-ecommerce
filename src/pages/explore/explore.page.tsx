import { FunctionComponent } from 'react'
import CategoriesOverview from '../../components/categories-overview/categories-overwiew.component'
import Header from '../../components/header/header.component'

const ExplorePage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <CategoriesOverview />
    </>
  )
}

export default ExplorePage
