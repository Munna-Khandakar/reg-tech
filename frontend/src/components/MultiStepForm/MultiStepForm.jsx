import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Stack } from "@mui/material";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import "./MultiStepForm.css";
import ConfirmStep from "./ConfirmStep";
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
  const [batch, setBatch] = useState("629f57014ec05218c79a9cb7");
  const [department, setDepartment] = useState("629ed250309c4cade48d35b4");
  const [fullName, setFullName] = useState("");
  const [nickName, setNickName] = useState("");
  const [mobile, setMobile] = useState("");

  //step 2
  const [fatherName, setFatherName] = useState("");
  const [photo, setPhoto] = useState("");
  const [motherName, setMotherName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [fbId, setFbId] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [bloodGroup, setBloodGroup] = useState("O+");
  const [religion, setReligion] = useState("");

  //step 3
  const [occupation, setOccupation] = useState("");
  const [designation, setDesignation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("UNMARRIED");
  const [hallRoomNumer, setHallRoomNumber] = useState("");
  const [wishBox, setWishBox] = useState("");

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
      case 0:
        return (
          <StepOne
            session={session}
            setSession={setSession}
            batch={batch}
            setBatch={setBatch}
            department={department}
            setDepartment={setDepartment}
            mobile={mobile}
            setMobile={setMobile}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 1:
        return (
          <StepTwo
            fullName={fullName}
            setFullName={setFullName}
            nickName={nickName}
            setNickName={setNickName}
            photo={photo}
            setPhoto={setPhoto}
            fatherName={fatherName}
            setFatherName={setFatherName}
            motherName={motherName}
            setMotherName={setMotherName}
            address={address}
            setAddress={setAddress}
            email={email}
            setEmail={setEmail}
            emergencyContact={emergencyContact}
            setEmergencyContact={setEmergencyContact}
            fbId={fbId}
            setFbId={setFbId}
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
            hallRoomNumer={hallRoomNumer}
            setHallRoomNumber={setHallRoomNumber}
            wishBox={wishBox}
            setWishBox={setWishBox}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      // case 3:
      //   return (
      //     <>
      //       {dob}
      //       {fbId}
      //     </>
      //   );
      default:
        return "Finish";
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first");
    console.log(photo);
    const formData = new FormData();
    //step 1
    formData.append("batch", batch);
    formData.append("department", department);
    formData.append("mobile", mobile);

    //step 2
    formData.append("fullName", fullName);
    formData.append("nickName", nickName);
    formData.append("photo", photo);
    formData.append("fatherName", fatherName);
    formData.append("motherName", motherName);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("emergencyContact", emergencyContact);
    formData.append("fbId", fbId);
    formData.append("dob", dob);
    formData.append("nationality", nationality);
    formData.append("bloodGroup", bloodGroup);
    formData.append("religion", religion);

    //step 3
    formData.append("occupation", occupation);
    formData.append("designation", designation);
    formData.append("companyName", companyName);
    formData.append("maritalStatus", maritalStatus);
    formData.append("hallRoomNumer", hallRoomNumer);
    formData.append("wishBox", wishBox);

    //submit form
    axios
      .post("/api/registration", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
          <ConfirmStep
            session={session}
            batch={batch}
            department={department}
            mobile={mobile}
            fullName={fullName}
            nickName={nickName}
            fatherName={fatherName}
            motherName={motherName}
            address={address}
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
            hallRoomNumer={hallRoomNumer}
            wishBox={wishBox}
            handlePrev={handlePrev}
          />
        ) : (
          <>{getStepContent(activeState)}</>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
