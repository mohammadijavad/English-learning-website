import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import TitleClass from '../../../Userprofile/utils/TitleClass'

function DiscountCode() {
  return (
    <Accordion className="py-2 p-2">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="text-dark p-2">
          <TitleClass title={' کد تخفیف دارید؟ '} mode={true} />
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <input
              type="text"
              className="p-2 mx-2 rounded border border-gray px-4"
              placeholder="کد تخفیف"
            />
            <button className="btn border border-gray">ثبت کد</button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default DiscountCode
