import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { getWordMeaning } from '../../../../app/store/Dictionary/dictionaryStore'
function SearchWord() {
  const [isopen, setIsopen] = useState(true)
  const dispatch = useDispatch()
  const refInp = useRef()
  const searchHandler = () => {
    if (!isopen) {
      setIsopen(true)
    }
    const val = refInp.current.value
    dispatch(getWordMeaning(val))
    console.log(val)
  }
  return (
    <Contaienr className="containerSearch">
      <div className="w-100 d-flex justify-content-center">
        <div className={`input-box ${isopen ? 'open' : ''}  containerSearch `}>
          <input
            type="text"
            className="p-2 w-100"
            placeholder="Search..."
            ref={refInp}
          />
          <span className="icon">
            <BsSearch
              size={20}
              onClick={searchHandler}
              className="uil uil-search search-icon curoser"
            />
          </span>
          <GrClose
            size={18}
            onClick={() => setIsopen(false)}
            className="uil uil-times close-icon curoser"
          />
        </div>
      </div>
    </Contaienr>
  )
}

const Contaienr = styled.div`
  .input-box {
    transform: scale(1.35);
    position: relative;
    border-radius: 10px;
    box-shadow: 0 7px 20px -8px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    transition: all 0.6s cubic-bezier(0.58, 0, 0.5, 1);
    width: 50px;
  }
  .input-box.open {
    width: 550px;
  }
  input {
    position: relative;
    outline: none;
    border: none;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    background-color: #fff;
  }
  .input-box.open {
    padding: 0 15px 0 65px;
  }
  .icon {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    width: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    background-color: #fff;
  }
  .search-icon,
  .close-icon {
    position: absolute;
    top: 50%;
    font-size: 30px;
    transition: all 0.6s cubic-bezier(0.58, 0, 0.12, 1);
  }
  .search-icon {
    color: #5c77ff;
    transform: translateY(-50%) rotate(90deg);
  }
  .input-box.open .search-icon {
    transform: translateY(-50%) rotate(0);
  }
  .close-icon {
    right: -38px;
    color: #fff;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-50%);
  }
  .input-box.open .close-icon {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(-50%) rotate(180deg);
  }
`
export default SearchWord
