import React, { useState } from 'react'
import SearchWord from './components/SearchWord'
import Word from './components/Word'
import { useQuery } from 'react-query'
import axios from 'axios'
function ContainerDictionary() {
  const [vocab, setVocab] = useState('men')
  const fetchDictionary = (vocab) => {
    return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${vocab}`)
  }
  const { data, isLoading, isError, refetch } = useQuery(
    ['dictionaryVocan', vocab],
    () => fetchDictionary(vocab),
    {
      enabled: false,
    },
  )

  return (
    <div className="container mt-5">
      <SearchWord setVocab={setVocab} fetchVocab={refetch} />
      <div className="mt-5">
        <Word data={data?.data} loading={isLoading} error={isError} />
      </div>
    </div>
  )
}

export default ContainerDictionary
