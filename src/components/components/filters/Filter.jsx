import React, { useState } from 'react'
import Select from './components/Select'
import { BsTextRight } from 'react-icons/bs'
function Filter() {
  const [closed, setClosed] = useState(0)
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
      />
      <Select
        title="جنسیت"
        activeKey={2}
        close={closed}
        setClosed={setClosed}
      />
      <Select
        title="قیمت "
        activeKey={3}
        close={closed}
        setClosed={setClosed}
      />
      <Select
        title="روز هفته"
        activeKey={4}
        close={closed}
        setClosed={setClosed}
      />
      <Select title="ساعت" activeKey={5} close={closed} setClosed={setClosed} />
    </div>
  )
}

export default Filter
