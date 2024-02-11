import React, { useState } from "react";
import styled from "styled-components";
import employeeImage from '../img/Employee.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
// import { useRecoilState } from 'recoil';
// import { searchState } from './states';

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


const JoinEmployeePage = () => {

  // const navigate = useNavigate();
  // const [search, setSearch] = useRecoilState(searchState);

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

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
    
  };

    const handleSubmit = async (event) => {
      // 이벤트의 기본 동작을 중단 (폼 제출에 의한 페이지 새로고침을 막는 역할)
      event.preventDefault();
  
      // 모든 필드가 입력되었는지 확인
      for (let key in employee) {
        if (employee[key] === "") {
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
        console.log(response.data);
      // API 호출이 성공하면 알림을 표시
      alert('등록되었습니다');
      // setSearch('');  // recoil 상태를 초기화
      // history.push('/search');  // '/search' 페이지로 이동
      } catch (error) {
        console.error(error);
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
              style = {{
                marginRight : '20px'
              }}>
                등록 </Button>                   
            </ControlButtons>
            
          </Row>

          <div className="info-section">
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <img src ={employeeImage} 
            alt = "직원 고정 사진"
            style = {{
              width : '90px',
              height : '100px', 
              marginLeft : '20px'
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
                  placeholder="ex) 최휘윤"
                  
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
                  placeholder="ex) Hwiyoon"
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
                  placeholder="ex) 010101-456789"
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
                  readOnly  // 입력 필드를 읽기 전용으로 설정
                  placeholder="추후 부여 예정"
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
                  placeholder="ex) IT 기획"
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
                  type="tel"
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
            <Row style = {{
              marginTop : '20px'}}>

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
                placeholder="ex) 과장"
                style = {{
                  maxWidth :'150px'
              }}
              />

              <label htmlFor="major"
              style = {{
                width :'70px',
                textAlign: 'center'
                }}
                >전공 :</label>
              <InputField
                type="text"
                id="major"
                name="major"
                value={employee.major}
                onChange={handleInputChange}
                placeholder="ex) 멀티미디어공학과"
                style = {{maxWidth :'150px'}}
              />
              <label htmlFor="final_edu"
              style = {{
                width :'70px',
                marginLeft : '20px',
                textAlign: 'center'
                }}

              >최종학력 :</label>

              <div onChange={handleInputChange}>
                <input type="radio" value="대학교 졸업" name="final_edu" /> 대학교 졸업<br />
                <input type="radio" value="고등학교 졸업" name="final_edu" /> 고등학교 졸업<br />
                <input type="radio" value="중학교 졸업" name="final_edu" /> 중학교 졸업
              </div>
              
            </Row>

            <Row style = {{marginTop : '20px'}}>
              
            <label htmlFor="emp_type"
              style = {{
                width :'75px',
                textAlign: 'center',
                marginLeft : '10px'
                }}
              >입사구분 :</label>
              <select 
                id="emp_type" 
                name="emp_type" 
                onChange={handleInputChange} 
                style = {{maxWidth :'550px',
                marginLeft : '10px'}}>
                <option value="">--------- 선택해주세요 ---------</option>
                <option value="정규직">정규직</option>
                <option value="계약직">계약직</option>
                <option value="기간제">기간제</option>
                <option value="일용직">일용직</option>
                <option value="파견직">파견직</option>
                <option value="기타">기타</option>
              </select>

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
                style = {{maxWidth :'150px',
                marginLeft : '10px'}}
              />

              <label htmlFor="military"
                style = {{
                width :'70px',
                marginLeft : '10px',
                textAlign: 'center'
                }}
                >군필 :</label>
              <select
                id="military"
                name="military"
                onChange={handleInputChange}
                style = {{
                  maxWidth :'550px',
                  marginLeft : '10px'

              }}
              >
                <option value="">--------- 선택해주세요 ---------</option>
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select>
            </Row>
            <Row>
              <label htmlFor="email"
              style = {{
                width :'55px',
                textAlign: 'right'
                }}>
                  이메일 :</label>
              <InputField
                type="text"
                id="email"
                name="email"
                value={employee.email}
                onChange={handleInputChange}
                style = {{marginLeft : '20px'}}
                placeholder="ex) seohan@gmail.com"
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
                style = {{marginLeft : '20px'}}
                placeholder="ex) 경기도 용인시 수지구 서한로 123번길 10 서한아파트 101동 101호"
              />
            </Row>
            <Row>
              <label htmlFor="address"
              style = {{
                width :'55px',
                textAlign: 'center'
                }}>기타 특이사항 :</label>
              <InputField
                type="text"
                id="address"
                name="address"
                value={employee.address}
                onChange={handleInputChange}
                style = {{marginLeft : '20px'}}
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