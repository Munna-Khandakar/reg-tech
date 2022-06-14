import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Stack } from "@mui/material";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import "./MultiStepForm.css";
import swal from "sweetalert";
import ConfirmStep from "./ConfirmStep";
const useStyles = makeStyles({
  root: {
    width: "60%",
    margin: " 6rem auto",
    padding: "1.5rem",
    border: "1px solid #999",
  },
});

const show = () => {
  swal({
    title: "Are you sure?",
    text: "Congratulations, your form saved successfully..!",
    icon: "success",
    buttons: true,
    dangerMode: false,
  }).then((willDelete) => {
    if (willDelete) {
      window.location.reload();
    } else {
      window.location.reload();
    }
  });
};

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
  const [varified, setVarified] = useState(false);

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
            hallRoomNumber={hallRoomNumber}
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
    setSubmitButtonLoading(true);
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
    formData.append("hallRoomNumber", hallRoomNumber);
    formData.append("wishBox", wishBox);

    //submit form
    axios
      .post("/api/registration", formData)
      .then((res) => {
        setSubmitButtonLoading(false);
        setSubmitButtonDisable(true);
        swal({
          title: "Congratulations",
          text: "Your form saved successfully..!",
          icon: "success",
          buttons: true,
          dangerMode: false,
        }).then((willDelete) => {
          if (willDelete) {
            window.location.reload();
          } else {
            window.location.reload();
          }
        });
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
  );
};

export default MultiStepForm;
