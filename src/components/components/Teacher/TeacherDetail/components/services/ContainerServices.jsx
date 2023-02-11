import React from 'react'
import ClassServices from './ClassServices'
import backmony from '../../../../../../assets/Teacher/services/service_back_mony.png'
import canceledClass from '../../../../../../assets/Teacher/services/service_canceled_class.png'
import changeTeacher from '../../../../../../assets/Teacher/services/service_change_teacher.png'
import changeTime from '../../../../../../assets/Teacher/services/service_change_time.png'
function ContainerServices() {
  return (
    <div className="mt-5 d-flex justify-content-between align-items-center">
      <ClassServices
        img={backmony}
        textHead="بازگشت هزینه"
        text="در صورت انصراف از برگزاری ادامه کلاس‌"
      />
      <ClassServices
        img={canceledClass}
        textHead="لغو کلاس"
        text="حتی چند ساعت مانده به شروع کلاس‌"
      />
      <ClassServices
        img={changeTeacher}
        textHead="تغییر استاد"
        text="در صورت نارضایتی"
      />
      <ClassServices
        img={changeTime}
        textHead="تغییر زمان برگزاری"
        text="به زمان مناسب دیگر"
      />
    </div>
  )
}

export default ContainerServices
