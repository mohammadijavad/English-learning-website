import React, { useState } from 'react'
import Select from './components/Select'
import { BsTextRight } from 'react-icons/bs'
function Filter() {
  const [activeSelectEl, setActiveSelectEl] = useState(-1)
  const handlerActive = (mode) => {
    setActiveSelectEl(mode)
  }
  return (
    <div className="d-flex flex-wrap  align-items-center justify-content-start">
      <div
        className="mt-1 curoser"
        style={{ color: '#5352ed', fontWeight: 600 }}
      >
        <BsTextRight size={21} />
      </div>
      <Select
        cls="mx-2"
        title="زبان ها"
        activeKey={0}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        title="جنسیت"
        cls="mx-2"
        activeKey={1}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        title="قیمت"
        cls="mx-2"
        activeKey={2}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        title="روزهفته"
        cls="mx-2"
        activeKey={3}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        title="ساعت"
        cls="mx-2"
        activeKey={4}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        title="مخاطب"
        cls="mx-2"
        activeKey={5}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        title="هدف"
        cls="mx-2"
        activeKey={6}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
    </div>
  )
}

export default Filter
