import "./App.css";
import { Routes, Route } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/form" element={<MultiStepForm />} />
      </Routes>
    </>
  );
}

export default App;
