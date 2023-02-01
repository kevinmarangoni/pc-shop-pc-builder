import React from 'react'
import styled from 'styled-components'
import Header from '../../header/Header'

const Layout = ({children}) => {
  return (
    <Container>
      <Header />
        <Content>
            {children}
        </Content>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: 100vh;
`

const Content = styled.div`


`

export default Layout