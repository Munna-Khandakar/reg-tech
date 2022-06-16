import React from "react";
import "./MultiStepForm.css";
import swal from "sweetalert";
import { Typography, TextField, Box, Stack, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function AddressForm({
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
  handleNext,
  handlePrev,
}) {
  //const [bloodGroup, setBloodGroup] = React.useState("O+");
  return (
    <div>
      <Box autoComplete="off">
        {/* address */}
        <TextField
          style={{ width: "100%", margin: "1rem 0" }}
          placeholder="STREET ADDRESS"
          label="STREET ADDRESS"
          required
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          variant="outlined"
        />

        <TextField
          style={{ width: "100%", margin: "1rem 0" }}
          placeholder="STREET ADDRESS LINE 2"
          label="STREET ADDRESS LINE 2"
          required
          value={streetAddressLine2}
          onChange={(e) => setStreetAddressLine2(e.target.value)}
          variant="outlined"
        />
        <Stack direction="row" spacing={2}>
          <TextField
            style={{ width: "100%" }}
            placeholder="CITY"
            required
            label="CITY"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            variant="outlined"
          />
          <TextField
            style={{ width: "100%" }}
            placeholder="STATE/PROVINCE"
            required
            label="STATE/PROVINCE"
            value={state}
            onChange={(e) => setState(e.target.value)}
            variant="outlined"
          />
        </Stack>
        <Stack direction="row" spacing={2} marginTop="1rem">
          <TextField
            style={{ width: "50%" }}
            placeholder="POSTAL/ZIP CODE"
            required
            label="POSTAL/ZIP CODE"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            variant="outlined"
          />
          <TextField
            style={{ width: "50%" }}
            placeholder="COUNTRY"
            required
            label="COUNTRY"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            variant="outlined"
          />
        </Stack>
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
        <Button
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => {
            // checking the requred fields

            if (streetAddress === "") {
              return swal("", "Street Address can't be empty ", "error");
            }
            if (city === "") {
              return swal("", "City can't be empty ", "error");
            }
            if (zipCode === "") {
              return swal("", "Zip Code can't be empty ", "error");
            }

            if (country === "") {
              return swal("", "Country con't be empty ", "error");
            }

            handleNext();
          }}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
}

export default AddressForm;
