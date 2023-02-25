import React from 'react'
import SearchWord from './components/SearchWord'
import Word from './components/Word'

function ContainerDictionary() {
  return (
    <div className="container mt-5">
      <SearchWord />
      <div className="mt-5">
        <Word />
      </div>
    </div>
  )
}

export default ContainerDictionary
