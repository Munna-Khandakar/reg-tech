import React, { useState } from "react";
import {
  Checkbox,
  Button,
  Box,
  Paper,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Looks3Icon from "@mui/icons-material/Looks3";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import LooksOneIcon from "@mui/icons-material/LooksOne";
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
          আবেদনের নির্দেশনাবলী
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          marginTop={3}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Card sx={{ maxWidth: 345 }}>
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
                  Primary Information
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  হলের সকল ছাত্রদের প্রাথমিক তথ্য-উপাত্ত (Primary Information)
                  প্রদান করার জন্য বিনীত অনুরোধ করা হল
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
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
                  Future Connection
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  এই ফর্মে তথ্য-উপাত্ত প্রদানের মাধ্যমে আপনি পুনর্মিলনীর আয়োজন
                  এর সকল কার্যক্রমের সঙ্গে নিজেকে যুক্ত করতে পারবেন
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
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
                  Future Connection
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  পুনর্মিলনীর আয়োজন এর বিভিন্ন অগ্রগতি এবং সিদ্ধান্তগুলো আপনাকে{" "}
                  <span className="red-text">মোবাইল এসএমএস</span> অথবা{" "}
                  <span className="green-text">ইমেইলের</span> মাধ্যমে অবহিত করা
                  হবে
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>

        {/* <Typography variant="h6" textAlign={"justify"} padding={" 1rem 3rem"}>
          <LooksOneIcon color="primary" sx={{ m: 2, pt: 3 }} />
          হলের সকল ছাত্রদের প্রাথমিক তথ্য-উপাত্ত (Primary Information) প্রদান
          করার জন্য বিনীত অনুরোধ করা হল
        </Typography> */}
        {/* <Typography variant="h6" textAlign={"justify"} padding={"1rem 3rem"}>
          <LooksTwoIcon color="primary" sx={{ m: 2, pt: 3 }} />
          এই ফর্মে তথ্য-উপাত্ত প্রদানের মাধ্যমে আপনি পুনর্মিলনীর আয়োজন এর সকল
          কার্যক্রমের সঙ্গে নিজেকে যুক্ত করতে পারবেন
        </Typography> */}
        {/* <Typography variant="h6" textAlign={"justify"} padding={"1rem 3rem"}>
          <Looks3Icon color="primary" sx={{ m: 2, pt: 3 }} />
          পুনর্মিলনীর আয়োজন এর বিভিন্ন অগ্রগতি এবং সিদ্ধান্তগুলো আপনাকে{" "}
          <span className="red-text">মোবাইল এসএমএস</span> অথবা{" "}
          <span className="green-text">ইমেইলের</span> মাধ্যমে অবহিত করা হবে
        </Typography> */}
        {/* <FormGroup>
          <FormControlLabel
            value={check1}
            sx={{ ml: 5, mb: 5 }}
            onChange={(e) => setCheck1(e.target.checked)}
            control={<Checkbox color="primary" />}
            label="আমি রাজি আছি "
          />
        </FormGroup> */}
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
            Open Form
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default HomePage;
