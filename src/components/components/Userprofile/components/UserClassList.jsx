import React from 'react'
import { reservedClasses } from '../../../../constants/ProfilepageData'
import CardClass from '../utils/CardClass'
function UserClassList({ classList }) {
  return (
    <CardClass
      classList={classList}
      titleClass="کلاس های پیش رو"
      listClass={reservedClasses}
      keyAccordion={1}
    />
  )
}

export default UserClassList
