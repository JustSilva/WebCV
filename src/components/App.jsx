import React from "react";
import Introduction from "./Introduction";
import Skills from "./Skills";
import TopDiv from "./TopDiv";
import Footer from "./Footer";
import Contact from "./Contact";
import Header from "./Header";
import Projects from "./Projects";

function App() {
   return <div>
       <Header />
       <TopDiv />
       <Introduction />
       <Skills />
        <Projects />
       <Contact />
       <Footer />
    </div>
}

export default App;