import LandingSection from "./components/LandingSec";
import Header from "./components/header";
import Footer from "./components/footer";
import WhatIDO from "./components/About";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/404/NotFound";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <ThemeProvider>
      <main className="font-Montserrat dark:bg-[#171C28] h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
};

export default App;
