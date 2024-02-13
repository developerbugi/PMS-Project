import axios from "axios";

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: "http://localhost:8080", // 기본 호스트 주소 설정
  headers: {
    "Content-Type": "application/json", // 기본 콘텐츠 타입을 JSON으로 설정
  },
});

export default instance;
