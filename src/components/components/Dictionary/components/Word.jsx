import React from 'react'
import { useSelector } from 'react-redux'
import {
  getWord,
  getWordStatus,
} from '../../../../app/store/Dictionary/dictionaryStore'
import LoadingCom from '../../../../utils/Loading'
import Nodata from '../../../../utils/Nodata'
import WordTemplate from './WordTemplate'
function Word() {
  const getWordMeanings = useSelector(getWord)
  const stausFetchWordMeaning = useSelector(getWordStatus)
  if (stausFetchWordMeaning === 'loading') {
    return <LoadingCom />
  }
  if (getWordMeanings.length === 0) {
    return <Nodata />
  }
  return <WordTemplate WordTemplate={getWordMeanings} />
}

export default Word
