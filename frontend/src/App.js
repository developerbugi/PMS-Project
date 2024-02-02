import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

//import components
import MainPage from "./pages/MainPage";
import Layout from "./components/common/Layout";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html{
    font-size: 62.5%; // percent of the font size of your browser // 1rem = 10px
    background: #DDDDDD;  
    /* overflow-y: hidden; */

    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }
`;

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <MainPage />
    </Layout>
  );
}

export default App;
