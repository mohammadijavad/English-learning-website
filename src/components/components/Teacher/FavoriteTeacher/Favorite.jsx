import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllTeacher } from '../../../../app/store/Teacher store/Teacher'
import TeacherCard from '../TeacherCard/components/TeacherCard'
function Favorite() {
  const favoriteTeachers = useSelector(selectAllTeacher)
  const teacher = favoriteTeachers.filter(
    (teacher) => teacher.isFavorite === true,
  )
  let content
  if (teacher.length === 0) {
    content = <h1>موردی یافت نشد</h1>
  } else {
    content = teacher.map((t) => <TeacherCard {...t} key={t.id} />)
  }
  return <>{content}</>
}

export default Favorite
