import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth, db } from './config/firebase.config'

import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'
import { UserContext } from './contexts/user.context'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { userConverter } from './converters/firestore.converters'
import Loading from './components/loading/loading.componet'
import ExplorePage from './pages/explore/explore.page'
import CategoryDetailsPage from './pages/category-details/category-details.page'
import Cart from './components/cart/cart.component'
import CheckoutPage from './pages/checkout/checkout.page'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user
    if (isSigningOut) {
      logoutUser()
      return setIsInitializing(false)
    }

    const isSigninIn = !isAuthenticated && user
    if (isSigninIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users').withConverter(userConverter),
          where('id', '==', user.uid)
        )
      )

      const userFromFirestore = querySnapshot.docs[0]?.data()
      loginUser(userFromFirestore)
      return setIsInitializing(false)
    }
    return setIsInitializing(false)
  })

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/category/:id" element={<CategoryDetailsPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}

export default App
