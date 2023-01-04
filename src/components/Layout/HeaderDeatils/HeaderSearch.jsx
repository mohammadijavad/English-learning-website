import React, { useContext } from "react";
import { BsSearch, BsListNested } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import { contextapp } from "../../../contexts/ContextProv";
function HeaderSearch() {
  const { toggleSiderbarHandler } = useContext(contextapp);
  return (
    <div className="d-flex align-items-center">
      <div className="d-md-none" onClick={toggleSiderbarHandler}>
        <BsListNested className="  mx-1 curoser text-white" size={20} />
      </div>
      <Form className="position-relative headerSearchForm">
        <Form.Control type="text" placeholder="جستجو..." className="px-5 " />
        <div className="position-absolute  text-dark headerSearchIcon">
          <BsSearch size={18} />
        </div>
      </Form>
    </div>
  );
}

export default HeaderSearch;
