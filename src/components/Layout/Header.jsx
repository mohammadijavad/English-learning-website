import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderProfile from "./HeaderDeatils/HeaderProfile";
import HeaderSearch from "./HeaderDeatils/HeaderSearch";
import { contextapp } from "../../contexts/ContextProv";
import { BsListNested } from "react-icons/bs";
function Header() {
  const { headerMode, fixHeader, toggleSiderbarHandler } =
    useContext(contextapp);
  return (
    <div
      className={`containerHeader top-0  ${fixHeader ? "position-sticky" : ""}`}
    >
      <Row
        className={`wrapHeader align-items-center justify-content-end mx-0  position-relative ${
          headerMode ? "lightHeader" : "darkHeader"
        }`}
      >
        <Col xs={4} className="d-none d-sm-flex">
          <HeaderSearch />
        </Col>
        <Col xs={2} className="d-sm-none">
          <BsListNested
            className="text-white mt-2 curoser"
            onClick={toggleSiderbarHandler}
          />
        </Col>

        <Col xs={10} sm={8}>
          <HeaderProfile />
        </Col>
      </Row>
    </div>
  );
}

export default Header;
