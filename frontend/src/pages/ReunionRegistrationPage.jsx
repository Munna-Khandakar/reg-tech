import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { COLORS } from "../utils/Colors";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PageOne from "../components/ReunionForm/PageOne";
import { useState } from "react";
import PageTwo from "../components/ReunionForm/PageTwo";

function ReunionRegistrationPage() {
  let navigate = useNavigate();

  const [mobile, setMobile] = useState("+8801");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "1000px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            margin: "2rem 0",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          Please start submitting your information for the upcoming reunion.
          This information will remain safe and only used for reunion purpose
          only.
        </p>

        <TextField
          fullWidth
          label="Mobile Number"
          placeholder="+8801XXXXXXXXX"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <Button
          variant="contained"
          endIcon={<NavigateNextIcon />}
          onClick={() => navigate(`/registration/reunion/${mobile}`)}
          sx={{ marginTop: "2rem" }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default ReunionRegistrationPage;
