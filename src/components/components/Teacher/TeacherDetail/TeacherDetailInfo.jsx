import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { selectAllTeacher } from '../../../../app/store/Teacher store/Teacher'
import { useParams } from 'react-router-dom'
import style from './teacherDetail.module.css'
import Cover from './components/Cover'
import PersonalInfo from './components/PersonalInfo'
import Description from './components/Description'
import VedioIntro from './components/VedioIntro'
import ContainerDatepicker from './components/DateTime/ContainerDatepicker'
import { Helmet } from 'react-helmet'
import {
  getModalShow,
  showModalSetClassTime,
  setSelectTimeForClassesHandler,
  modeDatepickerHandler,
  stepModalToSelectTime,
  setCounterHandler,
} from '../../../../app/store/Teacher store/Teacher'

import Comments from './components/comments/Comments'

import ModalReserved from '../../../../utils/ModalReserved'
import ModalReservedDatepiTime from '../TeacherDetail/components/reserved-modal/ReservedModalHasTime'
import ContainerServices from './components/services/ContainerServices'
import LoadingCom from '../../../../utils/Loading'
import { useQuery } from 'react-query'
import axios from 'axios'
function TeacherDetailInfo() {
  // const dispatch = useDispatch()
  const params = useParams()
  const { id } = params

  const getTeahcer = () => {
    return axios.get(`http://localhost:3100/Teachers/${id}`)
  }
  const { data, isLoading } = useQuery(['getTeacherInfo'], getTeahcer)
  const isShowModal = useSelector(getModalShow)
  const stateShowModalSetTime = useSelector(showModalSetClassTime)
  if (isLoading || !data) {
    return <LoadingCom />
  }
  const {
    photoTeacher,
    nameTeacher,
    discriptionTeacher,
    discriptionTeacherEnglish,
    comments,
    languageExperts,
    Experts,
    studentsTeacher,
    completedClass,
  } = data.data

  // useEffect(() => {
  //   dispatch(setSelectTimeForClassesHandler(false))
  //   dispatch(modeDatepickerHandler(false))
  //   dispatch(stepModalToSelectTime(0))
  //   dispatch(setCounterHandler(0))
  // }, [])

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title> استاد {nameTeacher} | بستاک</title>
      </Helmet>
      <Cover />
      {isShowModal && <ModalReserved />}
      {stateShowModalSetTime && (
        <ModalReservedDatepiTime findteacher={data.data} />
      )}
      <div className="row justify-content-between">
        <div className="col-12 col-md-7 d-flex flex-column">
          <PersonalInfo
            photoTeacher={photoTeacher}
            nameTeacher={nameTeacher}
            languageExperts={languageExperts}
            Experts={Experts}
            studentsTeacher={studentsTeacher}
            completedClass={completedClass}
          />
          <Description
            discriptionTeacher={discriptionTeacher}
            discriptionTeacherEnglish={discriptionTeacherEnglish}
          />

          <hr className="mt-1" />

          <div className={style.reserveClassDateTime}>
            <ContainerDatepicker findteacher={data.data} />
          </div>
          <ContainerServices />
          <div className="mt-4">
            <Comments comments={comments} />
          </div>
        </div>
        <VedioIntro findteacher={data.data} />
      </div>
    </div>
  )
}

export default TeacherDetailInfo
