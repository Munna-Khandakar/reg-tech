import React, { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Button, Stack } from "@mui/material";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import "./MultiStepForm.css";
import swal from "sweetalert";
import ConfirmStep3 from "./ConfirmStep3";
import ConfirmStep2 from "./ConfirmStep2";
import ConfirmStep from "./ConfirmStep";
import StartPage from "./StartPage";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "60%",
    margin: " 6rem auto",
    padding: "1.5rem",
    border: "1px solid #999",
  },
});

function getSteps() {
  return ["GENERAL INFORMATION", "PERSONAL INFORMATION", "OTHER INFORMATION"];
}
const steps = getSteps();

const MultiStepForm = () => {
  //step 1
  const [activeState, setActiveState] = useState(0);
  const [session, setSession] = useState("629f55ace83ec7fb1d7cdec4");
  const [batch, setBatch] = useState("SELECT YOUR BATCH");
  const [department, setDepartment] = useState("SELECT YOUR DEPARTMENT");
  const [faculty, setFaculty] = useState("SELECT YOUR FACULTY");
  const [fullName, setFullName] = useState("");
  const [nickName, setNickName] = useState("");
  const [mobile, setMobile] = useState("");
  const [secondaryMobile, setSecondaryMobile] = useState("");
  const [varified, setVarified] = useState(true);

  //step 2
  const [fatherName, setFatherName] = useState("");
  const [photo, setPhoto] = useState("");
  const [motherName, setMotherName] = useState("");
  const [address, setAddress] = useState();
  const [streetAddress, setStreetAddress] = useState("");
  const [streetAddressLine2, setStreetAddressLine2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [fbId, setFbId] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [bloodGroup, setBloodGroup] = useState("SELECT YOUR BLOOD GROUP");
  const [religion, setReligion] = useState("");

  //step 3
  const [occupation, setOccupation] = useState("");
  const [designation, setDesignation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("MARRIED");
  const [hallRoomNumber, setHallRoomNumber] = useState("");
  const [wishBox, setWishBox] = useState("");

  // confirm step
  const [submitButtonLoading, setSubmitButtonLoading] = React.useState(false);
  const [submitButtonDisable, setSubmitButtonDisable] = React.useState(false);

  // move to top..
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeState]);

  // react navigator
  let navigate = useNavigate();
  const handleNext = () => {
    setActiveState((previousState) => previousState + 1);
  };
  const handlePrev = () => {
    setActiveState((previousState) => previousState - 1);
  };
  const classes = useStyles();
  // forms
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case -1:
        return <StartPage handleNext={handleNext} />;
      case 0:
        return (
          <StepOne
            varified={varified}
            setVarified={setVarified}
            session={session}
            setSession={setSession}
            batch={batch}
            setBatch={setBatch}
            department={department}
            setDepartment={setDepartment}
            mobile={mobile}
            faculty={faculty}
            setFaculty={setFaculty}
            setMobile={setMobile}
            secondaryMobile={secondaryMobile}
            setSecondaryMobile={setSecondaryMobile}
            fullName={fullName}
            setFullName={setFullName}
            nickName={nickName}
            setNickName={setNickName}
            photo={photo}
            setPhoto={setPhoto}
            email={email}
            setEmail={setEmail}
            fbId={fbId}
            setFbId={setFbId}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 1:
        return (
          <StepTwo
            fatherName={fatherName}
            setFatherName={setFatherName}
            motherName={motherName}
            setMotherName={setMotherName}
            address={address}
            setAddress={setAddress}
            city={city}
            setCity={setCity}
            streetAddress={streetAddress}
            streetAddressLine2={streetAddressLine2}
            setStreetAddress={setStreetAddress}
            setStreetAddressLine2={setStreetAddressLine2}
            zipCode={zipCode}
            setZipCode={setZipCode}
            state={state}
            setState={setState}
            setCountry={setCountry}
            country={country}
            emergencyContact={emergencyContact}
            setEmergencyContact={setEmergencyContact}
            dob={dob}
            setDob={setDob}
            nationality={nationality}
            setNationality={setNationality}
            bloodGroup={bloodGroup}
            setBloodGroup={setBloodGroup}
            religion={religion}
            setReligion={setReligion}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 2:
        return (
          <StepThree
            occupation={occupation}
            setOccupation={setOccupation}
            designation={designation}
            setDesignation={setDesignation}
            companyName={companyName}
            setCompanyName={setCompanyName}
            maritalStatus={maritalStatus}
            setMaritalStatus={setMaritalStatus}
            hallRoomNumber={hallRoomNumber}
            setHallRoomNumber={setHallRoomNumber}
            wishBox={wishBox}
            setWishBox={setWishBox}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      default:
        return "Finish";
    }
  }
  const successMessageHandler = (msg) => {
    setSubmitButtonLoading(false);
    setSubmitButtonDisable(true);
    navigate(`/print/${msg}`);
    // swal({
    //   title: "Congratulations",
    //   text: msg,
    //   icon: "success",
    //   // buttons: true,
    //   dangerMode: false,
    // }).then((value) => {
    //   if (value) {
    //     navigate("/", { replace: true });
    //   } else {
    //     navigate("/", { replace: true });
    //   }
    // });
  };
  const errorMessageHandle = (msg) => {
    setSubmitButtonLoading(false);
    setSubmitButtonDisable(false);
    return swal("", msg, "error");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitButtonLoading(true);
    const formData = new FormData();
    //step 1
    formData.append("batch", batch);
    formData.append("department", department);
    formData.append("faculty", faculty);
    formData.append("mobile", mobile);
    formData.append("secondaryMobile", secondaryMobile);
    formData.append("fullName", fullName);
    formData.append("nickName", nickName);
    formData.append("photo", photo);
    formData.append("email", email);
    formData.append("fbId", fbId);
    //step 2

    formData.append("fatherName", fatherName);
    formData.append("motherName", motherName);
    formData.append("streetAddress", streetAddress);
    formData.append("streetAddressLine2", streetAddressLine2);
    formData.append("city", city);
    formData.append("zipCode", zipCode);
    formData.append("state", state);
    formData.append("country", country);

    formData.append("emergencyContact", emergencyContact);

    formData.append("dob", dob);
    formData.append("nationality", nationality);
    formData.append("bloodGroup", bloodGroup);
    formData.append("religion", religion);

    //step 3
    formData.append("occupation", occupation);
    formData.append("designation", designation);
    formData.append("companyName", companyName);
    formData.append("maritalStatus", maritalStatus);
    formData.append("hallRoomNumber", hallRoomNumber);
    formData.append("wishBox", wishBox);
    console.log(formData);
    //submit form
    axios
      .post("/api/registration", formData)
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          errorMessageHandle(res.data.error);
        }
        if (res.data.success) {
          successMessageHandler(res.data.success);
        }
        // else {
        //   console.log("succcess");
        //   successMessageHandler();
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="cover-bg">
        {/* <img
          src="https://eng.campuslive24.com/uploads/shares/2021/JU-2022-02-20-19-22-56.jpg"
          alt="JU"
        /> */}

        <div className="multiStepForm">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Stepper alternativeLabel activeStep={activeState}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeState == steps.length ? (
              <ConfirmStep3
                session={session}
                batch={batch}
                department={department}
                mobile={mobile}
                secondaryMobile={secondaryMobile}
                fullName={fullName}
                nickName={nickName}
                photo={photo}
                fatherName={fatherName}
                motherName={motherName}
                address={address}
                city={city}
                setCity={setCity}
                streetAddress={streetAddress}
                streetAddressLine2={streetAddressLine2}
                setStreetAddress={setStreetAddress}
                setStreetAddressLine2={setStreetAddressLine2}
                zipCode={zipCode}
                setZipCode={setZipCode}
                state={state}
                setState={setState}
                setCountry={setCountry}
                country={country}
                email={email}
                emergencyContact={emergencyContact}
                fbId={fbId}
                dob={dob}
                nationality={nationality}
                bloodGroup={bloodGroup}
                religion={religion}
                occupation={occupation}
                designation={designation}
                companyName={companyName}
                maritalStatus={maritalStatus}
                hallRoomNumber={hallRoomNumber}
                wishBox={wishBox}
                handlePrev={handlePrev}
                submitButtonDisable={submitButtonDisable}
                setSubmitButtonDisable={setSubmitButtonDisable}
                submitButtonLoading={submitButtonLoading}
                setSubmitButtonLoading={setSubmitButtonLoading}
              />
            ) : (
              <>{getStepContent(activeState)}</>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
