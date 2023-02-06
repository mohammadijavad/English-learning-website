import React from "react";
import { useSelector } from "react-redux";
import { selectAllTeacher } from "../../../../app/store/Teacher store/Teacher";
import { useParams } from "react-router-dom";
import style from "./teacherDetail.module.css";
import Cover from "./components/Cover";
import PersonalInfo from "./components/PersonalInfo";
import Description from "./components/Description";
import VedioIntro from "./components/VedioIntro";
import ContainerDatepicker from "./components/DateTime/ContainerDatepicker";
import ClassServices from "./components/services/ClassServices";
import { getModalShow } from "../../../../app/store/Teacher store/Teacher";
import backmony from "../../../../assets/Teacher/services/service_back_mony.png";
import canceledClass from "../../../../assets/Teacher/services/service_canceled_class.png";
import changeTeacher from "../../../../assets/Teacher/services/service_change_teacher.png";
import changeTime from "../../../../assets/Teacher/services/service_change_time.png";
import Comments from "./components/comments/Comments";

import ModalReserved from "../../../../utils/ModalReserved";
function TeacherDetailInfo() {
  const params = useParams();
  const { id } = params;
  const teachers = useSelector(selectAllTeacher);
  const findteacher = teachers.find((teacher) => teacher.id === id);
  const {
    photoTeacher,
    nameTeacher,
    discriptionTeacher,
    discriptionTeacherEnglish,
    comments,
  } = findteacher;
  const isShowModal = useSelector(getModalShow);
  return (
    <div className="container" style={{ height: "200vh" }}>
      <Cover />
      {isShowModal && <ModalReserved />}
      <div className="row justify-content-between">
        <div className="col-12 col-md-7 d-flex flex-column">
          <PersonalInfo photoTeacher={photoTeacher} nameTeacher={nameTeacher} />
          <Description
            discriptionTeacher={discriptionTeacher}
            discriptionTeacherEnglish={discriptionTeacherEnglish}
          />

          <hr className="mt-1" />
          {/* date time for book Classes with your favorite teacher */}
          <div className={style.reserveClassDateTime}>
            <ContainerDatepicker findteacher={findteacher} />
          </div>
          <div className="mt-5 d-flex justify-content-between align-items-center">
            <ClassServices
              img={backmony}
              textHead="بازگشت هزینه"
              text="در صورت انصراف از برگزاری ادامه کلاس‌"
            />
            <ClassServices
              img={canceledClass}
              textHead="لغو کلاس"
              text="حتی چند ساعت مانده به شروع کلاس‌"
            />
            <ClassServices
              img={changeTeacher}
              textHead="تغییر استاد"
              text="در صورت نارضایتی"
            />
            <ClassServices
              img={changeTime}
              textHead="تغییر زمان برگزاری"
              text="به زمان مناسب دیگر"
            />
          </div>
          <div className="mt-4">
            <Comments comments={comments} />
          </div>
        </div>
        <VedioIntro findteacher={findteacher} />
      </div>
    </div>
  );
}

export default TeacherDetailInfo;
