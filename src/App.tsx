import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import axios from "axios";
import Header from "./components/common/Header/Header";
import Results from "./components/Results/Results";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <div className="bg-slate-50">
      <Header />
      <div className="container m-auto shadow-md">
        <Results />
      </div>
      <Footer />
    </div>
  );
}

export default App;
