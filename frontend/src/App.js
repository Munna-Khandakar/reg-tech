import "./App.css";
import { Routes, Route } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import HomePage from "./pages/HomePage";
import ScrollTop from "./utils/ScrollTop";
function App() {
  return (
    <>
      <ScrollTop>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/form" element={<MultiStepForm />} />
        </Routes>
      </ScrollTop>
    </>
  );
}

export default App;
