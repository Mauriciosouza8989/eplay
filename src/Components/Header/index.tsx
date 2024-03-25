import { Link } from 'react-router-dom'
import {
  HeaderBar,
  ButtonCart,
  Links,
  Hamburguer,
  HeaderRow,
  LinkItem,
  NavMobile
} from './style'
import logo from '../../images/logo.svg'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useState } from 'react'

export function Header() {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  function openCart() {
    dispatch(open())
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="container">
      <HeaderBar>
        <HeaderRow>
          <div>
            <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </Hamburguer>
            <Link to="/">
              <img src={logo} alt="EPLAY" />
            </Link>
            <nav>
              <Links>
                <LinkItem>
                  <Link to="/categories">Categorias</Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/news">Novidades</Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/sales">Promoções</Link>
                </LinkItem>
              </Links>
            </nav>
          </div>
          <ButtonCart onClick={openCart}>
            <div>
              {items.length}
              <span> - Produto(s)</span>
            </div>
            <FaShoppingCart />
          </ButtonCart>
        </HeaderRow>
        <NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/news">Novidades</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/sales">Promoções</Link>
            </LinkItem>
          </Links>
        </NavMobile>
      </HeaderBar>
    </div>
  )
}
