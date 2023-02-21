import React from 'react'
import style from '../../style/payment.module.css'
import Form from 'react-bootstrap/Form'
import wallet from '../../../../../assets/Teacher/payment/wallet.svg'
import cart from '../../../../../assets/Teacher/payment/payment-carts.svg'
function TypePayment() {
  return (
    <div className={`${style.teacherInfo}  p-2 text-dark`}>
      <p>لطفعا نحوه پرداخت را انتخاب کنید</p>
      <div>
        <Form>
          <div className="d-flex align-items-center curoser mt-2">
            <div className="mx-2">
              <img src={wallet} alt="" width={40} />
            </div>
            <Form.Check inline name="group1" type={'radio'} id={`car-radio`} />
            <div className="mx-3">
              <h5 className="m-0 mt-2 ">پرداخت ازطریق درگاه پرداخت</h5>
              <p className="m-0 mt-2 fontsize14">تمامی کارت ها بانکی</p>
            </div>
          </div>
          <div className="d-flex align-items-center curoser mt-2">
            <div className="mx-2">
              <img src={cart} alt="" width={40} />
            </div>
            <Form.Check
              className={style.radio}
              inline
              name="group1"
              type={'radio'}
              id={`wallet-radio`}
              checked
            />
            <div className="mx-3">
              <h5 className="m-0 mt-2 "> کیف پول</h5>
              <p className="m-0 mt-2 fontsize14"> </p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default TypePayment
