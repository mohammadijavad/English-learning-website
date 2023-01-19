import React from "react";
import styled from "styled-components";
import notfind from "../assets/images/error400-cover.png";
import { NavLink } from "react-router-dom";
function NotfindPage() {
  return (
    <Container>
      <img src={notfind} alt="not find page" />
      <button className="btn btn-outline-info">
        <NavLink to="/profile">برگشت به داشبورد</NavLink>
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & img {
    width: 60%;
    margin: 0 auto;
  }
  & a {
    color: #222;
  }
`;
export default NotfindPage;
