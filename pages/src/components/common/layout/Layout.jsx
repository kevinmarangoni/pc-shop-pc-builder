import styled from 'styled-components'
import CartShopping from '../../Cart/Cart'


const Layout = ({children}) => {
  return (
    <Container>
      <CartShopping/>
        <Content>
            {children}
        </Content>
    </Container>
  )
}
export default Layout

const Container = styled.div`
width: min(100% - 30px, 1500px);
margin-inline: auto;
`

const Content = styled.div`

`

