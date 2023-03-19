import React from 'react'
import LoadingCom from '../../../../utils/Loading'
import Nodata from '../../../../utils/Nodata'
import WordTemplate from './WordTemplate'

function Word({ data, loading, error }) {
  if (loading) {
    return <LoadingCom />
  }
  if (error) {
    alert('مشکلی پیش آمده')
  }
  if (data === 0 || !data) {
    return <Nodata />
  }

  return <WordTemplate WordTemplate={data} />
}

export default Word
