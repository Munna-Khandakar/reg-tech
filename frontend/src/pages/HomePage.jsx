import React, { useState } from "react";
import {
  Checkbox,
  Button,
  Box,
  Paper,
  Typography,
  TextField,
  Stack,
  List,
  ListItem,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import StarIcon from "@mui/icons-material/Star";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { margin } from "@mui/system";
import { color } from "@cloudinary/url-gen/qualifiers/background";
const HomePage = () => {
  let navigate = useNavigate();
  const [check1, setCheck1] = useState(true);

  const handleClick = () => {
    if (check1) {
      navigate("/form");
    } else {
      return swal("", "আমাদের নির্দেশনা পড়ুন আগে ", "error");
    }
  };
  return (
    <>
      <div className="hero">
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h1"
            textAlign={"center"}
            sx={{
              fontSize: {
                lg: 50,
                md: 40,
                sm: 35,
                xs: 35,
              },
            }}
          >
            মওলানা ভাসানী হল, জা.বি.
          </Typography>
          <Typography
            variant="h3"
            textAlign={"center"}
            bold
            sx={{
              fontSize: {
                lg: 50,
                md: 40,
                sm: 35,
                xs: 20,
              },
              fontWeight: 500,
            }}
          >
            ১ম পুনর্মিলনী (SMART Reunion){" "}
          </Typography>
          <Typography
            variant="h4"
            textAlign={"center"}
            sx={{
              fontSize: {
                lg: 40,
                md: 30,
                sm: 25,
                xs: 15,
              },
            }}
          >
            সকল ছাত্রদের ( 20 তম ব্যাচ থেকে শুরু করে বর্তমান 1st ইয়ার ) তথ্য
            উপাত্ত সংগ্রহ ফর্ম
          </Typography>
        </Box>
      </div>

      <Paper elevation={3}>
        <Typography
          variant="h2"
          color={"primary"}
          textAlign={"center"}
          padding={"4rem 0"}
        >
          তথ্য উপাত্ত সংগ্রহের উদ্দেশ্য
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          marginTop={3}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ flexWrap: "wrap" }}
        >
          <Card sx={{ maxWidth: 345, mt: 3 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                width="140"
                height="140"
                image="https://media.baamboozle.com/uploads/images/142775/1635056525_3108598_url.gif"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" textAlign={"center"}>
                  প্রাথমিক তথ্য সংগ্রহ
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: { xs: "justify", md: "justify" },
                    textJustify: "interWord",
                  }}
                >
                  {/* <RadioButtonCheckedIcon fontSize="small" /> */}
                  হলের সকল ছাত্রদের প্রাথমিক তথ্য-উপাত্ত (Primary Information)
                  প্রদান করার জন্য বিনীত অনুরোধ করা হল
                </Typography>
                <br />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: { xs: "justify", md: "justify" },
                    textJustify: "interWord",
                  }}
                >
                  {/* <RadioButtonCheckedIcon fontSize="small" /> */}
                  এই ফর্মে তথ্য-উপাত্ত প্রদানের মাধ্যমে আপনি{" "}
                  <span className="red-text">
                    পুনর্মিলনীর আয়োজন এর সকল কার্যক্রমের সম্পর্কে অবগত হওয়ার
                  </span>{" "}
                  জন্য নিজেকে যুক্ত করতে পারবেন |
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, mt: 3 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                width="140"
                height="140"
                image="https://cdn.dribbble.com/users/361933/screenshots/2047404/connect.gif"
                alt="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" textAlign={"center"}>
                  সহজ যোগাযোগ
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: { xs: "justify", md: "justify" },
                    textJustify: "interWord",
                  }}
                >
                  পুনর্মিলনীর আয়োজন এর বিভিন্ন অগ্রগতি এবং সিদ্ধান্তগুলো আপনাকে{" "}
                  <span className="red-text">মোবাইল এসএমএসঅথবা ইমেইলের</span>{" "}
                  মাধ্যমে অবহিত করা হবে
                </Typography>
                <br />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: { xs: "justify", md: "justify" },
                    textJustify: "interWord",
                  }}
                >
                  তাই ফরমটি পূরণ করার সময়{" "}
                  <span className="red-text">
                    মোবাইল নাম্বার (Mobile Number)
                  </span>
                  , হোয়াটসঅ্যাপ নাম্বার (WhatsApp Number) এবং{" "}
                  <span className="red-text">ইমেইল অ্যাড্রেস (EMail)</span>{" "}
                  সঠিকভাবে প্রদানের জন্য বিনীত অনুরোধ করা হচ্ছে
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345, mt: 3 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                width="140"
                height="140"
                image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/93f66937b4419569f23e099ba326359b-1568933046/BUBBLES-final/custom-gif-animation-for-your-web-icons.gif"
                alt="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" textAlign={"center"}>
                  তথ্য সুরক্ষা
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: { xs: "justify", md: "justify" },
                    textJustify: "interWord",
                  }}
                >
                  আপনার তথ্য উপাত্ত আমরা যথোপযুক্ত{" "}
                  <span className="red-text">
                    নিরাপত্তা বজায় রেখে সংরক্ষণ করব এবং আপনার অনুমতি ব্যতীত
                  </span>{" "}
                  অন্য কোন কাজে ব্যবহার করা হবে না
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          marginTop="2rem"
        >
          <Alert
            icon={false}
            severity="info"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "90", md: "95%" },
              textAlign: "center",
            }}
          >
            <AlertTitle
              sx={{ fontSize: "1.5rem", textAlign: "center", color: "red" }}
            >
              বিশেষ দ্রষ্টব্য
            </AlertTitle>
            <strong className="red-text">
              রিইউনিয়ন রেজিস্ট্রেশন এবং রেজিস্ট্রেশনের জন্য অর্থ সংগ্রহ
              কার্যক্রম পরবর্তীতে করা হবে
            </strong>
          </Alert>
        </Stack>
        <Typography
          variant="h2"
          color={"primary"}
          textAlign={"center"}
          paddingTop={"4rem"}
        >
          তথ্য উপাত্ত প্রদানের নিয়মাবলী জেনে নিন
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    // fontSize: "1rem",
                    color: "text.secondary",
                  }}
                >
                  আপনাকে 3টি ধাপে তথ্য প্রদান করতে হবে: <br />
                  a) General Information
                  <br /> b) Personal Information <br />
                  c) Other Information{" "}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    // fontSize: "1rem",
                    color: "text.secondary",
                    textAlign: { xs: "justify", md: "center" },
                    textJustify: "interWord",
                  }}
                >
                  আপনাকে তারকা চিহ্নিত (*) ঘর গুলোতে অবশ্যই তথ্য প্রদান করতে হবে
                  | যেমন,{" "}
                  <strong>
                    FULL NAME * , NICK NAME *, MOBILE NUMBER *, WhatsApp NUMBER
                    *{" "}
                  </strong>{" "}
                  etc.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    // fontSize: "1rem",
                    color: "text.secondary",
                    textAlign: { xs: "justify", md: "center" },
                    textJustify: "interWord",
                  }}
                >
                  সকল তথ্য প্রদান করার পরে, You can{" "}
                  <strong>CHECK YOUR INFORMATION</strong>
                  before <strong>SUBMIT</strong> | যদি কোন ভুল থাকে, তবে BACK
                  করে সংশোধন করা যাবে | সকল ইনফরমেশন সঠিক থাকলে{" "}
                  <strong>SUBMIT</strong> করা যাবে |
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    // fontSize: "1rem",
                    color: "text.secondary",
                    textAlign: { xs: "justify", md: "center" },
                    textJustify: "interWord",
                  }}
                >
                  আপনাকে একটি <strong>পাসপোর্ট সাইজের ছবি আপলোড</strong> করতে
                  হবে। আপনার যদি কোনো ফটো না থাকে, অনুগ্রহ করে মোবাইল ফোন থেকে
                  একটি সেলফি তুলুন এবং সেটি আপলোড করুন।
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    // fontSize: "1rem",
                    color: "text.secondary",
                    textAlign: { xs: "justify", md: "center" },
                    textJustify: "interWord",
                  }}
                >
                  <strong> MOBILE NUMBER *</strong> খুবই গুরুত্বপূর্ণ তথ্য।
                  পরবর্তী সকল যোগাযোগ হবে মোবাইল এসএমএসের মাধ্যমে। সুতরাং,
                  Active এবং <strong>Current MOBILE NUMBER</strong> সঠিকভাবে
                  প্রদান করুন।
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    // fontSize: "1rem",
                    color: "text.secondary",
                    textAlign: { xs: "justify", md: "center" },
                    textJustify: "interWord",
                  }}
                >
                  <strong> EMAIL * </strong>খুবই গুরুত্বপূর্ণ তথ্য। সুতরাং,
                  Active এবং Current
                  <strong>EMAIL Address</strong> সঠিকভাবে প্রদান করুন।
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginTop: "2rem",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "5rem",
          }}
        >
          <Button
            variant="contained"
            endIcon={<ReceiptIcon />}
            onClick={handleClick}
          >
            তথ্য প্রদান করুন
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default HomePage;
