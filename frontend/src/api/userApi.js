// src/api/userApi.js
import axios from "./axiosConfig"; // Axios 기본 설정 임포트

// 모든 직원 정보를 가져오는 함수
export const fetchAllEmployees = async () => {
  try {
    const response = await axios.get("/api/employees/all");
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 사번(ID)으로 직원 정보를 검색하는 함수
export const fetchEmployeeById = async (com_id) => {
  try {
    const response = await axios.post("/api/employees/ById", { com_id });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 이름으로 직원 정보를 검색하는 함수
export const fetchEmployeeByName = async (name_kor) => {
  try {
    const response = await axios.post("/api/employees/ByName", { name_kor });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 직원 정보를 추가하는 함수
export const createEmployee = async (employeeData) => {
  try {
    const response = await axios.post("/api/join", employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 직원 정보를 수정하는 함수
export const editEmployee = async (employeeData) => {
  try {
    const response = await axios.post("/api/edit", employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 직원의 퇴사 정보를 업데이트하는 함수
export const exitEmployee = async (com_id, emp_tmndate, resign_reason) => {
  try {
    const response = await axios.post("/api/exit", {
      com_id,
      emp_tmndate,
      resign_reason,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
