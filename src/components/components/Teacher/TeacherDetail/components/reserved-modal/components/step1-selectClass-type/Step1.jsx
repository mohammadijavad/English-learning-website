import React from 'react'
import ClassType from './ClassType'

function Step1({
  classType,
  setClassType,
  findteacher,
  setCountClass,
  setMode,
}) {
  const { priceClasses } = findteacher
  return (
    <div className="mt-4">
      <div className="text-center">
        <p>لطفا نوع پکیج مورد نظر را انتخاب کنید</p>
      </div>
      <div>
        {priceClasses?.map((teacher) => (
          <ClassType
            setMode={setMode}
            key={teacher.id}
            classType={classType}
            setClassType={setClassType}
            setCountClass={setCountClass}
            {...teacher}
          />
        ))}
      </div>
    </div>
  )
}

export default Step1
