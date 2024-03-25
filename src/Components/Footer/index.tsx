import { Container, FootSection, Links, Link, SectionTitle } from './style'
const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <Container>
      <div className="container">
        <FootSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link to="/categories#rpg">RPG</Link>
            </li>
            <li>
              <Link to="/categories#action">Ação</Link>
            </li>
            <li>
              <Link to="/categories#sports">Esportes</Link>
            </li>
            <li>
              <Link to="/categories#simulation">Sinulação</Link>
            </li>
            <li>
              <Link to="/categories#">FPS</Link>
            </li>
            <li>
              <Link to="/categories#fight">Luta</Link>
            </li>
          </Links>
        </FootSection>
        <FootSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link to="/#on-sale">Promoções</Link>
            </li>
            <li>
              <Link to="/#coming-soon">Em breve</Link>
            </li>
          </Links>
        </FootSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}
