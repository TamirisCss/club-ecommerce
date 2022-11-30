import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'

//Pages
import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'
import ExplorePage from './pages/explore/explore.page'
import CheckoutPage from './pages/checkout/checkout.page'
import PaymentConfirmationPage from './pages/payment-confirmation/payment-confirmation.page'

//Utilities
import { auth, db } from './config/firebase.config'
import { userConverter } from './converters/firestore.converters'

//Components
import Loading from './components/loading/loading.componet'
import CategoryDetailsPage from './pages/category-details/category-details.page'
import Cart from './components/cart/cart.component'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)

  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user
      if (isSigningOut) {
        dispatch({ type: 'LOGOUT_USER' })

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

        dispatch({ type: 'LOGIN_USER', payload: userFromFirestore })

        return setIsInitializing(false)
      }
      return setIsInitializing(false)
    })
  }, [dispatch])

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/category/:id" element={<CategoryDetailsPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route
          path="/payment-confirmation"
          element={<PaymentConfirmationPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}

export default App
