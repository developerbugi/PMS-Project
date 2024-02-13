import React, { useState } from "react";
import styled from "styled-components";
import employeeImage from '../assets/img/logo.png';
import cameraIcon from "../assets/img/camera_enhance.svg";
import axios from 'axios'; 
import { RecoilRoot, atom, useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';


const SWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
    90deg,
    #82b2f8 28.12%,
    #477ebf 65.62%,
    #477ebf 100%
  );
`

const EmployeeSystemContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
`

const Header = styled.header`
  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
`

const Row = styled.div`

  display: flex;
  margin-bottom: 20px;

  &.first-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
`
const Label = styled.label` 
  width : 70px;
  margin-left : 10px;
  text-align: center;
`
const SImgContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 1rem;
`

const Img = styled.img`
  width : 100px;
  height : 100px; 
  margin-left : 20px;
  margin-bottom : 30px;
  background-color: white;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2); // 그림자 추가
  object-fit: cover;
  border-radius: 999px;
`
const SCameraIcon = styled.img`
  position: absolute;
  bottom: 0;
  left: 110px;
  height: 12px;
  width: 12px;
  padding: 10px; // 원의 크기를 조절하는 데 사용되는 패딩
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  transform: translate(-15px, -30px);
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.5); // 그림자 추가
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;

  label,
  input,
  button {
    margin-right: 10px;
  }
`

const ControlButtons = styled.div`
  display: flex;
  align-items: center;
`

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: ${(props) => props.inputWidth};
  
  &:focus {
    border-color: #699CFF;  
    outline: none;  
  }
`

const TextAreaField = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #699CFF;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #477EBF;
  }
