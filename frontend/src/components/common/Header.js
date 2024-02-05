import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  color: black;
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
  // dropdown 메뉴
  const [isdrop, setIsdrop] = useState(false);
  const dropdownHandler = () => {
    setIsdrop(!isdrop);
  };
  const dropdownHide = () => {
    setIsdrop(false);
  };

  return (
    <>
      <Navbar id="navbar">
        <NavLeftDiv>
          <NavDiv onClick={dropdownHide}>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle : nonActiveStyle
              }
              to="/"
            >
              {/* <SLogoImg id="logo" src={logo} alt="#" /> */}
            </NavLink>
          </NavDiv>
        </NavLeftDiv>
        <NavRightDiv>
          <NavDiv onClick={dropdownHide}>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle : nonActiveStyle
              }
              to="/join"
            >
              <SP className="text">생성</SP>
            </NavLink>
          </NavDiv>
          <NavDiv onClick={dropdownHide}>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeStyle : nonActiveStyle
              }
              to="/search"
            >
              <SP className="text">조회</SP>
            </NavLink>
          </NavDiv>
        </NavRightDiv>
      </Navbar>
    </>
  );
};
export default Header;
