import React, { useState } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import styled from 'styled-components'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import { addTofavoriteTeacher } from '../app/store/Teacher store/Teacher'
import { useDispatch } from 'react-redux'
function Favorite({ isFavorite, id }) {
  const dispatch = useDispatch()
  const [isfavorite, setIsfavorite] = useState(isFavorite)
  const favoriteHandler = () => {
    setIsfavorite(!isfavorite)
    dispatch(addTofavoriteTeacher({ id, isFavorite })).unwrap()
  }
  return (
    <Container>
      <OverlayTrigger
        delay={{ hide: 200, show: 100 }}
        animation={true}
        overlay={(props) => (
          <Tooltip {...props}>
            {isfavorite ? ' حذف از ' : ' افزودن به  '} علاقمندی ها
          </Tooltip>
        )}
        placement="top"
      >
        <Button variant="" className={`m-0 p-0 bg-none `}>
          <span>
            <BsFillHeartFill
              onClick={() => favoriteHandler()}
              color={isfavorite ? '#ff4757' : 'inherit'}
              size={22}
            />
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
    color: #d1ccc0;
  }
  & button:active {
    border: none;
  }
`
export default Favorite
