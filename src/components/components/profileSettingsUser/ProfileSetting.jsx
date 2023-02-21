import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
  selectUser,
  fetchUser,
  getUserStatus,
  updateProfile,
} from '../../../app/store/User store/user'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import LoadingCom from '../../../utils/Loading'
import { showAlertHandlerSuccess } from '../../../utils/alerts'
function ProfileSetting() {
  const getUser = useSelector(selectUser)
  const status = useSelector(getUserStatus)
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
  } = getUser
  const [profileavatar, setProfileAvatr] = useState({
    file: '',
    imagePreviewUrl: userPhoto,
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  const navigate = useNavigate()
  if (status === 'loading') {
    return <LoadingCom />
  }

  const onSubmit = (data) => {
    let userPhoto = profileavatar.imagePreviewUrl
    let allData = { ...data, userPhoto }
    console.log(allData)
    dispatch(updateProfile(allData))
    setTimeout(() => {
      navigate('/profile')
    }, 1000)
    showAlertHandlerSuccess('پروفایل شما آپدیت شد 😊')
  }

  const changeProfileAvatarHandler = (e) => {
    e.preventDefault()
    const reader = new FileReader()
    const file = e.target.files[0]
    reader.onloadend = () => {
      setProfileAvatr({
        file: file,
        imagePreviewUrl: reader.result,
      })
    }
    reader.readAsDataURL(file)
  }
  return (
    <Container className="container mt-4">
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
          <div className="card h-100 border border-gray">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <label htmlFor="uploadPhoto">
                    <div className="user-avatar curoser position-relative">
                      <img src={profileavatar.imagePreviewUrl} alt={name} />
                      <span className="editePen">
                        <MdOutlineModeEditOutline size={20} />
                      </span>
                    </div>
                    <input
                      type="file"
                      id="uploadPhoto"
                      className="imageUploadInp"
                      onChange={changeProfileAvatarHandler}
                    />
                  </label>
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
          onSubmit={handleSubmit(onSubmit)}
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
                        {...register('name', {
                          required: true,
                          pattern: /[^-\s]/i,
                        })}
                      />
                      {errors?.name?.type === 'required' && (
                        <p className="errorValidtion mt-1">
                          {' '}
                          نام و نام خانوادگی الزامی است
                        </p>
                      )}
                      {errors?.name?.type === 'pattern' && (
                        <p className="errorValidtion mt-1">
                          {' '}
                          نام و نام خانوادگی الزامی است{' '}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">ایمیل</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        defaultValue={email}
                        {...register('email', {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                      />
                      {errors?.email?.type === 'required' && (
                        <p className="errorValidtion mt-1"> ایمیل الزامی است</p>
                      )}
                      {errors?.email?.type === 'pattern' && (
                        <p className="errorValidtion mt-1"> ایمیل صحیح نیست</p>
                      )}
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
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                    <div className="form-group">
                      <label for="website">هدف از یادگیری زبان </label>
                      <input
                        className="form-control"
                        defaultValue={userGol}
                        {...register('userGol', {
                          required: true,
                          pattern: /[^-\s]/i,
                        })}
                      />
                      {errors?.userGol?.type === 'required' && (
                        <p className="errorValidtion mt-1">
                          {' '}
                          هدف شما الزامی است
                        </p>
                      )}
                      {errors?.userGol?.type === 'pattern' && (
                        <p className="errorValidtion mt-1">
                          {' '}
                          هدف شما الزامی است{' '}
                        </p>
                      )}
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
                  <div className=" col-12 mt-2">
                    <div className="form-group">
                      <label for="sTate">درباره شما</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="sTate"
                        defaultValue={about}
                        {...register('about')}
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
    overflow: hidden;
  }
  .account-settings .user-profile .user-avatar img {
    width: 110px;
    height: 110px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    border: 1px solid red;
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
  .imageUploadInp {
    display: none;
  }
  .editePen {
    position: absolute;
    left: 0%;
    bottom: -1%;
    width: 100%;
    background: #fff;
    border-radius: 10px;
  }
`
export default ProfileSetting
