import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";

import { theme } from "./globalStyles/theme";
import { GlobalStyle } from "./globalStyles/global.styles";

// import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.component";

import "./App.css";
import Contact from "./pages/contact/contact.component";
import Register from "./pages/register/register.component";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <Header /> */}
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
