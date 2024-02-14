import React, { useEffect } from "react";

//import recoil
import { useRecoilState } from "recoil";
import { selectedIdState } from "../../recoil/SearchRecoil";
import EmployeeItem from "./EmployeeItem";

//Home은 관리자 계정이 보이도록 가정
const SearchHome = () => {
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

  useEffect(() => {
    setSelectedId(1);
  }, []);

  return (
    <>
      <EmployeeItem />
    </>
  );
};

export default SearchHome;
