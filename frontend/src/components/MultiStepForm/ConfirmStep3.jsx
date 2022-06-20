import React, { useEffect, useState } from "react";
import { Typography, TextField, Box, Button, Stack } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LoadingButton from "@mui/lab/LoadingButton";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeIcon from "@mui/icons-material/Badge";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContactsIcon from "@mui/icons-material/Contacts";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import LanguageIcon from "@mui/icons-material/Language";
import MosqueIcon from "@mui/icons-material/Mosque";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import BedIcon from "@mui/icons-material/Bed";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
const ConfirmStep3 = ({
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
  photo,
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
}) => {
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
      {" "}
      <Typography
        variant="h5"
        style={{ color: "#999", textAlign: "center", margin: "1rem" }}
      >
        {" "}
        Check Before Submit
      </Typography>
      <img
        className="photoPreview"
        src={URL.createObjectURL(photo)}
        alt={"User Image"}
        loading="lazy"
      />
      <Box
        sx={{
          border: 1,
          padding: 1,
          borderRadius: 2,
          borderColor: "grey.500",
          m: 1,
        }}
      >
        <Typography
          variant="h5"
          style={{
            color: "black",
            textAlign: "Start",
            fontSize: 15,
          }}
        >
          {" "}
          General Information
        </Typography>
        <Stack direction={{ xs: "row", md: "row" }} spacing={2}>
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            size="small"
            label="Batch"
            value={batchValue}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GroupsIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Department"
            value={deptValue}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SchoolIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Full Name"
            value={fullName}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BadgeIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Nick Name"
            value={nickName}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DriveFileRenameOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Phone Number"
            value={mobile}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIphoneIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="What's App"
            value={secondaryMobile}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WhatsAppIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Email Address"
            value={email}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Facebook ID"
            value={fbId ? fbId : "not given"}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FacebookIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          border: 1,
          padding: 1,
          borderRadius: 2,
          borderColor: "grey.500",
          m: 1,
        }}
      >
        <Typography
          variant="h5"
          style={{
            color: "black",
            textAlign: "Start",
            fontSize: 15,
          }}
        >
          {" "}
          Personal Information
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            size="small"
            label="Father's Name"
            value={fatherName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ContactsIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Mother's Name"
            value={motherName}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ContactsIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <TextField
          style={{ width: "100%", marginTop: "1rem" }}
          label="Address"
          rows={2}
          multiline
          value={`${streetAddress},${streetAddressLine2},${city},${state},${zipCode},${country}`}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HomeIcon />
              </InputAdornment>
            ),
          }}
        />
        <Stack direction={{ xs: "row", md: "row" }} spacing={2}>
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Date of Birth"
            value={dob}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Blood Group"
            value={bloodGroup}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BloodtypeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction={{ xs: "row", md: "row" }} spacing={2}>
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Nationality"
            value={nationality}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlagCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Religion"
            value={religion}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MosqueIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Emergency Contact"
            value={emergencyContact}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ContactPhoneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          border: 1,
          padding: 1,
          borderRadius: 2,
          borderColor: "grey.500",
          m: 1,
        }}
      >
        <Typography
          variant="h5"
          style={{
            color: "black",
            textAlign: "Start",
            fontSize: 15,
          }}
        >
          {" "}
          Other Information
        </Typography>

        <TextField
          style={{ width: "100%", marginTop: "1rem" }}
          size="small"
          label="Occupation"
          value={`${occupation}, ${designation},${companyName}`}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WorkIcon />
              </InputAdornment>
            ),
          }}
        />

        <Stack direction={{ xs: "row", md: "row" }} spacing={2}>
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Marital Status"
            value={maritalStatus}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            label="Hall Room Number"
            value={hallRoomNumber}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <TextField
          style={{ width: "100%", marginTop: "1rem" }}
          label="Wish Box"
          value={wishBox}
          multiline
          rows={3}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CardGiftcardIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
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
};

export default ConfirmStep3;
