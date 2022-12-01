import { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'

//Utilities
import { CartContext } from '../../contexts/cart.context'
import { auth } from '../../config/firebase.config'
import { logoutUser } from '../../store/reducers/user/user.actions'
import { toggleCart } from '../../store/reducers/user/cart/cart.actions'

//Styles
import {
  HeaderContainer,
  HeaderTitle,
  HeaderItems,
  HeaderItem
} from './header.style'

const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  const { productsCount } = useContext(CartContext)

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  const handleSignOutClick = () => {
    dispatch(logoutUser())
    signOut(auth)
  }

  const handleCartClick = () => {
    dispatch(toggleCart())
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explore</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Subscribe</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <>
            <HeaderItem onClick={handleSignOutClick}>Logout</HeaderItem>
          </>
        )}

        <HeaderItem onClick={handleCartClick}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
