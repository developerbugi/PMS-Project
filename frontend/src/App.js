import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

//import components
import Layout from "./components/common/Layout";
import EmployeeSystemPage from "./pages/EmployeeSystemPage";

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
      <EmployeeSystemPage />
    </Layout>
  );
}

export default App;
