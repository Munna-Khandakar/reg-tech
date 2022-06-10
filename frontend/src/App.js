import "./App.css";
import { Routes, Route } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MultiStepForm />} />
      </Routes>
    </>
  );
}

export default App;
