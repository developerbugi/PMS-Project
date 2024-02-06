import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: [],
});

export const userDataState = atom({
  key: "userDataState",
  default: {
    id: null,
    naeme: "",
    englishName: "",
    employeeId: "",
    department: "",
    position: "",
    ssn: "",
    email: "",
    address: "",
    isJoin: "",
    joinIn: "",
    joinOut: "",
    education: "",
    major: "",
    army: "",
    etc: "",
  },
});
