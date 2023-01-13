import React, { useState } from 'react'
import TeacherCard from './components/TeacherCard'
import teacher1 from '../../../../assets/images/users/avatar-2.jpg'
import teacher2 from '../../../../assets/images/users/avatar-4.jpg'
import teacher1Vedio from '../../../../assets/images/just static data/teacher1.mp4'
import teacher2Vedio from '../../../../assets/images/just static data/teacher2.mp4'

import { Teachers } from '../../../../constants/ProfilepageData'
function ContainerCardTeacher() {
  const [keyVedioDefault, setKeyVedio] = useState(0)
  return (
    <div className="mt-3 ">
      {Teachers.map((teacher) => {
        return (
          <TeacherCard
            // vedioKey={1}
            keyVedioDefault={keyVedioDefault}
            setKeyVedio={setKeyVedio}
            // teacherPicture={teacher1}
            // teacherVedio={teacher1Vedio}
            {...teacher}
          />
        )
      })}
    </div>
  )
}

export default ContainerCardTeacher
