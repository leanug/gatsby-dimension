import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <main>
        { children }
      </main>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 0;

  main {
    margin: 1rem;
    z-index: 10;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout