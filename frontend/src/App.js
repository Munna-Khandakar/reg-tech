import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import HomePage from "./pages/HomePage";
import ScrollTop from "./utils/ScrollTop";
import UserPage2 from "./pages/UserPage2";
import PrintForm from "./pages/PrintForm";
import ExportUserPage from "./pages/ExportUserPage";
import ViewFilteredUser from "./pages/ViewFilteredUser";
import LoginPage from "./pages/LoginPage";
import ReunionRegistrationPage from "./pages/ReunionRegistrationPage";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PageTwo from "./components/ReunionForm/PageTwo";
import { useEffect } from "react";
import PageThree from "./components/ReunionForm/PageThree";
import PageFour from "./components/ReunionForm/PageFour";
import HelpPage from "./pages/HelpPage";
import ReunionUsersPage from "./pages/ReunionUsersPage";
import ReunionFilterUserviewPage from "./pages/ReunionFilterUserviewPage";
import ReunionAllUsers from "./pages/ReunionAllUsers";
const theme = createTheme({
  palette: {
    primary: {
      main: "#497174",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/form" element={<MultiStepForm />} />
          <Route exact path="/export-users" element={<ExportUserPage />} />
          <Route exact path="/users" element={<UserPage2 />} />
          <Route exact path="/print/:id" element={<PrintForm />} />
          <Route
            path="/registration/reunion"
            element={<ReunionRegistrationPage />}
          />
          <Route exact path="/reunion/users" element={<ReunionAllUsers />} />
          <Route path="/registration/reunion/:mobile" element={<PageTwo />} />
          <Route path="/reunion/confirm/:id" element={<PageThree />} />
          <Route path="/reunion/payment/:id" element={<PageFour />} />
          <Route
            exact
            path="/reunion/view/:filter/:id"
            element={<ReunionFilterUserviewPage />}
          />
          <Route
            exact
            path="/reunion/export-users"
            element={<ReunionUsersPage />}
          />
          <Route
            exact
            path="/view/:filter/:id"
            element={<ViewFilteredUser />}
          />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
