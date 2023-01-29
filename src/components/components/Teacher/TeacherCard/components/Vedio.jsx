import React, { useState, useEffect, useRef } from 'react'
import style from '../style/TeacherCard.module.css'
import pause from '../../../../../assets/cover.svg'
function Vedio({ id, introVedio, classDetailsInfo }) {
  const [keyVedioDefault, setKeyVedio] = useState(0)
  const vedioRef = useRef()
  const [play, setPlay] = useState(false)
  const playVedioHandler = (mode) => {
    setPlay(mode)
    setKeyVedio(id)
    if (play) {
      vedioRef.current.play()
    } else {
      vedioRef.current.pause()
      setKeyVedio(0)
    }
  }
  // const favoriteTeacher=()=>{

  // }
  useEffect(() => {
    if (play) {
      vedioRef.current.play()
    } else {
      vedioRef.current.pause()
      setKeyVedio(0)
    }
  }, [play])
  return (
    <div
      className={`${
        classDetailsInfo
          ? style.justDetailInfoPage
          : 'd-none d-md-flex justify-content-around align-items-center col-12 col-md-5'
      }`}
    >
      <div
        className={` w-75  m-auto mt-3 mb-3  d-flex justify-content-center align-items-center ${style.indexVideoWrapper}`}
      >
        <div className={`${style.vedioWrapper}`}>
          <video
            onPause={() => playVedioHandler(false)}
            ref={vedioRef}
            controls={play}
            className={`${style.vedioTeacherEl} ${!play ? style.zoomIn : ''}`}
          >
            <source src={introVedio} type="video/webm" />
            <source src={introVedio} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
          {!play && keyVedioDefault !== id && (
            <div
              className={`${style.shadowsVedio}`}
              onClick={() => playVedioHandler(!play)}
            >
              <div className={`${style.coverWrap}`}>
                <img src={pause} alt="" />
                <span className={`${style.teacherName}`}>
                  ویدئوی معرفی استاد فرنوش امینی
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Vedio
