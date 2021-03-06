import React from "react";
import {
  Typography,
  TextField,
  Box,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import swal from "sweetalert";
const marital = [
  {
    value: "MARRIED",
    label: "MARRIED",
  },
  {
    value: "UNMARRIED",
    label: "UNMARRIED",
  },
];
function StepThree({
  occupation,
  setOccupation,
  designation,
  setDesignation,
  companyName,
  setCompanyName,
  maritalStatus,
  setMaritalStatus,
  hallRoomNumber,
  setHallRoomNumber,
  wishBox,
  setWishBox,
  handleNext,
  handlePrev,
}) {
  return (
    <>
      <Stack direction="row">
        <div className="side-img">
          <img
            src="https://static.wixstatic.com/media/b1270a_8a4a9f75efc74bd58c000d85f9df9514~mv2.gif"
            alt=""
            width="500"
            height="500"
          />
        </div>
        <div>
          <Box autoComplete="off">
            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              placeholder="YOUR CURRENT OCCUPATION"
              label="OCCUPATION"
              value={occupation}
              required
              onChange={(e) => setOccupation(e.target.value)}
              variant="outlined"
            />
            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              placeholder="YOUR CURRENT DESIGNATION"
              label="DESIGNATION"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              variant="outlined"
            />
            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              placeholder="NAME OF YOUR COMPANY"
              label="COMPANY NAME"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              variant="outlined"
            />

            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              select
              label="MARITAL STATUS"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              helperText="Please select your marital status"
            >
              {marital.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              placeholder="IF ANY"
              label="HALL ROOM NUMBERS"
              value={hallRoomNumber}
              onChange={(e) => setHallRoomNumber(e.target.value)}
              variant="outlined"
            />

            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              placeholder="Wish for Hall/University/Event"
              label="WISH BOX"
              multiline
              rows={4}
              required
              value={wishBox}
              onChange={(e) => setWishBox(e.target.value)}
              variant="outlined"
            />
          </Box>
        </div>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        m={2}
      >
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => handlePrev()}
        >
          Back
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => {
            if (occupation === "") {
              return swal("", "Occupation can't be empty ", "error");
            }

            if (wishBox === "") {
              return swal("", "Wish box can't be empty ", "error");
            }
            handleNext();
          }}
        >
          Next
        </Button>
      </Stack>
    </>
  );
}

export default StepThree;
