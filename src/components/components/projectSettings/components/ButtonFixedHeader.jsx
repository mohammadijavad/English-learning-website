import React, { useState, useContext } from "react";
// import Button from "react-bootstrap/Button";
import { contextapp } from "../../../../contexts/ContextProv";
import styled from "styled-components";
function ButtonFixedHeader() {
  const { setFixHeaderHandler, fixHeader } = useContext(contextapp);
  const [active, setActive] = useState(false);
  return (
    <Container className="mb-3"> 
      <Button className={`btnfixedHeader fixedbtn fontSize ${!fixHeader?"":"active"}`} onClick={setFixHeaderHandler}>ثابت</Button>
      <Button className={`btnfixedHeader  notfixBtn fontSize ${!fixHeader?"active":""}`} onClick={setFixHeaderHandler}>غیر ثابت</Button>
    </Container>
  );
}

const Button = styled.button`
  padding: 5px 30px;
  border: none;
  background-color: var(--bg-btnHeaderChange);
  color: var(--setting-content-dark);
  

`;
const Container = styled.div`
  & button.fixedbtn {
    border-radius:4px 0 0 4px ;
  }
  & button.notfixBtn {
    border-radius:0 4px 4px 0 ;
  }
  & button.active{
    color:var(--active-text-btn-changeHeader);
    background-color: var(--active-bg-btn-changeHeader);
  }
`;

export default ButtonFixedHeader;
