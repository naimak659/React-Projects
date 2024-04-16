import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import Main from "./components/Main";
// import Main from "./components/main.jsx";
// import { DatePickerDemo } from "./components/DatePickerDemo";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Navbar />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
