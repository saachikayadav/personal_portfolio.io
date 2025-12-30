import React, { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import ChatAI from "./pages/ChatAI";
import Contact from "./pages/Contact";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "projects":
        return <Projects />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "chat":
        return <ChatAI />;
      case "contact":
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage} name={portfolioData.name}>
      {renderContent()}
    </Layout>
  );
}
