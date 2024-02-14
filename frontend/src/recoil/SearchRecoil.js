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
      com_id: 1, // 관리자 계정
      name_kor: "정지은",
      name_eng: "Admin",
      mob_num: "010-1234-5678",
      dep_id: "인사부",
      rank_id: "대리",
      rrn: "980819-1234567",
      emp_email: "admin@example.com",
      address: "서울시 강남구",
      emp_type: "2020-08-19", // 예시로 가입 상태를 true로 설정
      emp_hiredate: "2024-01-01", // 가입일
      emp_tmndate: "-", // 퇴사일
      final_edu: "대졸", // 학력
      major: "컴퓨터 공학", // 전공
      military: "N", // 병역 정보
      etc: "관리자 계정", // 기타 정보
    },
  ],
});

export const employeeDataState = atom({
  key: "employeeDataState",
  default: {
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
    emp_email: "", //이메일
    military: "", //군필
    address: "", //주소
    etc: "", //기타 특이사항
  },
});

export const userVacationState = atom({
  key: "userVacationState",
  default: [
    {
      id: 1,
      name: "정지은",
      year: "2024",
      month: "02",
      day: "06",
      reason: "병원 진료",
    },
    {
      id: 2,
      name: "나나나",
      year: "2024",
      month: "02",
      day: "13",
      reason: "병원 진료",
    },
    {
      id: 3,
      name: "박길동",
      year: "2024",
      month: "02",
      day: "18",
      reason: "병원 진료",
    },
    {
      id: 4,
      name: "하하하",
      year: "2024",
      month: "01",
      day: "26",
      reason: "병원 진료",
    },
    {
      id: 5,
      name: "무무무",
      year: "2024",
      month: "03",
      day: "10",
      reason: "병원 진료",
    },
  ],
});
