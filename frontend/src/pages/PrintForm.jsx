import React, { useEffect, useState, useRef } from "react";
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
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import PrintIcon from "@mui/icons-material/Print";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function PrintForm() {
  //const [id, setId] = useState("62b69cd0c0d3a1419b8beb3d");
  const [user, setUser] = useState("");
  let { id } = useParams();

  //getting the user
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`/api/user/${id}`);
      const data = await res.json();
      console.log(data);
      setUser(data);
    };
    getUser();
  }, []);

  //   //getting the department value from department id
  //   useEffect(() => {
  //     const getDeptValue = async () => {
  //       const res = await fetch(`/api/departmentValue/${department}`);
  //       const data = await res.json();
  //       setDeptValue(data.label);
  //     };
  //     getDeptValue();
  //   }, []);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  let navigate = useNavigate();
  return (
    <>
      <Alert
        icon={false}
        severity="success"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <AlertTitle sx={{ fontSize: "1.5rem", textAlign: "center" }}>
          তথ্য জমা দেওয়ার জন্য ধন্যবাদ
        </AlertTitle>
        <strong>১ম পুনর্মিলনীর জন্য আপনার তথ্য সংরক্ষণ হয়ে গেছে </strong>
        <>(প্রয়োজনে প্রিন্ট করে রাখতে পারেন)</>
      </Alert>
      <div ref={componentRef}>
        <img
          className="photoPreview"
          src={user.photo}
          alt={"User Image"}
          loading="lazy"
        />
        <Box
          sx={{
            border: 1,
            padding: 2,
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
            General Information
          </Typography>
          <Stack direction={{ xs: "row", md: "row" }} spacing={2}>
            <TextField
              style={{ width: "100%", marginTop: "1rem" }}
              size="small"
              disabled
              label="Batch"
              value={user.batch && user.batch.label}
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
              disabled
              value={user.department && user.department.label}
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
              value={user.fullName}
              disabled
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
              value={user.nickName}
              disabled
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
              value={user.mobile}
              disabled
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
              value={user.secondaryMobile}
              disabled
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
              value={user.email}
              disabled
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
              value={user.fbId ? user.fbId : "not given"}
              disabled
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
            Personal Information
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <TextField
              style={{ width: "100%", marginTop: "1rem" }}
              size="small"
              label="Father's Name"
              disabled
              value={user.fatherName}
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
              value={user.motherName}
              disabled
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
            disabled
            multiline
            value={`${user.streetAddress},${user.streetAddressLine2},${user.city},${user.state},${user.zipCode},${user.country}`}
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
              value={user.dob}
              size="small"
              disabled
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
              value={user.bloodGroup}
              disabled
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
              disabled
              value={user.nationality}
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
              value={user.religion}
              disabled
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
              disabled
              value={user.emergencyContact}
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
            Other Information
          </Typography>

          <TextField
            style={{ width: "100%", marginTop: "1rem" }}
            size="small"
            label="Occupation"
            disabled
            value={`${user.occupation}, ${user.designation},${user.companyName}`}
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
              value={user.maritalStatus}
              disabled
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
              value={user.hallRoomNumber}
              disabled
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
            value={user.wishBox}
            disabled
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
      </div>
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
            startIcon={<HomeIcon />}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <LoadingButton
            onClick={handlePrint}
            // type="submit"
            //   loading={submitButtonLoading}
            //   disabled={submitButtonDisable}
            loadingPosition="end"
            variant="contained"
            endIcon={<PrintIcon />}
          >
            Print
          </LoadingButton>
        </Stack>
      </Box>
    </>
  );
}

export default PrintForm;
