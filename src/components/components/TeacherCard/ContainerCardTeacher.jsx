import React, { useState } from "react";
import TeacherCard from "./components/TeacherCard";

function ContainerCardTeacher() {
  // const [defaultKey, setDefaultKey] = useState(0);
  const [keyVedioDefault, setKeyVedio] = useState(0);
  return (
    <div className="mt-3">
      <TeacherCard
        vedioKey={1}
        keyVedioDefault={keyVedioDefault}
        setKeyVedio={setKeyVedio}
      />
      <TeacherCard
        vedioKey={2}
        keyVedioDefault={keyVedioDefault}
        setKeyVedio={setKeyVedio}
      />
    </div>
  );
}

export default ContainerCardTeacher;
