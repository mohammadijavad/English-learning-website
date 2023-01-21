import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import styled from 'styled-components'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
function Favorite() {
  return (
    <Container>
      <OverlayTrigger
        delay={{ hide: 200, show: 100 }}
        animation={true}
        overlay={(props) => (
          <Tooltip {...props}> افزودن به علاقه مندی ها</Tooltip>
        )}
        placement="top"
      >
        <Button variant="" className={`m-0 p-0 bg-none `}>
          <span>
            <BsFillHeartFill size={22} />
          </span>
        </Button>
      </OverlayTrigger>
    </Container>
  )
}
const Container = styled.div`
  position: absolute;
  left: 10%;
  top: 5%;
  & span {
    color: #aaa69d;
  }
  & button:active {
    border: none;
  }
`
export default Favorite
