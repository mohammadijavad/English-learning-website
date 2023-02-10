import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
function TemplateSelectTime({ time }) {
  return (
    <Container>
      <AiOutlineClose size={17} className="curoser" /> <span>{time.time}</span>
    </Container>
  )
}
const Container = styled.div`
  border-radius: 10px;
  background: #e2e8f0;
  padding: 4px;
  font-size: 14px;
  display: block;
`
export default TemplateSelectTime
