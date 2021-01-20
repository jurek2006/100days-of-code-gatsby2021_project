import React from 'react'
import PropTypes from "prop-types"
import Header from './header'
import styled from 'styled-components'

const Layout = ({children}) => {
    return (
        <StyledLayout>
            <Header />
            <main>{children}</main>
        </StyledLayout>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

const StyledLayout = styled.div`
    color: #232129;
    padding: 96px;
    font-family: -apple-system, Roboto, sans-serif, serif;
`
