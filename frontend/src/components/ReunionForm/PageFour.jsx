import { Box, Button, MenuItem, TextField, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import axios from "axios";
import swal from "sweetalert";
import LoadingButton from "@mui/lab/LoadingButton";
import { COLORS } from "../../utils/Colors";

function PageFour() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [storedValue, setStoredValue] = useState();
  const [ownCost, setOwnCost] = useState(0);
  const [guestCost, setguestCost] = useState(0);
  // confirm step
  const [submitButtonLoading, setSubmitButtonLoading] = useState(false);
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // get all information for mobile
  useEffect(() => {
    const getDetails = async () => {
      const res = await fetch(`/api/reunion/id/${id}`);
      const data = await res.json();
      setStoredValue(data);
      try {
        let batch = await getBatchName(data.batch._id);
        determineAlumniCost(batch);
        let t = 0;
        data.guest.map((item) => {
          if (item.guestType == "Wife") {
            t = t + 700;
          }
          if (item.guestType == "Kids") {
            t = t + 700;
          }
          if (item.guestType == "Guest") {
            t = t + 700;
          }
        });
        setguestCost(t);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, []);

  const getBatchName = async (id) => {
    const res = await fetch(`/api/batchValue/${id}`);
    const data = await res.json();
    return parseInt(data.label);
  };

  const determineAlumniCost = (batch) => {
    if (typeof batch !== "number") {
      if (batch.split(" ")[1] > 20 && batch.split(" ")[1] < 36)
        setOwnCost(2000);
      if (batch.split(" ")[1] > 35 && batch.split(" ")[1] < 41)
        setOwnCost(1500);
      if (batch.split(" ")[1] > 40) setOwnCost(500);
    } else {
      if (batch > 20 && batch < 36) setOwnCost(2000);
      if (batch > 35 && batch < 41) setOwnCost(1500);
      if (batch > 40) setOwnCost(500);
    }
  };

  const guestType = [
    { value: "Wife", cost: 1000 },
    { value: "Children", cost: 500 },
    { value: "Driver", cost: 800 },
  ];

  const successMessageHandler = (msg) => {
    // setSubmitButtonLoading(false);
    // setSubmitButtonDisable(true);
    // navigate(`/reunion/confirm/${msg}`);
  };

  const errorMessageHandle = (msg) => {
    setSubmitButtonLoading(false);
    setSubmitButtonDisable(false);
    return swal("", msg, "error");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmitButtonLoading(true);

    // axios
    //   .put("/api/reunion/registration", storedValue)
    //   .then((res) => {
    //     window.location.reload(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     errorMessageHandle(err);
    //   });
  };

  const procedeToPayment = () => {
    navigate(`/reunion/payment/${id}`);
  };

  const RowForBatch = ({ batch, cost }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: COLORS.lightGreen,
          padding: "0.5rem",
          borderBottom: "1px solid white",
        }}
      >
        <p>{batch}</p>
        <p>{cost} BDT</p>
      </div>
    );
  };

  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "1000px",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <p style={{ margin: "2rem 0", fontSize: "2rem", textAlign: "center" }}>
          Congratulations..! Your form is submitted.
        </p>

        <div
          style={{
            border: `1px solid ${COLORS.lightGreen}`,
            width: "100%",
            borderRadius: "5px",
            padding: "5px",
            marginTop: "2rem",
          }}
        >
          <p style={{ marginBottom: "10px" }}>YOUR COST</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: COLORS.lightGreen,
              padding: "1rem",
              borderBottom: "1px solid white",
            }}
          >
            <p>Yourself</p>
            <p>{ownCost} BDT</p>
          </div>
          {storedValue?.guest.map((input, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: COLORS.lightGreen,
                  padding: "1rem",
                  borderBottom: "1px solid white",
                }}
              >
                <p>{input.guestType}</p>
                <p>
                  {input.guestType === "Kids" && 700}
                  {input.guestType === "Wife" && 700}
                  {input.guestType === "Guest" && 700} BDT
                </p>
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <p>Total Cost</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <p>{parseInt(guestCost + ownCost)} BDT</p>
              <p style={{ fontSize: "10px" }}>excluding all vats</p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2rem",
          }}
        >
          <Button
            // onClick={procedeToPayment}
            type="button"
            variant="outlined"
            endIcon={<NavigateNextIcon />}
            sx={{ marginRight: "1rem" }}
          >
            Cancel
          </Button>
          <LoadingButton
            // onClick={handleClick}
            // type="submit"
            loading={submitButtonLoading}
            disabled={submitButtonDisable}
            loadingPosition="end"
            variant="contained"
            endIcon={<NavigateNextIcon />}
            // sx={{ margin: "5rem" }}
          >
            Proced To Pay
          </LoadingButton>
        </div>
      </div>
    </form>
  );
}

export default PageFour;
