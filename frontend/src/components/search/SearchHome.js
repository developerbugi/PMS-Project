import React from "react";
import styled from "styled-components";

//import component
import Profile from "../search/information/Profile";

//Home은 관리자 계정이 보이도록 가정
const SearchHome = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export default SearchHome;
