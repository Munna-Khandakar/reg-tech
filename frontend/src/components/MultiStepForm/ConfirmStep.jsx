import React, { useEffect, useState } from "react";
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
  secondaryMobile,
  fatherName,
  motherName,
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
  submitButtonDisable,
  submitButtonLoading,
}) {
  const [batchValue, setBatchValue] = useState("");
  const [deptValue, setDeptValue] = useState("");
  //getting the batch value from batch id
  useEffect(() => {
    const getBatchValue = async () => {
      const res = await fetch(`/api/batchValue/${batch}`);
      const data = await res.json();
      //console.log(data.label);
      setBatchValue(data.label);
    };
    getBatchValue();
  }, []);

  //getting the department value from department id
  useEffect(() => {
    const getDeptValue = async () => {
      const res = await fetch(`/api/departmentValue/${department}`);
      const data = await res.json();
      setDeptValue(data.label);
    };
    getDeptValue();
  }, []);

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
            value={batchValue}
            variant="filled"
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Department"
            variant="filled"
            value={deptValue}
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
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Secondary Mobile"
            variant="filled"
            value={secondaryMobile}
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
            label="FB ID"
            variant="filled"
            value={fbId}
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
            label="Street Address"
            variant="filled"
            value={streetAddress}
            disabled
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Street Address Line 2"
            variant="filled"
            value={streetAddressLine2}
            disabled
          />

          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="City"
            variant="filled"
            value={city}
            disabled
          />

          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="State"
            variant="filled"
            value={state}
            disabled
          />

          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="ZIp Code"
            variant="filled"
            value={zipCode}
            disabled
          />

          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Country"
            variant="filled"
            value={country}
            disabled
          />

          {/* <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Address"
            variant="filled"
            value={address}
            disabled
          /> */}

          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Emergency Contact"
            variant="filled"
            value={emergencyContact}
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
            loading={submitButtonLoading}
            disabled={submitButtonDisable}
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
