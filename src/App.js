import {Header} from "./components/Header";
import {createGlobalStyle} from "styled-components";
import {Reasons} from "./components/Reasons";
import {Modules} from "./components/Modules";
import {Form} from "./components/Form";
import {Footer} from "./components/Footer";
import {Subfooter} from "./components/Subfooter";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;

    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
`;

export const App = () => {
  return (
      <>
        <GlobalStyle/>
        <Header/>
        <Reasons/>
        <Modules/>
        <Form/>
        <Footer/>
        <Subfooter/>
      </>
  );
}
