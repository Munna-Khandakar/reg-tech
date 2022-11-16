import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function PageOne({ mobile, setMobile, nextStep }) {
  let navigate = useNavigate();

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
        <p style={{ margin: "2rem 0", fontSize: "2rem", textAlign: "center" }}>
          Please start submitting your information for the upcoming reunion.
          This information will remain safe and only used for reunion purpose
          only.
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            marginBottom: "1rem",
          }}
        >
          <TextField
            fullWidth
            label="Mobile Number"
            placeholder="+8801XXXXXXXXX"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </Box>
        <Button
          variant="contained"
          endIcon={<NavigateNextIcon />}
          onClick={nextStep}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default PageOne;
