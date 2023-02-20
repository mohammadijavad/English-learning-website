import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectUser,
  fetchUser,
  getUserStatus,
} from '../../../app/store/User store/user'

import LoadingCom from '../../../utils/Loading'
function ProfileSetting() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  const getUser = useSelector(selectUser)
  const status = useSelector(getUserStatus)
  if (status === 'loading') {
    return <LoadingCom />
  }
  const {
    name,
    about,
    email,
    level,
    languages,
    phoneNumber,
    siningTime,
    userGol,
    userPhoto,
  } = getUser[0]
  return (
    <Container className="container mt-4">
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
          <div className="card h-100 border border-gray">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img src={userPhoto} alt={name} />
                  </div>
                  <h5 className="user-name">{name}</h5>
                  <h6 className="user-email mt-3">{email}</h6>
                </div>
                <div className="about">
                  <h5>پروفایل</h5>
                  <p>{about}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          action=""
          className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 border border-gray rounded"
        >
          <div>
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">اطلاعات پروفایل </h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="fullName">نام و نام خانوادگی </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        defaultValue={name}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">ایمیل</label>
                      <input
                        type="email"
                        className="form-control"
                        id="ایمیل خود را وارد کنید"
                        defaultValue={email}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                    <div className="form-group">
                      <label for="phone">شماره تماس</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        defaultValue={phoneNumber}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                    <div className="form-group">
                      <label for="website">هدف از یادگیری زبان </label>
                      <input
                        type="url"
                        className="form-control"
                        id="website"
                        defaultValue={userGol}
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mt-3 mb-2 text-primary">اطلاعات ثبت نام</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                    <div className="form-group">
                      <label for="Street">زمان ثبت نام در سایت</label>
                      <input
                        type="name"
                        className="form-control"
                        id="Street"
                        defaultValue={siningTime}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                    <div className="form-group">
                      <label for="ciTy">سطح زبان </label>
                      <input
                        type="name"
                        className="form-control"
                        id="ciTy"
                        defaultValue={level}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2">
                    <div className="form-group">
                      <label for="sTate">زبان</label>
                      <input
                        type="text"
                        className="form-control"
                        id="sTate"
                        defaultValue={languages}
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters mt-3">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-secondary "
                      >
                        انصراف
                      </button>
                      <button
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mx-3"
                      >
                        تایید
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
  )
}
const Container = styled.div`
  .account-settings .user-profile {
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    text-align: center;
  }
  .account-settings .user-profile .user-avatar {
    margin: 0 0 1rem 0;
  }
  .account-settings .user-profile .user-avatar img {
    width: 90px;
    height: 90px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
  }
  .account-settings .user-profile h5.user-name {
    margin: 0 0 0.5rem 0;
  }
  .account-settings .user-profile h6.user-email {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: #9fa8b9;
  }
  .account-settings .about {
    margin: 2rem 0 0 0;
    text-align: center;
  }
  .account-settings .about h5 {
    margin: 0 0 15px 0;
    color: #007ae1;
  }
  .account-settings .about p {
    font-size: 0.825rem;
  }
  .form-control {
    border: 1px solid #cfd1d8;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    font-size: 0.825rem;
    color: #2e323c;
  }

  .card {
    background: var(--bg-profileSettings);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    margin-bottom: 1rem;
  }
`
export default ProfileSetting
