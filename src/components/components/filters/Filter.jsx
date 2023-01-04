import React, { useState } from "react";
import Select from "./components/Select";

function Filter() {
  const [activeSelectEl, setActiveSelectEl] = useState(-1);
  const handlerActive = (mode) => {
    setActiveSelectEl(mode);
  };
  return (
    <div className="d-flex align-items-center justify-content-start">
      <Select
        activeKey={0}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        cls="mx-2"
        activeKey={1}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        cls="mx-2"
        activeKey={2}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        cls="mx-2"
        activeKey={3}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        cls="mx-2"
        activeKey={4}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        cls="mx-2"
        activeKey={5}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        cls="mx-2"
        activeKey={6}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        cls="mx-2"
        activeKey={7}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
      <Select
        cls="mx-2"
        activeKey={8}
        handlerActive={handlerActive}
        activeSelectEl={activeSelectEl}
      />
    </div>
  );
}

export default Filter;
