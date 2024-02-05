import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// 로고 이미지
import logo from "../../assets/img/logo-name.svg";

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 70px;
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  margin-bottom: 0px;
  max-width: 100%;
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3vw;
`;

const NavLeftDiv = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
`;

const NavRightDiv = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  margin-right: 0px;
  position: relative;
`;

const SLogoImg = styled.img`
  width: 105px;
  height: 29px;
`;

const SP = styled.p`
  font-size: 16px;
  font-weight: 600;
  :hover {
    font-weight: 700;
  }
`;

// 해당 페이지 접속 중이거나, hovering시
const activeStyle = {
  textDecoration: "none",
  color: "#FFFFFF",
  fontWeight: 700,
};

// 접속 X
const nonActiveStyle = {
  textDecoration: "none",
  color: "#FFFFFF",
};

// 네비게이션 바
const Header = () => {
  return (
    <>
      <Navbar id="navbar">
        <NavLeftDiv>
          <NavDiv>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle : nonActiveStyle
              }
              to="/"
            >
              <SLogoImg id="logo" src={logo} alt="#" />
            </NavLink>
          </NavDiv>
        </NavLeftDiv>
        <NavRightDiv>
          <NavDiv>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle : nonActiveStyle
              }
              to="/search"
            >
              <SP className="text">조회</SP>
            </NavLink>
          </NavDiv>
          <NavDiv>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle : nonActiveStyle
              }
              to="/join"
            >
              <SP className="text">등록</SP>
            </NavLink>
          </NavDiv>
        </NavRightDiv>
      </Navbar>
    </>
  );
};

export default Header;