`
const employeeState = atom({
  key: 'employeeState',
  default: {
    name_kor: "", //이름
    name_eng: "", //영문이름
    rrn: "", //주민등록번호
    com_id: "", //사번
    dep_id: "", //부서
    mod_num: "", //휴대폰번호
    rank_id: "", //직급
    major: "", //전공
    final_edu: "", //최종학력
    emp_type: "", //입사구분
    emp_hiredate: "", //입사일
    emp_email   : "", //이메일
    military: "", //군필
    address: "", //주소
    etc: "" //기타 특이사항
  },
});


const JoinEmployeePage = () => {

  const navigate = useNavigate();
  const [employee, setEmployee] = useRecoilState(employeeState);


  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (event) => {
    // 이벤트의 기본 동작을 중단 (폼 제출에 의한 페이지 새로고침을 막는 역할)
    event.preventDefault();

    // 모든 필드가 입력되었는지 확인
    for (let key in employee) {
      if (key !== "com_id" && employee[key] === "") {
        alert('아직 입력하지 않은 항목이 있습니다');
        return;
      }
    }

  // API 호출을 위한 데이터를 설정
  const apiData = {
    ...employee,
    com_id: null  // com_id(사번)를 null로 설정
  };

  try {
    // 여기에서 apiData를 사용하여 API 호출을 수행
    const response = await axios.post('url', apiData);
  
    // API 호출이 성공하면 알림을 표시
    alert('사원이 정상적으로 추가되었습니다');
  
    console.log(apiData);
    // setSearch('');  // recoil 상태를 초기화
    // API 호출이 성공하면 ../search/group 페이지로 이동
    navigate('../search/group');
  } catch (error) {
    console.error(error);
  
    // 에러 메시지 또는 코드를 확인하여 com_id 중복을 처리
    if (error.response && error.response.data === 'COM_ID_DUPLICATE') {
      alert('사번 중복으로 인해 사원 등록에 실패하였습니다.');
    } else {
      alert('사원 등록에 실패하였습니다.');
    }
  }
  };

  return (
    <SWrap>
      <EmployeeSystemContainer>
      <form onSubmit={handleSubmit}>
        <main>
          <Row className="first-row">
          <Header>
          <h1>사원 등록</h1>
          </Header>
            <ControlButtons >
              <Button onClick={handleSubmit}
              type="submit"
              style = {{
                marginRight : '20px'
              }}>
                등록 </Button>                   
            </ControlButtons>
            
          </Row>

          <div className="info-section">
            
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <SImgContainer>
          <Img src ={employeeImage} alt = "직원 사진"/>
          <label htmlFor="profile-image-upload">
            <SCameraIcon src={cameraIcon} alt="Change Profile Picture" />
          </label>
          <input
            id="profile-image-upload"
            type="file"
            accept=".jpg, .jpeg, .png"
            style={{ display: "none" }}
          />
          </SImgContainer>
            <div>
              <Row >
                <Label htmlFor="name_kor">이름 : </Label>
                <InputField
                  type="text"
                  id="name_kor"
                  name="name_kor"
                  value={employee.name_kor}
                  onChange={handleInputChange}
                  placeholder="ex) 최휘윤"
                  style = {{maxWidth :'100px'}}
                />

                <Label htmlFor="name_eng">영문이름 : </Label>
                <InputField
                  type="text"
                  id="name_eng"
                  name="name_eng"
                  value={employee.name_eng}
                  onChange={handleInputChange}
                  placeholder="ex) Hwiyoon"
                  style = {{maxWidth :'100px'}}
                />

                <Label htmlFor="rrn">주민번호 :</Label>
                <InputField
                  type="text"
                  id="rrn"
                  name="rrn"
                  value={employee.rrn}
                  onChange={handleInputChange}
                  placeholder="ex) 010101-456789"
                  style = {{maxWidth :'100px'}}
                />
              </Row>
              <Row>
                <Label htmlFor="com_id">사번 :</Label>
                <InputField
                  type="text"
                  id="com_id"
                  name="com_id"
                  value={employee.com_id}
                  readOnly  // 입력 필드를 읽기 전용으로 설정
                  placeholder="추후 부여 예정"
                  style = {{maxWidth :'100px'}}
                />

                <Label htmlFor="dep_id">부서 :</Label>
                <InputField
                  type="text"
                  id="dep_id"
                  name="dep_id"
                  value={employee.dep_id}
                  onChange={handleInputChange}
                  placeholder="ex) IT 기획"
                  style = {{maxWidth :'100px'}}
                />

                <Label htmlFor="mod_num">휴대폰번호 :</Label>
                <InputField
                  type="tel"
                  id="mod_num"
                  name="mod_num"
                  value={employee.mod_num}
                  onChange={handleInputChange}
                  placeholder="010-xxxx-xxxx"
                  style = {{maxWidth :'100px'}}
                />
              </Row>
            </div>
            </div>
            <Row>
              <Label htmlFor="rank_id">직급 :</Label>
              <InputField
                type="text"
                id="rank_id"
                name="rank_id"
                value={employee.rank_id}
                onChange={handleInputChange}
                style = {{
                  marginLeft : '10px'}}
                placeholder="ex) 과장"
                inputWidth = "130px"
              />

              <Label htmlFor="major">전공 :</Label>
              <InputField
                type="text"
                id="major"
                name="major"
                value={employee.major}
                onChange={handleInputChange}
                placeholder="ex) 멀티미디어공학과"
                inputWidth = "130px"
              />
              <Label htmlFor="final_edu">최종학력 :</Label>

              <div onChange={handleInputChange}>
                <input type="radio" value="대학교 졸업" name="final_edu" /> 대학교 졸업
                <input type="radio" value="고등학교 졸업" name="final_edu" style = {{marginLeft : '10px'}}/> 고등학교 졸업<br />
                <input type="radio" value="중학교 졸업" name="final_edu" /> 중학교 졸업
                <input type="radio" value="기타" name="final_edu" style = {{marginLeft : '10px'}}/> 기타<br />
              </div>
              
            </Row>

            <Row style = {{marginTop : '20px'}}>
              
            <Label htmlFor="emp_type">입사구분 :</Label>
              <select 
                id="emp_type" 
                name="emp_type" 
                onChange={handleInputChange} 
                style = {{
                marginLeft : '10px'}}>
                <option value="">-------- 선택해주세요 --------</option>
                <option value="정규직">정규직</option>
                <option value="계약직">계약직</option>
                <option value="기간제">기간제</option>
                <option value="일용직">일용직</option>
                <option value="파견직">파견직</option>
                <option value="기타">기타</option>
              </select>

              <Label htmlFor="emp_hiredate">입사일 :</Label>
              <InputField
                type="date"
                id="emp_hiredate"
                name="emp_hiredate"
                value={employee.emp_hiredate}
                onChange={handleInputChange}
                inputWidth = "130px"
              />

              <Label htmlFor="military">군필 :</Label>
              <select
                id="military"
                name="military"
                onChange={handleInputChange}>
                <option value="">-------- 선택해주세요 --------</option>
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select>
            </Row>
            <Row>
              <Label htmlFor="emp_email">이메일 :</Label>
              <InputField
                type="text"
                id="emp_email"
                name="emp_email"
                value={employee.emp_email}
                onChange={handleInputChange}
                style = {{
                  marginLeft : '10px'}}
                placeholder="ex) seohan@gmail.com"
                inputWidth = "600px"
              />

            </Row>
            <Row>
              <Label htmlFor="address">주소 :</Label>
              <InputField
                type="text"
                id="address"
                name="address"
                value={employee.address}
                onChange={handleInputChange}
                style = {{
                  marginLeft : '10px'}}
                placeholder="ex) 경기도 용인시 수지구 서한로 123번길 10 서한아파트 101동 101호"
                inputWidth = "600px"
              />
            </Row>
            <Row>
              <Label htmlFor="etc">기타 특이사항 :</Label>
              <InputField
                type="text"
                id="etc"
                name="etc"
                value={employee.etc}
                onChange={handleInputChange}
                style = {{
                  marginLeft : '10px'}}
                  inputWidth = "600px"
              />
            </Row>  
          </div>
        </main>

        </form>
      </EmployeeSystemContainer>
    </SWrap>
  );
  };


export default JoinEmployeePage;