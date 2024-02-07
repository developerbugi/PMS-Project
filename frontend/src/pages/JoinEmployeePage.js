import React, { useState } from "react";
import styled from "styled-components";
import employeeImage from '../img/Employee.png';
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import GiveNumberPage from "../pages/giveNumberPage";

const JoinEmployeePage = () => {

  const navigate = useNavigate();

  const navigateToGive = () => {
    navigate("/give");
  };

  

  const [employee, setEmployee] = useState({
    name_kor: "", //이름
    name_eng: "", //영문이름
    rrn: "", //주민등록번호
    com_id: "", //사번
    dep_id: "", //부서
    mob_num: "", //휴대폰번호
    rank_id: "", //직급
    major: "", //전공
    final_edu: "", //최종학력
    emp_type: "", //입사구분
    emp_hiredate: "", //입사일
    email   : "", //이메일
    military: "", //군필
    address: "", //주소
  });

  const handleInputChange = (event) => {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value,
    });
  };

  /*<Button 
    onClick={navigateToGive}
    style = 
    {{
      marginLeft : '5px'
    }}
    >사번 부여</Button>  */

  return (
    <SWrap>
      <EmployeeSystemContainer>
        
        <main>
          <Row className="first-row">
          <Header>
          <h1>사원 등록</h1>
          </Header>
            <ControlButtons >
              <Button>저장</Button>
              
                
            </ControlButtons>
          </Row>

          <Routes>
          <Route path="/give" element={<GiveNumberPage />}></Route>
          </Routes>

          <div className="info-section">
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <img src ={employeeImage} 
            alt = "직원 고정 사진"
            style = {{
              width : '90px',
              height : '100px', 
              marginRight: '10px'
            }}
            />
            <div>
              <Row style = {{marginLeft : '10px'}}>
                <label htmlFor="name_kor"
                style = {{
                  width :'70px',
                  textAlign: 'center'
                }}
                >이름 : </label>
                <InputField
                  type="text"
                  id="name_kor"
                  name="name_kor"
                  value={employee.name_kor}
                  onChange={handleInputChange}
                  style = {{maxWidth :'100px'}}
                />

                <label htmlFor="name_eng"
                style = {{
                  width :'70px',
                  marginLeft : '10px',
                  textAlign: 'center'
              }}
                >영문이름 : </label>
                <InputField
                  type="text"
                  id="name_eng"
                  name="name_eng"
                  value={employee.name_eng}
                  onChange={handleInputChange}
                  style = {{maxWidth :'100px'}}
                />

                <label htmlFor="rrn"
                style = {{
                  width :'70px',
                  marginLeft : '10px',
                  textAlign: 'center'
                }}
                >주민번호 :</label>
                <InputField
                  type="text"
                  id="rrn"
                  name="rrn"
                  value={employee.rrn}
                  onChange={handleInputChange}
                  placeholder="앞자리 6자리"
                  style = {{maxWidth :'100px'}}
                />
              </Row>
              <Row style = {{marginLeft : '10px'}}>
                <label htmlFor="com_id"
                style = {{
                  width :'70px',
                  textAlign: 'center'
                }}
                >사번 :</label>
                <InputField
                  type="text"
                  id="com_id"
                  name="com_id"
                  value={employee.com_id}
                  onChange={handleInputChange}
                  style = {{maxWidth :'100px'}}
                />

                <label htmlFor="dep_id"
                style = {{
                  width :'70px',
                  marginLeft : '10px',
                  textAlign: 'center'
                }}
                >부서 :</label>
                <InputField
                  type="text"
                  id="dep_id"
                  name="dep_id"
                  value={employee.dep_id}
                  onChange={handleInputChange}
                  style = {{maxWidth :'100px'}}
                />

                <label htmlFor="mob_num"
                style = {{
                  width :'70px',
                  marginLeft : '10px',
                  textAlign: 'center'
                }}
                >휴대폰번호 :</label>
                <InputField
                  type="text"
                  id="mob_num"
                  name="mob_num"
                  value={employee.mob_num}
                  onChange={handleInputChange}
                  placeholder="010-xxxx-xxxx"
                  style = {{maxWidth :'100px'}}
                />
              </Row>
            </div>
            </div>
            <Row style = {{marginTop : '20px'}}>
              <label htmlFor="rank_id"
              style = {{
                width :'70px',
                textAlign: 'center'
                }}
              >직급 :</label>
              <InputField
                type="text"
                id="rank_id"
                name="rank_id"
                value={employee.rank_id}
                onChange={handleInputChange}
                style = {{maxWidth :'150px'}}
              />

              <label htmlFor="major"
              style = {{
                width :'70px',
                marginLeft : '20px',
                textAlign: 'center'
                }}
                >전공 :</label>
              <InputField
                type="text"
                id="major"
                name="major"
                value={employee.major}
                onChange={handleInputChange}
                style = {{maxWidth :'150px'}}
              />

              <label htmlFor="final_edu"
              style = {{
                width :'70px',
                marginLeft : '20px',
                textAlign: 'center'
                }}
                >최종학력 :</label>
              <InputField
                type="text"
                id="final_edu"
                name="final_edu"
                value={employee.final_edu}
                onChange={handleInputChange}
                style = {{maxWidth :'150px'}}
              />
            </Row>

            <Row style = {{marginTop : '20px'}}>
              <label htmlFor="emp_type"
              style = {{
                width :'70px',
                textAlign: 'center'
                }}
              >입사구분 :</label>
              <InputField
                type="text"
                id="emp_type"
                name="emp_type"
                value={employee.emp_type}
                onChange={handleInputChange}
                style = {{maxWidth :'150px'}}
              />
              
              <label htmlFor="emp_hiredate"
              style = {{
                width :'70px',
                marginLeft : '20px',
                textAlign: 'center'
                }}
                >입사일 :</label>
              <InputField
                type="date"
                id="emp_hiredate"
                name="emp_hiredate"
                value={employee.emp_hiredate}
                onChange={handleInputChange}
                style = {{maxWidth :'150px'}}
              />

              <label htmlFor="military"
                style = {{
                width :'70px',
                marginLeft : '20px',
                textAlign: 'center'
                }}
                >군필 :</label>
              <InputField
                type="text"
                id="military"
                name="military"
                value={employee.department}
                onChange={handleInputChange}
                style = {{maxWidth :'150px'}}
              />
            </Row>
            <Row>
              <label htmlFor="email"
              style = {{
                width :'55px',
                textAlign: 'center'
                }}>
                  이메일 :</label>
              <InputField
                type="text"
                id="email"
                name="email"
                value={employee.email}
                onChange={handleInputChange}
              />
 
            </Row>
            <Row>
              <label htmlFor="address"
              style = {{
                width :'55px',
                textAlign: 'center'
                }}>주소 :</label>
              <InputField
                type="text"
                id="address"
                name="address"
                value={employee.address}
                onChange={handleInputChange}
              />
            </Row>
          </div>
        </main>
      </EmployeeSystemContainer>
    </SWrap>
  );
};

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
`;

const EmployeeSystemContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
`;

const Header = styled.header`
  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
`;

const Row = styled.div`

  display: flex;
  margin-bottom: 20px;

  &.first-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;

  label,
  input,
  button {
    margin-right: 10px;
  }
`;

const ControlButtons = styled.div`
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;

  &:focus {
    border-color: #699CFF;  
    outline: none;  
  }
`;

const TextAreaField = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

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
`;

export default JoinEmployeePage;