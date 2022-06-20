import { Stack, Box, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const ConfirmStep2 = ({
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
  return (
    <Box>
      <Stack direction={{ xs: "column", md: "row" }} spacing={3} marginTop={3}>
        <Box flex={2}>
          <Card>
            <CardHeader
              title={`${fullName}`}
              subheader={`${occupation}, ${designation}, ${companyName}`}
            />
            <CardMedia
              component="img"
              height="140"
              width="140"
              image={URL.createObjectURL(photo)}
              alt="Profile Photo"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Mobile: {mobile}
                <br />
                What's app: {secondaryMobile} <br />
                Email:{email}
                <br />
                Blood Group:{bloodGroup}
                <br />
                Birthdate: {dob}
                <br />
                Marital Status: {maritalStatus} <br />
                Emergency Contact:{emergencyContact}
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box flex={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Wish Box
                  </TableCell>
                  <TableCell align="right">{wishBox}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Hall Room Number
                  </TableCell>
                  <TableCell align="right">{hallRoomNumber}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Nick Name
                  </TableCell>
                  <TableCell align="right">{nickName}</TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Batch
                  </TableCell>
                  <TableCell align="right">{batch}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Department
                  </TableCell>
                  <TableCell align="right">{department}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Facebook ID
                  </TableCell>
                  <TableCell align="right">{fbId}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Father's Name
                  </TableCell>
                  <TableCell align="right">{fatherName}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Mother's Name
                  </TableCell>
                  <TableCell align="right">{motherName}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Address
                  </TableCell>
                  <TableCell align="right">{`${streetAddress} , ${streetAddressLine2}, ${city}, ${state},${zipCode}, ${country}`}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Box>
  );
};

export default ConfirmStep2;
