import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: [],
});

export const selectedIdState = atom({
  key: "selectedIdState",
  default: 1,
});

export const selectedMenuState = atom({
  key: "selectedMenuState",
  default: 1,
});

export const userDataState = atom({
  key: "userDataState",
  default: [
    {
      id: 1, // 관리자 계정
      name: "정지은",
      englishName: "Admin",
      phoneNumber: "010-1234-5678",
      employeeId: "admin001",
      department: "인사부",
      position: "대리",
      ssn: "980819-1234567",
      email: "admin@example.com",
      address: "서울시 강남구",
      isJoin: "2020-08-19", // 예시로 가입 상태를 true로 설정
      joinIn: "2024-01-01", // 가입일
      joinOut: "-", // 퇴사일
      education: "대졸", // 학력
      major: "컴퓨터 공학", // 전공
      army: "N", // 병역 정보
      etc: "관리자 계정", // 기타 정보
    },
    {
      id: 2, // 관리자 계정
      name: "키키키",
      englishName: "Admin",
      phoneNumber: "010-1234-5678",
      employeeId: "admin001",
      department: "인사부",
      position: "대리",
      ssn: "980819-1234567",
      email: "admin@example.com",
      address: "서울시 강남구",
      isJoin: "2020-08-19", // 예시로 가입 상태를 true로 설정
      joinIn: "2024-01-01", // 가입일
      joinOut: "-", // 퇴사일
      education: "대졸", // 학력
      major: "컴퓨터 공학", // 전공
      army: "N", // 병역 정보
      etc: "관리자 계정", // 기타 정보
    },
    {
      id: 3, // 관리자 계정
      name: "매매매",
      englishName: "Admin",
      phoneNumber: "010-1234-5678",
      employeeId: "admin001",
      department: "인사부",
      position: "대리",
      ssn: "980819-1234567",
      email: "admin@example.com",
      address: "서울시 강남구",
      isJoin: "2020-08-19", // 예시로 가입 상태를 true로 설정
      joinIn: "2024-01-01", // 가입일
      joinOut: "-", // 퇴사일
      education: "대졸", // 학력
      major: "컴퓨터 공학", // 전공
      army: "N", // 병역 정보
      etc: "관리자 계정", // 기타 정보
    },
    {
      id: 4, // 관리자 계정
      name: "추추추",
      englishName: "Admin",
      phoneNumber: "010-1234-5678",
      employeeId: "admin001",
      department: "인사부",
      position: "대리",
      ssn: "980819-1234567",
      email: "admin@example.com",
      address: "서울시 강남구",
      isJoin: "2020-08-19", // 예시로 가입 상태를 true로 설정
      joinIn: "2024-01-01", // 가입일
      joinOut: "-", // 퇴사일
      education: "대졸", // 학력
      major: "컴퓨터 공학", // 전공
      army: "N", // 병역 정보
      etc: "관리자 계정", // 기타 정보
    },
  ],
});
