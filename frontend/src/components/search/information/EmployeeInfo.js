import React, { useState } from "react";
import styled, { css } from "styled-components";

//import recoil
import { useRecoilValue } from "recoil";
import { userDataState, selectedIdState } from "../../../recoil/SearchRecoil";

const EmployeeInfo = () => {
  const userId = useRecoilValue(selectedIdState);
  const userData = useRecoilValue(userDataState).find(
    (user) => user.com_id === userId
  );

  const [email, setEmail] = useState(userData?.emp_email || "");
  const [address, setAddress] = useState(userData?.address || "");
  const [isJoin, setIsJoin] = useState(userData?.emp_type || "");
  const [joinIn, setJoinIn] = useState(userData?.emp_hiredate || "");
  const [joinOut, setJoinOut] = useState(userData?.emp_tmndate || "");
  const [education, setEducation] = useState(userData?.final_edu || "");
  const [major, setMajor] = useState(userData?.major || "");
  const [army, setArmy] = useState(userData?.military || "");
  const [etc, setEtc] = useState(userData?.etc || "");

  const handleInputChange = (e) => {
    const { email, value } = e.target;
    switch (email) {
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "isJoin":
        setIsJoin(value);
        break;
      case "joinIn":
        setJoinIn(value);
        break;
      case "joinOut":
        setJoinOut(value);
        break;
      case "education":
        setEducation(value);
        break;
      case "major":
        setMajor(value);
        break;
      case "army":
        setArmy(value);
        break;
      case "etc":
        setEtc(value);
        break;
      default:
        break;
    }
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
