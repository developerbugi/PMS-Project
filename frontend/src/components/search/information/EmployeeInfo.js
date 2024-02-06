import React, { useState } from "react";
import styled, { css } from "styled-components";

const EmployeeInfo = () => {
  const [email, setEmail] = useState("abcd1234@naver.com");
  const [address, setAddress] = useState("서울시 강남구 123-45");
  const [isJoin, setIsJoin] = useState("2024-02-06");
  const [joinIn, setJoinIn] = useState("2024-02-06");
  const [joinOut, setJoinOut] = useState("-");
  const [education, setEducation] = useState("학사");
  const [major, setMajor] = useState("컴퓨터공학");
  const [army, setArmy] = useState("N");
  const [etc, setEtc] = useState("-");

  //여기 추가해야돼!!!!!!!!!!!!!!!!!!
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <SWrap>
      <SInfoRow>
        <SItemTitle>상세 정보</SItemTitle>
      </SInfoRow>
      <SInfoRow>
        <SItem>
          <SSPan>이메일</SSPan>
          <SInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hasValue={email.length > 0}
          />
        </SItem>
      </SInfoRow>
      <SInfoRow>
        <SItem>
          <SSPan>주소</SSPan>
          <SInput
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            hasValue={address.length > 0}
          />
        </SItem>
      </SInfoRow>
      <SInfoRow>
        <SItem>
          <SSPan>입사구분</SSPan>
          <SInput
            type="text"
            value={isJoin}
            onChange={(e) => setIsJoin(e.target.value)}
            hasValue={isJoin.length > 0}
          />
        </SItem>
        <SItem>
          <SSPan>입사일</SSPan>
          <SInput
            type="text"
            value={joinIn}
            onChange={(e) => setJoinIn(e.target.value)}
            hasValue={joinIn.length > 0}
          />
        </SItem>
        <SItem>
          <SSPan>퇴사일</SSPan>
          <SInput
            type="text"
            value={joinOut}
            onChange={(e) => setJoinOut(e.target.value)}
            hasValue={joinOut.length > 0}
          />
        </SItem>
      </SInfoRow>
      <SInfoRow>
        <SItem>
          <SSPan>최종학력</SSPan>
          <SInput
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            hasValue={education.length > 0}
          />
        </SItem>
        <SItem>
          <SSPan>전공</SSPan>
          <SInput
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            hasValue={major.length > 0}
          />
        </SItem>
      </SInfoRow>
      <SInfoRow>
        <SItem>
          <SSPan>군필</SSPan>
          <SInput
            type="text"
            value={army}
            onChange={(e) => setArmy(e.target.value)}
            hasValue={army.length > 0}
          />
        </SItem>
      </SInfoRow>
      <SInfoRow>
        <SItem>
          <SSPan>기타사항</SSPan>
          <SInput
            type="text"
            value={etc}
            onChange={(e) => setEtc(e.target.value)}
            hasValue={etc.length > 0}
          />
        </SItem>
      </SInfoRow>
    </SWrap>
  );
};

const SWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const SInfoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SItemTitle = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 800;
`;

const SItem = styled.div`
  flex: 1;
  margin-bottom: 2.5rem;
  font-size: 1rem;
  font-weight: 700;
`;

const SSPan = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
`;

const SInput = styled.input`
  width: 70%;
  margin-left: 1.2rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.8rem;
  font-size: 1.2rem;

  ${(props) =>
    props.hasValue &&
    css`
      border: none;
      border-bottom: 1px solid transparent;
      outline: none;
    `}
`;

export default EmployeeInfo;
