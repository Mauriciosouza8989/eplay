import { Tag } from '../Tag'
import { Card, Description, Infos, Title } from './style'
type Props = {
  image: string
  infos: string[]
  system: string
  category: string
  title: string
  description: string
  id: number
}

export function Product({
  image,
  infos,
  system,
  category,
  title,
  description,
  id
}: Props) {
  function formatDescription(description: string) {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }
  return (
    <Card to={`/produto/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{formatDescription(description)}</Description>
    </Card>
  )
}
