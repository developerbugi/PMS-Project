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
      dep: "인사부",
      rank_name: "대리",
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
    {
      com_id: 240001, // 관리자 계정
      name_kor: "홍길동",
      name_eng: "'Hong Gildong",
      mob_num: "010-1234-9999",
      dep: "인사부",
      rank_name: "팀원",
      rrn: "990101-1234567",
      emp_email: "abcd1234@example.com",
      address: "서울시 마포구",
      emp_type: "2020-08-19", // 예시로 가입 상태를 true로 설정
      emp_hiredate: "2024-01-01", // 가입일
      emp_tmndate: "-", // 퇴사일
      final_edu: "대졸", // 학력
      major: "컴퓨터 공학", // 전공
      military: "N", // 병역 정보
      etc: "특이사항 없음", // 기타 정보
    },
    {
      com_id: 240002,
      name_kor: "김철수",
      name_eng: "Kim Cheolsu",
      mob_num: "010-9876-5432",
      dep: "영업부",
      rank_name: "사원",
      rrn: "950210-1234567",
      emp_email: "kim@example.com",
      address: "서울시 강남구",
      emp_type: "2020-08-19",
      emp_hiredate: "2023-02-20",
      emp_tmndate: "-",
      final_edu: "석사",
      major: "경영학",
      military: "N",
      etc: "특이사항 없음",
    },
    {
      com_id: 240003,
      name_kor: "이영희",
      name_eng: "Lee Yeonghee",
      mob_num: "010-1111-2222",
      dep: "개발부",
      rank_name: "주임",
      rrn: "920310-1112222",
      emp_email: "lee@example.com",
      address: "서울시 강동구",
      emp_type: "2020-08-19",
      emp_hiredate: "2023-03-10",
      emp_tmndate: "-",
      final_edu: "고졸",
      major: "",
      military: "Y",
      etc: "특이사항 없음",
    },
    {
      com_id: 240004,
      name_kor: "박민수",
      name_eng: "Park Minsu",
      mob_num: "010-5555-6666",
      dep: "기획부",
      rank_name: "대리",
      rrn: "930405-5556666",
      emp_email: "park@example.com",
      address: "부산시 해운대구",
      emp_type: "2020-08-19",
      emp_hiredate: "2023-04-05",
      emp_tmndate: "-",
      final_edu: "학사",
      major: "전자공학",
      military: "Y",
      etc: "특이사항 없음",
    },
    {
      com_id: 240005,
      name_kor: "김미영",
      name_eng: "Kim Miyoung",
      mob_num: "010-7777-8888",
      dep: "생산부",
      rank_name: "대리",
      rrn: "940520-7778888",
      emp_email: "kim@example.com",
      address: "인천시 서구",
      emp_type: "2020-08-19",
      emp_hiredate: "2023-05-20",
      emp_tmndate: "-",
      final_edu: "석사",
      major: "영문학",
      military: "N",
      etc: "특이사항 없음",
    },
    {
      com_id: 240006,
      name_kor: "정태우",
      name_eng: "Jung Taewoo",
      mob_num: "010-3333-4444",
      dep: "구매부",
      rank_name: "팀장",
      rrn: "950615-3334444",
      emp_email: "jung@example.com",
      address: "대전시 중구",
      emp_type: "2020-08-19",
      emp_hiredate: "2023-06-15",
      emp_tmndate: "-",
      final_edu: "고졸",
      major: "",
      military: "N",
      etc: "특이사항 없음",
    },
    {
      com_id: 240007,
      name_kor: "이지수",
      name_eng: "Lee Jisoo",
      mob_num: "010-9999-0000",
      dep: "마케팅부",
      rank_name: "사원",
      rrn: "960710-9990000",
      emp_email: "lee@example.com",
      address: "광주시 남구",
      emp_type: "2020-08-19",
      emp_hiredate: "2023-07-10",
      emp_tmndate: "-",
      final_edu: "학사",
      major: "화학공학",
      military: "N",
      etc: "특이사항 없음",
    },
  ],
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
