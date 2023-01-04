import React, { useRef, useEffect, useState } from "react";
import style from "../style/TeacherCard.module.css";
import teacher from "../../../../assets/images/users/avatar-2.jpg";
import { BsFillStarFill, BsLightningFill } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import EnglishFleg from "../../../../assets/images/flags/us.svg";
import teacher1Vedio from "../../../../teacher1.mp4";
import pause from "../../../../assets/cover.svg";

function TeacherCard({ vedioKey, keyVedioDefault, setKeyVedio }) {
  const vedioRef = useRef();
  const [play, setPlay] = useState(false);
  const playVedioHandler = (mode) => {
    setPlay(mode);
    setKeyVedio(vedioKey);
    if (play) {
      vedioRef.current.play();
    } else {
      vedioRef.current.pause();
      setKeyVedio(0);
    }
  };
  useEffect(() => {
    if (play) {
      vedioRef.current.play();
    } else {
      vedioRef.current.pause();
      setKeyVedio(0);
    }
  }, [play]);
  return (
    <div>
      <div className={`  ${style.containerCard} mx-1 curoser mt-4`}>
        <div className={`row ${style.gridContainer}`}>
          <div className="col-12 col-md-7 h-100">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="d-flex">
                <div className="d-flex flex-column align-items-center justify-content-center  w-25">
                  <div className="w-75 m-auto mx-0 mt-2">
                    <img
                      src={teacher}
                      alt=""
                      className={` ${style.teacherAvatar} w-100`}
                    />
                  </div>
                  <div className="d-flex justify-content-center flex-column align-items-center mt-1">
                    <div>
                      <span className={`${style.rateStart}`}>
                        <BsFillStarFill /> <span> 5.0 </span>
                      </span>
                      از
                      <span className={`${style.rateStart}`}> 75 </span>
                      نظر
                    </div>
                    <div className={`${style.rateStart} mt-1`}>
                      <OverlayTrigger
                        delay={{ hide: 200, show: 100 }}
                        animation={false}
                        overlay={(props) => (
                          <Tooltip {...props}>رزرو آنی</Tooltip>
                        )}
                        placement="top"
                      >
                        <Button
                          variant=""
                          className={`m-0 p-0 bg-none ${style.rateStart}`}
                        >
                          <BsLightningFill className={`${style.rateStart}`} />
                        </Button>
                      </OverlayTrigger>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column  w-75">
                  <div className="m-2 mx-3"> فرنوش امینی</div>
                  <div className={`${style.animation} mt-1 mb-1 mx-3`}></div>
                  <div
                    className={`d-flex  align-items-center m-2 ${style.titleSkills}`}
                  >
                    <div className="mx-2">تدریس</div>
                    <div className="mx-3">
                      انگلیسی
                      <img
                        src={EnglishFleg}
                        width="16px"
                        height="16px"
                        alt="us"
                        className="rounded mx-2"
                      />
                    </div>
                  </div>
                  <div
                    className={`d-flex  align-items-center m-2 ${style.titleSkills}`}
                  >
                    <div className="mx-2">تخصص</div>
                    <div className="mx-3">
                      <b className={`${style.bold}`}>زبان عمومی و مکالمه</b>{" "}
                    </div>
                  </div>
                  <div
                    className={`d-flex  align-items-center m-2 ${style.titleSkills}`}
                  >
                    <div className="mx-2">سطح</div>
                    <div className="mx-3">متوسط, پیشرفته</div>
                  </div>
                  <div
                    className={`d-flex  align-items-center m-2 ${style.titleSkills}`}
                  >
                    <div className="mx-2">مهارتها</div>
                    <div className="mx-3">آیلتس, لهجه نیتیولایک </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center  w-100 h-25">
                <div className={`mx-2 ${style.priceClass}`}>
                  <span>جلسه آزمایشی</span>
                  <span>
                    <b className={`${style.bold}`}> 10000 </b>
                    تومان
                  </span>
                </div>
                <div className={`mx-2 ${style.priceClass}`}>
                  <span>جلسه یک ساعتی</span>
                  <span>
                    <b className={`${style.bold}`}> 10000 </b>
                    تومان
                  </span>
                </div>
                <div className={`mx-2 ${style.priceClass}`}>
                  <button className={`btn ${style.btnReservation} px-4 py-2`}>
                    <span style={{ zIndex: 10 }}> رزرو کلاس</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-md-flex col-md-5 ">
            <div
              className={`w-100 h-100 mx-2 d-flex justify-content-center align-items-center ${style.indexVideoWrapper}`}
            >
              <div className={`${style.vedioWrapper}`}>
                <video
                  onPause={() => playVedioHandler(false)}
                  ref={vedioRef}
                  controls={play}
                  className={`${style.vedioTeacherEl} ${
                    !play ? style.zoomIn : ""
                  }`}
                >
                  <source src={teacher1Vedio} type="video/webm" />
                  <source src={teacher1Vedio} type="video/mp4" />
                  Sorry, your browser doesn't support videos.
                </video>
                {!play && keyVedioDefault !== vedioKey && (
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
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
