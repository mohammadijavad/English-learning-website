import React, { useState, useEffect } from 'react'
import TeacherCard from './components/TeacherCard'
import LoadingCom from '../../../../utils/Loading'
import axios from 'axios'
import {
  fetchProductsError,
  fetchProductsRequest,
  fetchProductsSuccess,
} from '../../../../store/apiActions'
import { Teachers } from '../../../../constants/Teachers' // clear after

import { useDispatch, useSelector } from 'react-redux'

function ContainerCardTeacher() {
  const [keyVedioDefault, setKeyVedio] = useState(0)
  const dispatch = useDispatch()
  const stateData = useSelector((state) => state)
  const fetchProducts = async () => {
    dispatch(fetchProductsRequest())
    axios
      .get('http://localhost:3100/Teachers')
      .then((response) => {
        const datas = response.data
        dispatch(fetchProductsSuccess(datas))
      })
      .catch((error) => {
        dispatch(fetchProductsError('error '))
      })
    console.log(stateData?.data)
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <>
      {stateData.loading && <LoadingCom />}
      <div className="mt-3 ">
        {stateData?.data.map((teacher) => {
          return (
            <TeacherCard
              keyVedioDefault={keyVedioDefault}
              setKeyVedio={setKeyVedio}
              {...teacher}
            />
          )
        })}
      </div>
    </>
  )
}

export default ContainerCardTeacher
