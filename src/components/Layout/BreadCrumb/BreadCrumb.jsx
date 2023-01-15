import React from 'react'
import { NavLink } from 'react-router-dom'
import { Routers } from '../../../constants/Routes'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import styled from 'styled-components'
import { useContext } from 'react'
import { contextapp } from '../../../contexts/ContextProv'
const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(Routers, { disableDefaults: true })
  const { isHorizontal } = useContext(contextapp)
  return (
    <>
      <Content
        className={`mx-2 containerContentMain ${
          isHorizontal ? 'horizantalMode' : ''
        }`}
      >
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <NavLink key={match.pathname} to={match.pathname}>
            {breadcrumb}
          </NavLink>
        ))}
      </Content>
    </>
  )
}

const Content = styled.div`
  padding-top: 10px;
  & a:nth-child(1) {
    text-decoration: none;
    color: var(-color-showRoute);
    margin: 0;
  }
  & a {
    text-decoration: none;
    color: var(-color-showRoute);
    margin-right: 0;
  }
`
export default Breadcrumbs
