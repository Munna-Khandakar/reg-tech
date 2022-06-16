import React, { useState } from "react";
import { Typography, Checkbox, Box, Paper, Stack, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import swal from "sweetalert";
import Attention from "../../attention.gif";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
function StartPage({ handleNext, handlePrev }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  return (
    <div>
      <Box
        autoComplete="off"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Typography
          variant="h5"
          style={{ color: "#999", textAlign: "center", marginTop: "1rem" }}
        >
          {" "}
          Personal Information
        </Typography>
        <Typography variant="h2">Attenntation</Typography> */}
        <img src={Attention} alt="loading..." height={250} width={250} />
        <Typography variant="h2">ATTENTION</Typography>
      </Box>
      <Box
        autoComplete="off"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <FormGroup>
          <FormControlLabel
            value={check1}
            onChange={(e) => setCheck1(e.target.checked)}
            control={<Checkbox color="secondary" />}
            label="Phone Number Needs To Be Accurate"
          />
          <FormControlLabel
            value={check2}
            onChange={(e) => setCheck2(e.target.checked)}
            control={<Checkbox color="success" />}
            label="All Required Filed Needs To Be Complated"
          />
        </FormGroup>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        m={2}
      >
        <Button
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => {
            if (check1 === false && check2 === false) {
              return swal("", "You have to aggree to the conditions", "error");
            }

            handleNext();
          }}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
}

export default StartPage;
