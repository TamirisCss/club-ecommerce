import { BsCart3 } from 'react-icons/bs'

import {
  HeaderContainer,
  HeaderTitle,
  HeaderItems,
  HeaderItem
} from './header.style'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem>Explore</HeaderItem>
        <HeaderItem>Login</HeaderItem>
        <HeaderItem>Subscribe</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />
          <p style={{}}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
