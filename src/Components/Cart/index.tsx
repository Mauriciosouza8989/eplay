import { Button } from '../Button'
import { Tag } from '../Tag'
import {
  Sidebar,
  Container,
  OverLay,
  Prices,
  Quantity,
  CartItem
} from './style'

import { close } from '../../store/reducers/cart'
import { remove } from '../../store/reducers/cart'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formatPrice } from '../ProductsList'
import { Game } from '../../pages/Home'

export function Cart() {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  function closeCart() {
    dispatch(close())
  }

  function getTotalPrice() {
    return items.reduce((acumulator, currentValue) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulator += currentValue.prices.current!)
    }, 0)
  }

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <OverLay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items &&
            items.map((item: Game) => (
              <CartItem key={item.id}>
                <img src={item.media.thumbnail} />
                <div>
                  <h3>{item.name}</h3>
                  <div>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                  </div>
                  <span>{formatPrice(item.prices.current)}</span>
                </div>
                <button
                  onClick={() => dispatch(remove(item.id))}
                  type="button"
                />
              </CartItem>
            ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formatPrice(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </Container>
  )
}
