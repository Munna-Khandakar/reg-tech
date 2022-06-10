import React from "react";
import { Typography, TextField, Box, Button, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function ConfirmStep({
  department,
  batch,
  nickName,
  fullName,
  mobile,
  fatherName,
  motherName,
  address,
  email,
  emergencyContact,
  fbId,
  dob,
  bloodGroup,
  nationality,
  religion,
  occupation,
  designation,
  companyName,
  maritalStatus,
  hallRoomNumber,
  wishBox,
  handlePrev,
}) {
  const [loading, setLoading] = React.useState(false);
  const off = () => {
    setLoading(false);
    alert("store to DB");
  };
  function handleClick() {
    setLoading(true);
    setTimeout(function () {
      off();
    }, 1000);
  }

  return (
    <>
      <Box autoComplete="off">
        <Typography
          variant="h5"
          style={{ color: "#999", textAlign: "center", marginTop: "1rem" }}
        >
          {" "}
          Check Before Submit
        </Typography>
        <Box autoComplete="off">
          <Typography
            variant="h6"
            style={{ color: "#999", start: "center", marginTop: "1rem" }}
          >
            General Information
          </Typography>
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Batch"
            value={batch}
            variant="filled"
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Department"
            variant="filled"
            value={department}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Full Name"
            variant="filled"
            value={fullName}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Nick Name"
            variant="filled"
            value={nickName}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Mobile"
            variant="filled"
            value={mobile}
            disabled
          />
        </Box>
        <Box autoComplete="off">
          <Typography
            variant="h6"
            style={{ color: "#999", start: "center", marginTop: "1rem" }}
          >
            Personal Information
          </Typography>
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Father's Name"
            variant="filled"
            value={fatherName}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Mother's Name"
            variant="filled"
            value={motherName}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Address"
            variant="filled"
            value={address}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Email"
            variant="filled"
            value={email}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Emergency Contact"
            variant="filled"
            value={emergencyContact}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="FB ID"
            variant="filled"
            value={fbId}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Date of Birth"
            variant="filled"
            value={dob}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Nationality"
            variant="filled"
            value={nationality}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Blood Group"
            variant="filled"
            value={bloodGroup}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Religion"
            variant="filled"
            value={religion}
            disabled
          />
        </Box>
        <Box autoComplete="off">
          <Typography
            variant="h6"
            style={{ color: "#999", start: "center", marginTop: "1rem" }}
          >
            Other Information
          </Typography>
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Occupation"
            variant="filled"
            value={occupation}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Designation"
            variant="filled"
            value={designation}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Company Name"
            variant="filled"
            value={companyName}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Marital Status"
            variant="filled"
            value={maritalStatus}
            disabled
          />

          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Hall Room Number"
            variant="filled"
            value={hallRoomNumber}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Wish Box"
            variant="filled"
            value={wishBox}
            disabled
          />
        </Box>

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
          <LoadingButton
            // onClick={handleClick}
            type="submit"
            loading={loading}
            loadingPosition="end"
            variant="contained"
            endIcon={<FileUploadIcon />}
          >
            Submit
          </LoadingButton>
        </Stack>
      </Box>
    </>
  );
}

export default ConfirmStep;
