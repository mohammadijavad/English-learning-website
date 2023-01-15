import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './login.css'
function Login() {
  const value = useAuth()
  const authUser = () => {
    value.login('user1')
  }
  return (
    <div className="login-Container">
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked
          />
          <label for="tab-1" className="tab curoser">
            ورود
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label for="tab-2" className="tab curoser">
            ثبت نام
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label for="pass" className="label">
                  کدملی
                </label>
                <input
                  id="pass"
                  type="number"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" checked />
                <label for="check">
                  <span className="icon"></span> ذخیره
                </label>
              </div>
              <div className="group">
                <input
                  type="submit"
                  onClick={authUser}
                  className="button"
                  value="ورود"
                />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">فراموشی رمز عبور</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label for="user" className="label">
                  نام و نام خانوادگی
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  کدملی
                </label>
                <input type="number" className="input" />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  شماره تماس
                </label>
                <input type="number" className="input" />
              </div>

              <div className="group">
                <input type="submit" className="button" value="ثبت نام" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
