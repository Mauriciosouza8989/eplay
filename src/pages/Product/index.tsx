import { Hero } from '../../Components/Hero'
import { Section } from '../../Components/Section'
import { Gallery } from '../../Components/Gallery'
import { useParams } from 'react-router-dom'
import { useGetGameQuery } from '../../services/api'

export function Product() {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) return <h3>Carregando...</h3>
  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Sobre o jogo">
        <p>{game?.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma</b>:{' ' + game.details.system} <br />
          <b>Desenvolvedor</b>:{' ' + game.details.developer} <br />
          <b>Editora</b>:{' ' + game.details.publisher}
          <br />
          <b>Idiomas</b>: O jogo oferece suporte a diversos idiomas, incluindo:
          {game.details.languages.join(',')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}
