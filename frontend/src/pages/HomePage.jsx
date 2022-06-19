import React, { useState } from "react";
import { Checkbox, Button, Box, Paper, Typography } from "@mui/material";
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
  const [check1, setCheck1] = useState(false);

  const handleClick = () => {
    if (check1) {
      navigate("/form");
    } else {
      return swal("", "আমাদের নির্দেশনা পড়ুন আগে ", "error");
    }
  };
  return (
    <>
      <div className="hero"></div>

      <Paper elevation={3}>
        <Typography
          variant="h4"
          color={"primary"}
          textAlign={"center"}
          paddingTop={"2rem"}
        >
          আবেদনের নির্দেশনাবলী
        </Typography>
        <Typography variant="h6" textAlign={"justify"} padding={" 1rem 3rem"}>
          <LooksOneIcon color="primary" sx={{ m: 2, pt: 3 }} />
          আবেদনযোগ্য ইউনিটগুলোর তালিকা থেকে আবেদনকারী আবেদন ফি প্রদান পূর্বক এক
          বা একাধিক ইউনিটে আবেদন করতে পারবেন। বিকাশ অথবা রকেট-এর মাধ্যমে
          নির্ধারিত আবেদন ফি প্রদান করে ওয়েবসাইটে লগইন করার পর প্রার্থীর নিজ নিজ
          প্রোফাইল-এ স্বাক্ষর ও ছবি আপলোড করে আবেদন সম্পন্ন করতে হবে এবং
          প্রবেশপত্র সংগ্রহ করতে হবে। সর্বমোট ৫ টি ধাপে (ক, খ, গ, ঘ, ঙ) এই আবেদন
          সম্পন্ন করতে হবে।
        </Typography>
        <Typography variant="h6" textAlign={"justify"} padding={"1rem 3rem"}>
          <LooksTwoIcon color="primary" sx={{ m: 2, pt: 3 }} />
          আবেদনযোগ্য ইউনিটগুলোর তালিকা থেকে আবেদনকারী আবেদন ফি প্রদান পূর্বক এক
          বা একাধিক ইউনিটে আবেদন করতে পারবেন। বিকাশ অথবা রকেট-এর মাধ্যমে
          নির্ধারিত আবেদন ফি প্রদান করে ওয়েবসাইটে লগইন করার পর প্রার্থীর নিজ নিজ
          প্রোফাইল-এ স্বাক্ষর ও ছবি আপলোড করে আবেদন সম্পন্ন করতে হবে এবং
          প্রবেশপত্র সংগ্রহ করতে হবে। সর্বমোট ৫ টি ধাপে (ক, খ, গ, ঘ, ঙ) এই আবেদন
          সম্পন্ন করতে হবে।
        </Typography>
        <Typography variant="h6" textAlign={"justify"} padding={"1rem 3rem"}>
          <Looks3Icon color="primary" sx={{ m: 2, pt: 3 }} />
          আবেদনযোগ্য ইউনিটগুলোর তালিকা থেকে আবেদনকারী আবেদন ফি প্রদান পূর্বক এক
          বা একাধিক ইউনিটে আবেদন করতে পারবেন। বিকাশ অথবা রকেট-এর মাধ্যমে
          নির্ধারিত আবেদন ফি প্রদান করে ওয়েবসাইটে লগইন করার পর প্রার্থীর নিজ নিজ
          প্রোফাইল-এ স্বাক্ষর ও ছবি আপলোড করে আবেদন সম্পন্ন করতে হবে এবং
          প্রবেশপত্র সংগ্রহ করতে হবে। সর্বমোট ৫ টি ধাপে (ক, খ, গ, ঘ, ঙ) এই আবেদন
          সম্পন্ন করতে হবে।
        </Typography>
        <FormGroup>
          <FormControlLabel
            value={check1}
            sx={{ ml: 5, mb: 5 }}
            onChange={(e) => setCheck1(e.target.checked)}
            control={<Checkbox color="primary" />}
            label="আমি রাজি আছি "
          />
        </FormGroup>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
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
