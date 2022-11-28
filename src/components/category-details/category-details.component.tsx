import { FunctionComponent, useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { BiChevronLeft } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

//Utilities
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'
import Category from '../../types/category.types'

//Components
import ProductItem from '../product-item/product-item.component'
import Loading from '../loading/loading.componet'

//Styles
import {
  Container,
  CategoryTitle,
  ProductsContainer,
  IconContainer
} from './category-details.style'

interface CategoryDetailsProps {
  categoryId: string
}

const CategoryDetails: FunctionComponent<CategoryDetailsProps> = ({
  categoryId
}) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
  }

  useEffect(() => {
    const fecthCategory = async () => {
      try {
        setIsLoading(true)
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId)
          )
        )
        const category = querySnapshot.docs[0]?.data()
        setCategory(category)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fecthCategory()
  }, [])

  if (isLoading) return <Loading />
  return (
    <Container>
      <CategoryTitle>
        <IconContainer onClick={handleBackClick}>
          <BiChevronLeft size={36} />
        </IconContainer>
        <p>Explore {category?.displayName}</p>
      </CategoryTitle>

      <ProductsContainer>
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  )
}

export default CategoryDetails
