import { useState } from "react";
import Button from "@mui/material/Button";
import PhoneInput from "react-phone-number-input";
import { motion, AnimatePresence } from "framer-motion";
export default function Login({ mobile, setMobile, handleSubmit }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PhoneInput
          className="phoneInputBox"
          placeholder="PHONE NUMBER *"
          defaultCountry="BD"
          fullWidth
          value={mobile}
          onChange={setMobile}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
