import React from 'react'
import CardClass from '../utils/CardClass'
import { ComplatedClasses } from '../../../../constants/ProfilepageData'
function Userclassdone() {
  return (
    <div className={` mt-3`}>
      <CardClass
        titleClass="کلاس های به اتمام رسیده"
        listClass={ComplatedClasses}
        key={2}
      />
    </div>
  )
}

export default Userclassdone
