import { Image, Prices, Title } from './style'
import { Tag } from '../Tag'
import { Button } from '../Button'
import { formatPrice } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'

export function Banner() {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) return <h3>Carrehando...</h3>
  const route = `/produto/${game.id}`
  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="large">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{formatPrice(game.prices.old)}</span>
            <br />
            por apenas {formatPrice(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          title="Clique aqui para aproveitar esta oferta"
          to={route}
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}
