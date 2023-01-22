import React from "react";
import { useSelector } from "react-redux";
import TeacherCard from "../TeacherCard/components/TeacherCard";
function Favorite() {
  const favoriteTeachers = useSelector((state) => state);
  const favoriteTeacherData = favoriteTeachers?.data.filter(
    (teacher) => teacher.isFavorite
  );
  let content = "s";
  console.log(favoriteTeacherData);
  if (favoriteTeacherData.length === 0) {
    return <h1>موردی یافت نشد</h1>;
  } else {
    content = favoriteTeacherData?.map((teacher, index) => (
      <TeacherCard key={index} {...teacher} />
    ));
  }
  return <>{content}</>;
}

export default Favorite;
