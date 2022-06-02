import { HeaderContainer, Imagem, Span, LinksContainer, LogoContainer } from './styles'
import Logo from '../../assets/logo.jpg'
import Menu from '../Menu/menu'
function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Imagem src={Logo} alt="logo" />
      </LogoContainer>
      <LinksContainer>
        <Menu />
        <Span>HOME</Span>
        <Span>AULAS</Span>
        <Span>TRADUÇÃO</Span>
        <Span>CONTATO</Span>
        <Span>FORMAÇÃO</Span>
        <Span>ALEMÃO</Span>
        <Span>SERVIÇOS</Span>
      </LinksContainer>
    </HeaderContainer>
  )
}

export default Header
