import React, { useEffect, useState, useRef } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import swal from "sweetalert";
import axios from "axios";
import {
  Typography,
  TextField,
  Box,
  MenuItem,
  Button,
  Stack,
  InputAdornment,
  IconButton,
  Select,
  InputLabel,
  FormControl,
  Input,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SendIcon from "@mui/icons-material/Send";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import MuiPhoneNumber from "material-ui-phone-number";
function StepOne({
  varified,
  setVarified,
  session,
  setSession,
  faculty,
  setFaculty,
  batch,
  setBatch,
  department,
  setDepartment,
  mobile,
  setMobile,
  secondaryMobile,
  setSecondaryMobile,
  nickName,
  fullName,
  setNickName,
  setFullName,
  photo,
  setPhoto,
  email,
  setEmail,
  fbId,
  setFbId,
  handleNext,
  handlePrev,
}) {
  const [batches, setBatches] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [faculties, setfaculties] = useState([]);
  const [varifyButtonLoading, setVarifyButtonLoading] = useState(false);
  const [verifyButtonDisable, setVerifyButtonDisable] = useState(true);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [sendOTPButtonDisable, setSendOTPButtonDisable] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  //const selectDeptartmentRef = useRef();
  // getting all the batches
  useEffect(() => {
    const getBatches = async () => {
      const res = await fetch(`/api/batches`);
      const data = await res.json();
      setBatches(data);
    };
    getBatches();
  }, []);

  // useEffect(() => {
  //   console.log(departments);
  // }, [departments]);

  //getting all the departments
  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch(`/api/departments/${faculty}`);
      const data = await res.json();
      //  console.log(departments);
      // setMovies(prevMovies => ([...prevMovies, ...result]));
      setDepartments((p) => [...data]);
      //console.log(departments);
    };
    getDepartments();
  }, [faculty]);
  // getting faculty names
  useEffect(() => {
    const getFaculties = async () => {
      const res = await fetch(`/api/faculties`);
      const data = await res.json();
      setfaculties(data);
    };
    getFaculties();
  }, []);
  //verification handlers
  const verficationAlert = () => {
    swal("", "Oops.!Verify your phone number first", "error");
  };
  //count down timer for verficiation code resend...
  const wait3min = () => {
    setTimeout(() => {
      setSendOTPButtonDisable(false);
    }, 180000);
  };
  // console.log(mobile);
  // send otp code handler
  const sendVerficationCode = async () => {
    // checking the requred fields
    if (batch === "SELECT YOUR BATCH") {
      return swal("", "Please select your Batch ", "error");
    }
    if (department === "SELECT YOUR DEPARTMENT") {
      return swal("", "Please select your Department ", "error");
    }

    // mobile number modify
    let only_phone_number = 0;
    setVerificationLoading(true);
    const inputMobile = mobile;
    // check mobile number not empty
    if (!mobile) {
      setVerificationLoading(false);
      return swal(
        "",
        "Please provide phone number to send your verification code",
        "error"
      );
    }
    if (mobile) {
      // regualr expression checking to remove country code and extra spaces and dash
      only_phone_number = mobile.replace(/\D/g, "").slice(-11);
      //console.log(only_phone_number);
      if (only_phone_number.length !== 11) {
        setVerificationLoading(false);
        return swal(
          "",
          "Please provide valid phone number (BD number only)",
          "error"
        );
      }
    }
    // admin auto verify
    if (only_phone_number === "01711082532") {
      setSendOTPButtonDisable(true);
      setVerificationLoading(false);
      setVarified(true);
      return swal("", "being admin, verification passed", "warning");
    }
    // sending post req to server to send otp code
    //localhost:3000/api/sendOTP
    console.log("1");
    axios
      .post("/api/sendOTP", { phoneNo: only_phone_number })
      .then((result) => {
        if (result.data.success) {
          console.log(1);
          setVerifyButtonDisable(false);
          setVerificationLoading(false);
          setSendOTPButtonDisable(true);
          wait3min();
          return swal("", result.data.success, "success");
        }
        if (result.data.varified) {
          console.log(2);
          setSendOTPButtonDisable(true);
          setVerificationLoading(false);
          setVerifyButtonDisable(true);
          setVarified(true);
          return swal("", result.data.varified, "success");
        }
        if (result.data.error) {
          console.log(3);
          // console.log(result.data.error);
          setVerificationLoading(false);
          setSendOTPButtonDisable(false);
          return swal("", result.data.error, "error");
        }
      })
      .catch((err) => {
        console.log("2");
        console.log(err);
      });
  };

  const verifyOTP = async () => {
    setVarifyButtonLoading(true);
    // check otp code not empty
    if (!otpCode) {
      setVarifyButtonLoading(false);
      return swal("", "OTP code can't be empty", "error");
    }
    let phone_number = mobile.replace(/\D/g, "").slice(-11);
    axios
      .put("/api/verifyOTP", { otp: otpCode, mobile: phone_number })
      .then((result) => {
        if (result.data.varified) {
          setVarifyButtonLoading(false);
          setVerifyButtonDisable(true);
          setVarified(true);
          return swal("", result.data.varified, "success");
        }
        if (result.data.notVarified) {
          setVarifyButtonLoading(false);
          setVerifyButtonDisable(false);
          setVarified(false);
          return swal("", result.data.notVarified, "error");
        }

        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Stack direction="row">
      <div className="side-img">
        <img
          src="https://images.squarespace-cdn.com/content/v1/58e37e5d414fb535a41970bd/1492049376666-0BJN899MUFN63HNSBXEW/ke17ZwdGBToddI8pDm48kI1dxkzCdoaQDevnVA9R4g1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyKi-oUoBVevRLtXFipgGDcIiZgSYdrptGW3-0WE_JDnWAg8j-9wbE7_h7uxkrF2Ds/Comm_1.gif"
          alt=""
          width="500"
          height="500"
        />
      </div>

      <div>
        <Box autoComplete="off">
          <Typography
            variant="h5"
            style={{ color: "#999", textAlign: "center", marginTop: "1rem" }}
          >
            {" "}
            General Information
          </Typography>
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            select
            required
            label="BATCH"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            helperText="Please select your batch"
          >
            <MenuItem key="SELECT YOUR BATCH" value="SELECT YOUR BATCH">
              SELECT YOUR BATCH
            </MenuItem>
            {batches.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            select
            required
            label="FACULTY"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            helperText="Please select your faculty"
          >
            <MenuItem key="SELECT YOUR FACULTY" value="SELECT YOUR FACULTY">
              SELECT YOUR FACULTY
            </MenuItem>
            {faculties.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            required
            select
            label="DEPARTMENT"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            helperText="Please select your department"
          >
            <MenuItem
              key="SELECT YOUR DEPARTMENT"
              value="SELECT YOUR DEPARTMENT"
            >
              SELECT YOUR DEPARTMENT
            </MenuItem>
            {departments.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="AS PER NID"
            label="FULL NAME"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            variant="outlined"
            required
          />
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="KNOWN NAME IN CAMPUS"
            label="NICK NAME"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            variant="outlined"
            required
          />
          <div className="photoBox">
            PHOTO *
            <Input
              style={{
                width: "100%",
                margin: "1rem 0",
                border: "1 solid black",
              }}
              name="photo"
              label="PHOTO"
              // value={photo}
              onChange={(e) => setPhoto(e.target.files[0])}
              variant="outlined"
              accept="image/*"
              type="file"
              required
            />
          </div>

          <PhoneInput
            className="phoneInputBox"
            placeholder="YOUR ACTIVE PHONE NUMBER"
            defaultCountry="BD"
            value={mobile}
            onChange={setMobile}
          />

          {/* <TextField
          style={{ width: "100%", margin: "1rem 0" }}
          placeholder="YOUR ACTIVE PHONE NUMBER"
          label="PHONE"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          variant="outlined"
          required
        /> */}
          <PhoneInput
            className="phoneInputBox"
            placeholder="SECONDARY PHONE NUMBER"
            defaultCountry="BD"
            value={secondaryMobile}
            onChange={setSecondaryMobile}
          />

          {/* <TextField
          style={{ width: "100%", margin: "1rem 0" }}
          placeholder=" SECONDARY PHONE NUMBER"
          label="SECONDARY PHONE"
          value={secondaryMobile}
          onChange={(e) => setSecondaryMobile(e.target.value)}
          variant="outlined"
        /> */}
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="YOUR ACTIVE EMAIL"
            label="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            placeholder="IF ANY"
            label="FB ID"
            value={fbId}
            onChange={(e) => setFbId(e.target.value)}
            variant="outlined"
          />

          {/* <TextField
          style={{ width: "100%", margin: "1rem 0" }}
          type="number"
          value={otpCode}
          onChange={(e) => setOtpCode(e.target.value)}
          placeholder="YOUR OTP CODE"
          label="OTP"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" color="primary">
                  <LoadingButton
                    loading={varifyButtonLoading}
                    disabled={verifyButtonDisable}
                    onClick={verifyOTP}
                    loadingPosition="end"
                    variant="contained"
                    endIcon={<HowToRegIcon />}
                  >
                    Verify
                  </LoadingButton>
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}
        </Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          m={2}
        >
          {varified ? (
            <Button
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
              onClick={() => {
                // checking the requred fields
                if (batch === "SELECT YOUR BATCH") {
                  return swal("", "Please select your Batch ", "error");
                }
                if (faculty === "SELECT YOUR FACULTY") {
                  return swal("", "Please select your faculty ", "error");
                }
                if (department === "SELECT YOUR DEPARTMENT") {
                  return swal("", "Please select your Department ", "error");
                }
                if (fullName === "") {
                  return swal("", "Full Name can't be empty ", "error");
                }
                if (nickName === "") {
                  return swal("", "Nick Name can't be empty ", "error");
                }
                if (photo === "") {
                  return swal("", "You must upload your photo ", "error");
                }
                if (mobile === "") {
                  return swal("", "Phone number can't be empty ", "error");
                }
                handleNext();
              }}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIosIcon />}
              onClick={() => verficationAlert()}
            >
              Next
            </Button>
          )}
        </Stack>
      </div>
    </Stack>
  );
}

export default StepOne;
