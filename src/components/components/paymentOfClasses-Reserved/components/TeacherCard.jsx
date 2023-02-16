import style from '../style/payment.module.css'
function CardTeacher({ findTeacherSelected }) {
  const { photoTeacher, nameTeacher } = findTeacherSelected
  return (
    <div className="d-flex  mt-2">
      <div>
        <img
          src={photoTeacher}
          alt="nameTeacher"
          className="rounded"
          width={80}
        />
      </div>
      <div className={`${style.teacherInfo} d-flex flex-column mx-3 text-dark`}>
        <span className="mt-1">{nameTeacher}</span>
        <span className="mt-1"> استاد زبان انگلیسی</span>
        <span className="mt-1 fontSize">5 جلسه</span>
      </div>
    </div>
  )
}

export default CardTeacher
