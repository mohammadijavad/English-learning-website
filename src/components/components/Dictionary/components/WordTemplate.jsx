import React, { useRef } from 'react'
import { RxSpeakerLoud } from 'react-icons/rx'
function WordTemplate({ WordTemplate }) {
  const audioref = useRef()
  const { meanings, phonetics, word } = WordTemplate[0]
  const { synonyms, definitions, partOfSpeech } = meanings[0]
  console.log(WordTemplate[0])
  return (
    <div dir="ltr">
      <div>
        <h2>
          <span className="text-danger">{word}</span>{' '}
          <span>{phonetics[0].text}</span> <span>{partOfSpeech}</span>{' '}
          <RxSpeakerLoud
            className="curoser"
            onClick={() => audioref.current.play()}
          />
        </h2>
        <div>
          <audio
            src={phonetics[0].audio}
            controls
            className="d-none"
            ref={audioref}
          ></audio>
        </div>
      </div>
      <div>
        <div>
          <h3>
            <span className="text-info">synonyms</span> :{' '}
            {synonyms.map((synonym) => (
              <span key={synonym}> {synonym} </span>
            ))}
          </h3>
        </div>
        <div>
          <h3 className="text-success">definitions:</h3>
          {definitions.map((definition, index) => (
            <p key={index}>
              {' '}
              {index + 1}: {definition.definition}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WordTemplate
