import React from 'react'
import { reservedClasses } from '../../../../constants/ProfilepageData'
import CardClass from '../utils/CardClass'
function UserClassList() {
  return (
    <CardClass
      titleClass="کلاس های پیش رو"
      listClass={reservedClasses}
      key={1}
    />
  )
}

export default UserClassList
