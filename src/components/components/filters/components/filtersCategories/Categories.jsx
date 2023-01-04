import React from 'react'
import styled from 'styled-components'
import Filter from '../../Filter'
function Categories() {
  return (
    <Container className="scrollFlow">
      <Filter />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`
export default Categories
