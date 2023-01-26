import React, { useState } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import styled from 'styled-components'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import {
  favoriteTeacher,
  fetchUserById,
} from '../app/store/Teacher store/Teacher'
import { useDispatch } from 'react-redux'
function Favorite({ isFavorite, id }) {
  const dispatch = useDispatch()
  const [isfavoriteState, setIsfavorite] = useState(isFavorite)
  const favoriteHandler = () => {
    setIsfavorite(!isfavoriteState)
    dispatch(fetchUserById({ id: id }))
    // dispatch(favoriteTeacher(id))
  }

  return (
    <Container>
      <OverlayTrigger
        delay={{ hide: 200, show: 100 }}
        animation={true}
        overlay={(props) => (
          <Tooltip {...props}>
            {isfavoriteState ? ' حذف از ' : ' افزودن به  '} علاقمندی ها
          </Tooltip>
        )}
        placement="top"
      >
        <Button variant="" className={`m-0 p-0 bg-none `}>
          <span>
            <BsFillHeartFill
              onClick={() => favoriteHandler()}
              color={isfavoriteState ? '#ff4757' : 'inherit'}
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
