import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useRecoilValue } from "recoil";
import { userDataState, selectedIdState } from "../../recoil/SearchRecoil";

//import image
import cameraIcon from "../../assets/img/camera_enhance.svg";
import userImage from "../../assets/img/logo.png";
import adminImg from "../../assets/img/admin_label.svg";
import empImg from "../../assets/img/sbimg.svg";
import random1 from "../../assets/img/leaves-8517219_1280.jpg";
import random2 from "../../assets/img/squirrel-8536537_1280.jpg";
import random3 from "../../assets/img/sunset-8544672_1280.jpg";
import { exitEmployee } from "../../api/userApi";
import ExitEmployeeModal from "./ExitEmployeeModal";

const SCameraIcon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 12px;
  width: 12px;
  padding: 10px; // 원의 크기를 조절하는 데 사용되는 패딩
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  transform: translate(-20px, -50px);
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.5); // 그림자 추가
`;

const SImg = styled.img`
  margin: 2rem;
  height: 120px;
  width: 120px;
  background-color: white;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2); // 그림자 추가
  object-fit: cover;
  border-radius: 999px;
`;

const SP = styled.div`
  margin-top: 0;
  margin-left: 1.2rem;
  font-size: 1.4rem;
  font-weight: 700;
`;

const SImgContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 190px;
  margin-left: 1rem;
`;

const SWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

const SMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%; /* 40%의 높이를 차지하도록 설정 */
`;

const SDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLabelImg = styled.img`
  width: 5rem;
  height: 1%.5rem;
`;

const SInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 190px;
  flex-direction: column;
  margin-top: 2.2rem;
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
  font-size: 2rem;
  font-weight: 800;
`;

const SItem = styled.div`
  flex: 1;
  margin-bottom: 3rem;
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

const SInfoDiv = styled.div`
  border-top: 1px solid #ddd;
  height: 80%;
  margin: 1.5rem;
  padding: 2rem;
  overflow: auto; /* 내용이 넘칠 경우 스크롤 생성 */
`;

const SSearchButton = styled.button`
  padding: 1rem 2.5rem;
  margin-left: 73rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: #82b2f8;
  font-size: 1.4rem;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    background-color: #82b2f8;
    color: #fff;
  }
`;

//랜덤값
const randomImages = [random1, random2, random3];

const EmployeeItem = () => {
  const userId = useRecoilValue(selectedIdState);
  const userData = useRecoilValue(userDataState).find(
    (user) => user.com_id === userId
  );

  const [name, setName] = useState(userData?.name_kor || "");
  const [englishName, setEnglishName] = useState(userData?.name_eng || "");
  const [id, setEmployeeId] = useState(userData?.com_id || "");
  const [department, setDepartment] = useState(userData?.dep_id || "");
  const [position, setPosition] = useState(userData?.rank_id || "");
  const [ssn, setSSN] = useState(userData?.rrn || "");
  const [phoneNumber, setPhoneNumber] = useState(userData?.mob_num || "");
  const [email, setEmail] = useState(userData?.emp_email || "");
  const [address, setAddress] = useState(userData?.address || "");
  const [isJoin, setIsJoin] = useState(userData?.emp_type || "");
  const [joinIn, setJoinIn] = useState(userData?.emp_hiredate || "");
  const [joinOut, setJoinOut] = useState(userData?.emp_tmndate || "");
  const [education, setEducation] = useState(userData?.final_edu || "");
  const [major, setMajor] = useState(userData?.major || "");
  const [army, setArmy] = useState(userData?.military || "");
  const [etc, setEtc] = useState(userData?.etc || "");

  //삭제 메소드

  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const handleExitClick = () => {
    setIsExitModalOpen(true);
  };
  const handleExitSubmit = (comId, empTmnDate, resignReason) => {
    // Make the API call using axios or your preferred HTTP client
    console.log(resignReason);
    exitEmployee(comId, empTmnDate, resignReason)
      .then(() => {
        // Handle successful API response, e.g., reload data, show success message
        alert("삭제되었습니다.");
        setIsExitModalOpen(false);
      })
      .catch((error) => {
        // Handle API errors gracefully, e.g., show error message
        console.error("Error calling exitEmployee API:", error);
      });
  };

  const imageToShow =
    userId === 1
      ? userImage
      : randomImages[Math.floor(Math.random() * randomImages.length)];

  return (
    <SWrap>
      <SMainDiv>
        <SImgContainer>
          <SImg src={imageToShow} alt="userImage" />
          <label htmlFor="profile-image-upload">
            <SCameraIcon src={cameraIcon} alt="Change Profile Picture" />
          </label>
          <input
            id="profile-image-upload"
            type="file"
            accept=".jpg, .jpeg, .png"
            style={{ display: "none" }}
          />
          {userId === 1 ? (
            <SDiv>
              <SLabelImg src={adminImg} alt="adminLabel" />
              <SP>admin</SP>
            </SDiv>
          ) : (
            <SDiv>
              <SLabelImg src={empImg} alt="empImg" />
              <SP>{id}</SP>
            </SDiv>
          )}
        </SImgContainer>
        <SInfoContainer>
          <SSearchButton onClick={handleExitClick}>퇴사처리</SSearchButton>
          <ExitEmployeeModal
            isOpen={isExitModalOpen}
            onClose={() => setIsExitModalOpen(false)}
            onSubmit={handleExitSubmit}
            comId={userId} // Pass the employee's com_id as a prop
          />
          <SInfoRow>
            <SItemTitle>기본 정보</SItemTitle>
          </SInfoRow>
          <SInfoRow>
            <SItem>
              <SSPan>이름</SSPan>
              <SInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                hasValue={name.length > 0}
              />
            </SItem>
            <SItem>
              <SSPan>영문 이름</SSPan>
              <SInput
                type="text"
                value={englishName}
                onChange={(e) => setEnglishName(e.target.value)}
                hasValue={englishName.length > 0}
              />
            </SItem>
          </SInfoRow>
          <SInfoRow>
            <SItem>
              <SSPan>부서</SSPan>
              <SInput
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                hasValue={department.length > 0}
              />
            </SItem>
            <SItem>
              <SSPan>직급</SSPan>
              <SInput
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                hasValue={position.length > 0}
              />
            </SItem>
          </SInfoRow>
          <SInfoRow>
            <SItem>
              <SSPan>주민번호</SSPan>
              <SInput
                type="text"
                value={ssn}
                onChange={(e) => setSSN(e.target.value)}
                hasValue={ssn.length > 0}
              />
            </SItem>
            <SItem>
              <SSPan>핸드폰번호</SSPan>
              <SInput
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                hasValue={phoneNumber.length > 0}
              />
            </SItem>
          </SInfoRow>
        </SInfoContainer>
      </SMainDiv>
      <SInfoDiv>
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
      </SInfoDiv>
    </SWrap>
  );
};

export default EmployeeItem;
