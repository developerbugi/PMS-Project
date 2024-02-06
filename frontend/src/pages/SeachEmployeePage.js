import React, { useState } from "react";
import styled from "styled-components";

//import component
import SearchHome from "../components/search/SearchHome";
import SearchGroup from "../components/search/SearchGroup";
import SearchWork from "../components/search/SearchWork";
import SearchVacation from "../components/search/SearchVacation";
import SearchIn from "../components/search/SearchIn";
import SearchOut from "../components/search/SearchOut";

//import image
import homelogo from "../assets/img/home.svg";
import grouplogo from "../assets/img/group.svg";
import vacationlogo from "../assets/img/beach_access.svg";
import worklogo from "../assets/img/work.svg";
import inlogo from "../assets/img/login.svg";
import outlogo from "../assets/img/logout.svg";

const SearchEmployeePage = () => {
  const [selectedMenu, setSelectedMenu] = useState(1);

  const handleMenuItemClick = (menuNumber) => {
    setSelectedMenu(menuNumber);
  };

  const renderSelectedComponent = () => {
    switch (selectedMenu) {
      case 1:
        return <SearchHome />;
      case 2:
        return <SearchGroup />;
      case 3:
        return <SearchVacation />;
      case 4:
        return <SearchWork />;
      case 5:
        return <SearchIn />;
      case 6:
        return <SearchOut />;
      default:
        return null;
    }
  };
  return (
    <SWrap>
      <SContainer>
        <Menu>
          <MenuItem onClick={() => handleMenuItemClick(1)}>
            <span>홈</span>
            <SLogoImg src={homelogo} alt="#" />
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick(2)}>
            <span>조직</span>
            <SLogoImg src={grouplogo} alt="group" />
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick(3)}>
            <span>휴가</span>
            <SLogoImg src={vacationlogo} alt="vacation" />
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick(4)}>
            <span>근무</span>
            <SLogoImg src={worklogo} alt="worktime" />
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick(5)}>
            <span>입사</span>
            <SLogoImg src={inlogo} alt="in" />
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick(6)}>
            <span>퇴사</span>
            <SLogoImg src={outlogo} alt="out" />
          </MenuItem>
        </Menu>
        <SContentDiv>{renderSelectedComponent()}</SContentDiv>
      </SContainer>
    </SWrap>
  );
};

const SContentDiv = styled.div``;

const SLogoImg = styled.img`
  width: 105px;
  height: 29px;
  margin-top: 2rem;
`;

const SWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    #82b2f8 28.12%,
    #477ebf 65.62%,
    #477ebf 100%
  );
`;

const SContainer = styled.div`
  width: 92vw;
  height: 80vh;
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 6rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
  display: flex;
  overflow: hidden;
`;

const Menu = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  cursor: pointer;
  color: #333;
  font-size: 1.4rem;
  font-weight: 1000;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #82b2f8;
  }
  flex-grow: 1;
  border-bottom: 2px solid #ddd;
`;

export default SearchEmployeePage;
