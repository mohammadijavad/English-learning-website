import React, { useState } from 'react'
import Select from './components/Select'
import { BsTextRight } from 'react-icons/bs'
import { filters } from '../../../constants/Data'
function Filter() {
  const [closed, setClosed] = useState(0)
  const { language, times, weekDays, gender } = filters
  return (
    <div className="d-flex flex-wrap  align-items-center justify-content-start">
      <div
        className="mt-1 curoser"
        style={{ color: '#5352ed', fontWeight: 600 }}
      >
        <BsTextRight size={21} />
      </div>
      <Select
        title="زبان ها"
        activeKey={1}
        close={closed}
        setClosed={setClosed}
        data={language}
      />
      <Select
        title="جنسیت"
        activeKey={2}
        close={closed}
        setClosed={setClosed}
        data={gender}
      />

      <Select
        title="روز هفته"
        activeKey={4}
        close={closed}
        setClosed={setClosed}
        data={weekDays}
      />
      <Select
        title="ساعت"
        activeKey={5}
        close={closed}
        setClosed={setClosed}
        data={times}
      />
      {/* price */}
    </div>
  )
}

export default Filter
