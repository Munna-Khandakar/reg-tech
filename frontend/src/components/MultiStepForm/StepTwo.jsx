import React from "react";
import "./MultiStepForm.css";
import swal from "sweetalert";
import {
  Typography,
  TextField,
  Box,
  MenuItem,
  Stack,
  Button,
  FormControl,
  Input,
  InputAdornment,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import e from "cors";

const bloodGroups = [
  {
    value: "SELECT YOUR BLOOD GROUP",
    label: "SELECT YOUR BLOOD GROUP",
  },
  {
    value: "O+",
    label: "O+",
  },
  {
    value: "O-",
    label: "O-",
  },
  {
    value: "A+",
    label: "A+",
  },
  {
    value: "A-",
    label: "A-",
  },
  {
    value: "B+",
    label: "B+",
  },
  {
    value: "B-",
    label: "B-",
  },
  {
    value: "AB+",
    label: "AB+",
  },
  {
    value: "AB-",
    label: "AB-",
  },
];
function StepTwo({
  // nickName,
  // fullName,
  // setNickName,
  // setFullName,
  // photo,
  // setPhoto,
  fatherName,
  setFatherName,
  motherName,
  setMotherName,
  address,
  setAddress,
  city,
  setCity,
  streetAddress,
  streetAddressLine2,
  setStreetAddress,
  setStreetAddressLine2,
  zipCode,
  setZipCode,
  state,
  setState,
  setCountry,
  country,

  emergencyContact,
  setEmergencyContact,

  dob,
  setDob,
  bloodGroup,
  setBloodGroup,
  nationality,
  setNationality,
  religion,
  setReligion,
  handleNext,
  handlePrev,
}) {
  //const [bloodGroup, setBloodGroup] = React.useState("O+");
  return (
    <>
      <Stack direction="row">
        <div>
          <Box autoComplete="off">
            <Typography
              variant="h5"
              style={{ color: "#999", textAlign: "center", marginTop: "1rem" }}
            >
              Personal Information
            </Typography>
            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              placeholder="AS PER NID"
              label="FATHER'S NAME"
              required
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              variant="outlined"
            />
            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              placeholder="AS PER NID"
              label="MOTHER'S NAME"
              required
              value={motherName}
              onChange={(e) => setMotherName(e.target.value)}
              variant="outlined"
            />

            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              placeholder="IN CASE OF EMERGENCY"
              label="EMERGENCY CONTACT"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              variant="outlined"
            />
            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              label="Date of Birth"
              variant="outlined"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              //   sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              select
              required
              label="BLOOD GROUP"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              helperText="Please select your blood group"
            >
              {bloodGroups.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <TextField
                style={{ width: "100%" }}
                placeholder="AS PER NID"
                label="NATIONALITY"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                variant="outlined"
              />
              <TextField
                style={{ width: "100%" }}
                placeholder="Religion"
                label="RELIGION"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                variant="outlined"
              />
            </Stack>
          </Box>
          {/* address */}
          <Box autoComplete="off">
            <Typography
              variant="h5"
              style={{ color: "#999", textAlign: "center", marginTop: "1rem" }}
            >
              Address
            </Typography>
            {/* address */}
            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              placeholder="STREET ADDRESS"
              label="STREET ADDRESS"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              variant="outlined"
            />

            <TextField
              style={{ width: "100%", margin: "1rem 0" }}
              placeholder="STREET ADDRESS LINE 2"
              label="STREET ADDRESS LINE 2"
              value={streetAddressLine2}
              onChange={(e) => setStreetAddressLine2(e.target.value)}
              variant="outlined"
            />
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <TextField
                style={{ width: "100%" }}
                placeholder="CITY/UPZILLA"
                required
                label="CITY/UPZILLA"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                variant="outlined"
              />
              <TextField
                style={{ width: "100%" }}
                placeholder="STATE/PROVINCE/ZILLA"
                label="STATE/PROVINCE/ZILLA"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
                variant="outlined"
              />
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              marginTop="1rem"
            >
              <TextField
                style={{ width: "100%" }}
                placeholder="POSTAL/ZIP CODE"
                label="POSTAL/ZIP CODE"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                variant="outlined"
              />
              <TextField
                style={{ width: "100%" }}
                placeholder="COUNTRY"
                required
                label="COUNTRY"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                variant="outlined"
              />
            </Stack>
          </Box>
        </div>
        <div className="side-img">
          <img
            src="https://i.pinimg.com/originals/50/8f/11/508f1181449ccca9dc2f8f49afdc928b.gif"
            alt=""
            width="500"
            height="500"
          />
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
            // checking the requred fields
            if (fatherName === "") {
              return swal("", "Father's Name can't be empty ", "error");
            }
            if (motherName === "") {
              return swal("", "Mother's Name can't be empty ", "error");
            }
            if (bloodGroup === "SELECT YOUR BLOOD GROUP") {
              return swal("", "Please select blood group ", "error");
            }
            // if (streetAddress === "") {
            //   return swal("", "Street Address can't be empty ", "error");
            // }
            if (city === "") {
              return swal("", "City/Upzilla can't be empty ", "error");
            }
            if (state === "") {
              return swal("", "STATE/PROVINCE/ZILLA can't be empty ", "error");
            }
            // if (zipCode === "") {
            //   return swal("", "Zip Code can't be empty ", "error");
            // }
            if (country === "") {
              return swal("", "Country con't be empty ", "error");
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

export default StepTwo;
