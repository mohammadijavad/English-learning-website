import React from 'react'
import CardClass from '../utils/CardClass'
import { canceledClasses } from '../../../../constants/ProfilepageData'
function Userclasscanceled() {
  return (
    <div className={`mt-3  p-1`}>
      <CardClass titleClass="کلاس های لغو شده" listClass={canceledClasses} />
    </div>
  )
}

export default Userclasscanceled
