import React from 'react'
import Categories from '../components/components/filters/components/filtersCategories/Categories'
import TeachersNameFilter from '../components/components/filters/components/filterNamesTeacher/TeachersNameFilter'
import ContainerCardTeacher from '../components/components/filters/components/TeacherCard/ContainerCardTeacher'

function Teachers() {
  return (
    <div className="mx-2 mt-2">
      <Categories />
      <TeachersNameFilter />
      <ContainerCardTeacher />
    </div>
  )
}

export default Teachers
