import "./App.css";
import Header from "./components/Header";
import About from "./components/About Me";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import FurtherTrainings from "./components/FurtherTrainings";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Certificates />
        <FurtherTrainings />
        <Contact />
      </main>
    </>
  );
}

export default App;
