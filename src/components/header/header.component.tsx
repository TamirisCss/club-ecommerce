import { signOut } from 'firebase/auth'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase.config'

import {
  HeaderContainer,
  HeaderTitle,
  HeaderItems,
  HeaderItem
} from './header.style'

const Header = () => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('./')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('./sign-up')
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem>Explore</HeaderItem>
        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem onClick={handleSignUpClick}>Subscribe</HeaderItem>
        <HeaderItem onClick={() => signOut(auth)}>Logout</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />
          <p style={{}}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
