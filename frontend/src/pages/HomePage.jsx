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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
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
          paddingTop={"2rem"}
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
                <Typography variant="body2" color="text.secondary">
                  হলের সকল ছাত্রদের প্রাথমিক তথ্য-উপাত্ত (Primary Information)
                  প্রদান করার জন্য বিনীত অনুরোধ করা হল
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  এই ফর্মে তথ্য-উপাত্ত প্রদানের মাধ্যমে আপনি পুনর্মিলনীর আয়োজন
                  এর সকল কার্যক্রমের সঙ্গে নিজেকে যুক্ত করতে পারবেন
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

                <Typography variant="body2" color="text.secondary">
                  পুনর্মিলনীর আয়োজন এর বিভিন্ন অগ্রগতি এবং সিদ্ধান্তগুলো আপনাকে{" "}
                  <span className="red-text">মোবাইল এসএমএস</span> অথবা{" "}
                  <span className="green-text">ইমেইলের</span> মাধ্যমে অবহিত করা
                  হবে
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  তাই ফরমটি পূরণ করার সময়{" "}
                  <span className="red-text">
                    মোবাইল নাম্বার (Mobile Number)
                  </span>
                  , হোয়াটসঅ্যাপ নাম্বার (WhatsApp Number) এবং{" "}
                  <span className="green-text">ইমেইল অ্যাড্রেস (EMail)</span>{" "}
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
                <Typography variant="body2" color="text.secondary">
                  আপনার তথ্য উপাত্ত আমরা যথোপযুক্ত নিরাপত্তা বজায় রেখে সংরক্ষণ
                  করব এবং আপনার অনুমতি ব্যতীত অন্য কোন কাজে ব্যবহার করা হবে না
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
        <Typography
          variant="h2"
          color={"primary"}
          textAlign={"center"}
          paddingTop={"2rem"}
        >
          তথ্য উপাত্ত সংগ্রহের নিয়মাবলী
        </Typography>
        <Typography variant="h5" textAlign={"center"}>
          আপনাকে 3টি ধাপে তথ্য প্রদান করতে হবে:
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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1tpaKCl1MohjoGpxHh_8rb9kWgIUkNvYn0ONnGQS6OQHg_c8rhUYigE9kOGr-sptUbw&usqp=CAU"
                alt="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" textAlign={"center"}>
                  General Information
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
                image="https://www.clipartmax.com/png/middle/456-4569453_step-one-clipart-usmle-step-1-usmle-step-3-logo-step-1.png"
                alt="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" textAlign={"center"}>
                  Personal Information
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
                image="https://w7.pngwing.com/pngs/723/583/png-transparent-usmle-step-1-computer-icons-usmle-step-3-symbol-symbol-miscellaneous-blue-text-thumbnail.png"
                alt="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" textAlign={"center"}>
                  Other Information
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
        <Box padding={"1rem"}>
          <Typography variant="h6" padding={"1rem"}>
            আপনাকে তারকা চিহ্নিত (*) ঘর গুলোতে অবশ্যই তথ্য প্রদান করতে হবে |
            যেমন, FULL NAME * , NICK NAME *, MOBILE NUMBER *, WhatsApp NUMBER *
            etc.
          </Typography>
          <Typography variant="h6" padding={"1rem"}>
            সকল তথ্য প্রদান করার পরে, You can CHECK YOUR INFORMATION before
            SUBMIT | যদি কোন ভুল থাকে, তবে BACK করে সংশোধন করা যাবে | সকল
            ইনফরমেশন সঠিক থাকলে SUBMIT করা যাবে
          </Typography>
          <Typography variant="h6" padding={"1rem"}>
            MOBILE NUMBER * খুবই গুরুত্বপূর্ণ তথ্য। পরবর্তী সকল যোগাযোগ হবে
            মোবাইল এসএমএসের মাধ্যমে। সুতরাং, Active এবং Current MOBILE NUMBER
            সঠিকভাবে প্রদান করুন।
          </Typography>
          <Typography variant="h6" padding={"1rem"}>
            EMAIL * খুবই গুরুত্বপূর্ণ তথ্য। সুতরাং, Active এবং Current EMAIL
            Address সঠিকভাবে প্রদান করুন।
          </Typography>
        </Box>

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
