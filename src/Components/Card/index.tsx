import { Container } from './style'

type Props = {
  children: JSX.Element
  title: string
}

export function Card({ title, children }: Props) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}
