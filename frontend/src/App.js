import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import HomePage from "./pages/HomePage";
import ScrollTop from "./utils/ScrollTop";
import UserPage2 from "./pages/UserPage2";
import PrintForm from "./pages/PrintForm";
import ExportUserPage from "./pages/ExportUserPage";
import ViewFilteredUser from "./pages/ViewFilteredUser";
function App() {
  return (
    <>
      <ScrollTop>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/form" element={<MultiStepForm />} />
          <Route exact path="/export-users" element={<ExportUserPage />} />
          <Route exact path="/users" element={<UserPage2 />} />
          <Route exact path="/print/:id" element={<PrintForm />} />
          <Route
            exact
            path="/view/:filter/:id"
            element={<ViewFilteredUser />}
          />
        </Routes>
      </ScrollTop>
    </>
  );
}

export default App;
