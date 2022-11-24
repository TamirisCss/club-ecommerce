import { collection, getDocs } from 'firebase/firestore'
import { createContext, FunctionComponent, useState } from 'react'
import { db } from '../config/firebase.config'
import { categoryConverter } from '../converters/firestore.converters'
import Category from '../types/category.types'

interface ICategoryContext {
  categories: Category[]
  fetchCategories: () => Promise<void>
  isLoading: boolean
}

interface children {
  children: React.ReactNode
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve(),
  isLoading: false
})

const CategoryContextProvider: FunctionComponent<children> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)
      const categoriesFromFirestore: Category[] = []

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
      // console.log({ categoriesFromFirestore })
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ categories, fetchCategories, isLoading }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
