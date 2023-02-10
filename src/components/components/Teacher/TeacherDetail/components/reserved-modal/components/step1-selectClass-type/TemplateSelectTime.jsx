import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { removeSelectTimeForClassesHandler } from '../../../../../../../../app/store/Teacher store/Teacher'
import { useDispatch } from 'react-redux'
function TemplateSelectTime({ time, changeTimeSelectHandler }) {
  const dispatch = useDispatch()
  const handler = () => {
    changeTimeSelectHandler(time, time.indexDate, false)
    dispatch(
      removeSelectTimeForClassesHandler({
        id: time.id,
        indexDate: time.indexDate,
      }),
    )
  }
  return (
    <Container>
      <AiOutlineClose size={17} className="curoser" onClick={() => handler()} />{' '}
      <span>{time.time}</span>
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
