//react import
import React from "react";
import { Route, Routes } from "react-router-dom";

//Layout import
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import components
import Layout from "./components/common/Layout";
import MainPage from "./pages/MainPage";
import JoinEmployeePage from "./pages/JoinEmployeePage";
import SearchEmployeePage from "./pages/SeachEmployeePage";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html{
    font-size: 62.5%; // percent of the font size of your browser // 1rem = 10px
    background: #DDDDDD;  
    /* overflow-y: hidden; */

    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
`;

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search/*" element={<SearchEmployeePage />} />
        <Route path="/join/*" element={<JoinEmployeePage />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
