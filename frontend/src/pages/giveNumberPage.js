import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const GiveNumberPage = () => {

  const [formData, setFormData] = useState([
    { 
      name: "", 
      employeeNumber: "", 
      department: "", 
      isActive: "" 
  }
  ]);

  return (
    <>
      <h1>사번조회</h1>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <div style =
        {{
          fontSize : '35px' , 
          fontWeight : 'bold',
          backgroundColor : 'white', 
          width : '200px',
          height : '50px',
          textAlign : 'center',
          marginLeft: '100px'
        }} >
          연도
        </div>
        <input style = {{
          height : '50px',
          width : '300px',
          fontSize: '20px',
          fontWeight: '1000',
          color: '#262626',
          marginLeft: '30px'
        }}>
        </input>

        <button style = {{
          height : '50px',
          fontSize: '20px',
          marginLeft: '30px',
          backgroundColor: '#2f3b76',
          color:'white'
        }}>조회</button>

      </div>

      <div style=
      {{ 
        overflowY: 'auto', 
        maxHeight: '500px' 
      }}>

      <table style={{ 
        width: '80%', 
        borderCollapse: 'collapse',
        marginTop : '50px',
        marginLeft: '50px',
        fontSize: '15px',
        marginLeft: '100px',
        marginBottom: '100px',
        backgroundColor : 'white'
        }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>번호</th>
            <th style={{ 
              border: '1px solid black',
              backgroundColor : 'lightgray'
              }}>사번</th>
            <th style={{ 
              border: '1px solid black',
              backgroundColor : 'lightgray'
              }}>부서</th>
            <th style={{ 
              border: '1px solid black',
              backgroundColor : 'lightgray'
              }}>이름</th>
            <th style={{ 
              border: '1px solid black',
              backgroundColor : 'lightgray'
              }}>사용여부</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black' }}>{index + 1}</td>
              <td style={{ border: '1px solid black' }}>{item.employeeNumber}</td>
              <td style={{ border: '1px solid black' }}>{item.department}</td>
              <td style={{ border: '1px solid black' }}>{item.name}</td>
              <td style={{ border: '1px solid black' }}>{item.isActive ? '부여불가' : '부여가능'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    </>
  );
};



export default GiveNumberPage;
