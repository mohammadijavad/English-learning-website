import React from 'react'
import { weekDays } from '../../../../../../../constants/Data'
import Day from './weekDay/Day'
import styled from 'styled-components'
function WeekDays({ findteacher, nextWekkCount, currentWeekDay, mode, step }) {
  return (
    <Container className="mt-4 d-flex justify-content-between align-items-start h-100  scrollMode">
      {weekDays.map((day, index) => (
        <Day
          step={step}
          mode={mode}
          key={index}
          index={index}
          findteacher={findteacher}
          {...day}
          currentWeekDay={currentWeekDay}
          nextWekkCount={nextWekkCount}
        />
      ))}
    </Container>
  )
}
const Container = styled.div`
  @media screen and (max-width: 900px) {
    overflow-x: auto;
  }
  ::-webkit-scrollbar {
    cursor: move !important;
    width: 5px;
    height: 5px;
    /* height: 10px !important; */
  }
  ::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important; */
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--bg-btnActive) !important;
    outline: 1px solid slategrey !important;
  }
`
export default WeekDays
