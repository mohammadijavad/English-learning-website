import React from 'react'
import Countries from './HeaderProfileModals/Countries'
import Webapps from './HeaderProfileModals/Webapps'
import Cart from './HeaderProfileModals/Cart'
import Notifications from './HeaderProfileModals/Notifications'
import Darkmode from './HeaderProfileModals/Darkmode'
import Screen from './HeaderProfileModals/Screen'
import Profile from './HeaderProfileModals/Profile'
import Searchmobile from './HeaderProfileModals/Searchmobile'
const array = [
  {
    id: 1,
    com: <Countries index={0} />,
  },
  {
    id: 2,
    com: <Webapps index={1} />,
  },
  {
    id: 3,
    com: <Cart index={2} />,
  },
  {
    id: 4,
    com: <Darkmode index={3} />,
  },
  {
    id: 5,
    com: <Screen index={4} />,
  },
  {
    id: 6,
    com: <Notifications index={5} />,
  },
  {
    id: 7,
    com: <Profile index={6} />,
  },
]
function HeaderProfile() {
  return (
    <div className="containerHeaderProfile d-flex justify-content-end w-100 align-items-center">
      <Searchmobile />
      {array.map((arr, index) => (
        <React.Fragment key={index}>{arr.com}</React.Fragment>
      ))}
    </div>
  )
}

export default HeaderProfile
