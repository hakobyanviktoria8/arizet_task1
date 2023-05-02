import "./App.css";
import { FormDataComp } from "./components/formComp/FormDataComp";
import { Footer } from "./components/Footer";
import { ImgWrapper } from "./components/ImgWrapper";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />

      <div className="app__main">
        <div className="app__main_formWrapper">
          <FormDataComp />
        </div>

        <ImgWrapper />
      </div>

      <Footer />
    </div>
  );
}

export default App;
