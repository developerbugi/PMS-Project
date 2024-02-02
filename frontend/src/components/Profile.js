import React from "react";
import styled from "styled-components";

import { useState } from "react";

const Profile = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveSubmit = () => {
    console.log(state);
    alert("저장 성공!");
  };

  const handleNewSubmit = () => {
    console.log(state);
    alert("등록 성공!");
  };

  const handleRemoveSubmit = () => {
    console.log(state);
    alert("초기화 성공!");
  };

  return (
    <SContainer>
      <SMainDiv>
        <SLabel>이름</SLabel>
        <SNameInput
          value={state.author}
          onChange={handleChangeState}
          name="author"
          placeholder="이름을 입력하세요"
          type="text"
        />
        <SButton onClick={handleSaveSubmit}>검색</SButton>
        <SButton onClick={handleSaveSubmit}>저장</SButton>
        <SButton onClick={handleNewSubmit}>사번부여</SButton>
        <SButton onClick={handleRemoveSubmit}>초기화</SButton>
      </SMainDiv>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SMainDiv = styled.div`
  border: 1px solid gray;
  text-align: center;
  padding: 20px;
`;

const SLabel = styled.label`
  font-size: 2rem;
  font-weight: 800;
`;

const SNameInput = styled.input`
  margin-bottom: 20px;
  width: 150px;
  height: 40px;
`;

const SButton = styled.button`
  width: 50px;
  padding: 10px;
  cursor: pointer;
`;

export default Profile;
