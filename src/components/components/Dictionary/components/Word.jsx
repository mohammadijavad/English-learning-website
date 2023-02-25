import React from 'react'
import { useSelector } from 'react-redux'
import {
  getWord,
  getWordStatus,
} from '../../../../app/store/Dictionary/dictionaryStore'
function Word() {
  const getWordMeanings = useSelector()
  return <div>Word</div>
}

export default Word
