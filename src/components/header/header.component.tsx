import { BsCart3 } from 'react-icons/bs'

import './header.style.css'

const Header = () => {
  return (
    <header className="header-container">
      <h2 className="header-title">CLUB CLOTHING</h2>

      <nav className="header-items">
        <div className="header-item">Explore</div>
        <div className="header-item">Login</div>
        <div className="header-item">Subscribe</div>
        <div className="header-item">
          <BsCart3 size={25} />
          <p style={{}}>5</p>
        </div>
      </nav>
    </header>
  )
}

export default Header
