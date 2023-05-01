import "./App.css";
import { FormDataComp } from "./components/FormDataComp";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="app">
      <div className="app__navBar">
        <img src={logo} alt="logo" />
      </div>
      <div className="app__main">
        <div className="app__main_formWrapper">
          <FormDataComp />
        </div>

        <div className="app__main_imgWrapper"></div>
      </div>
      <div>
        <div>
          <a href="https://www.nett-treff.com/c3RhdGljUGFnZS9wcml2YWN5cG9saWN5bmV0dC10cmVmZi5jb20=">
            Privacy Policy
          </a>
          <a href="https://www.nett-treff.com/c3RhdGljUGFnZS90ZXJtc25ldHQtdHJlZmYuY29t">
            Terms of Use
          </a>
          <a href="https://www.nett-treff.com/c3RhdGljUGFnZS90ZXJtcz9odG1sPXNhZmVkYXRpbmduZXR0LXRyZWZmLmNvbQ==">
            Safe Dating
          </a>
          <a href="https://www.nett-treff.com/support/contactUs">Contact Us</a>
        </div>
        <span>© Copyright 2023, Kaleton Web s.r.o.</span>
      </div>
    </div>
  );
}

export default App;
