var otpGenerator = require("otp-generator");
const OTPVerificationModel = require("../models/OTPVerificationModel");
const UserModel = require("../models/UserModel");
const { send_verification_sms } = require("../config/smsModule");

// POST: api/sendOTP
// CREATE OTP
module.exports.sendOTP = async (req, res, next) => {
  const { phoneNo } = req.body;
  console.log(phoneNo);
  if (!phoneNo) {
    console.log(1);
    return res.status(401).json({ error: "Please provide your phone number" });
  }
  const otp_code = otpGenerator.generate(6, {
    upperCase: false,
    specialChars: false,
  });
  console.log(otp_code);
  // if the phone number is already registerd
  try {
    const existUser = await UserModel.findOne({ mobile: phoneNo });
    console.log(2);
    if (existUser) {
      return res
        .status(201)
        .json({ error: `This phone is already registerd, try with a new one` });
    }
  } catch (error) {
    console.log(error);
  }

  // if otp is sent to the phone number

  try {
    const existOTP = await OTPVerificationModel.findOne({ mobile: phoneNo });
    if (existOTP.status === "varified") {
      console.log(4);
      return res.status(202).json({
        varified: `Phone number is already verified`,
      });
    }
    if (existOTP.status === "notVarified") {
      const oldOTP = await OTPVerificationModel.findOne({ mobile: phoneNo });
      await oldOTP.updateOne({ $set: { otp: otp_code } });
      send_verification_sms(phoneNo, otp_code);
      return res.status(200).json({
        success: `A verification code sent in this ${phoneNo} phone number`,
      });
    }
  } catch (error) {
    console.log(error);
  }

  const data = {
    mobile: phoneNo,
    otp: otp_code,
    status: "notVarified",
  };

  try {
    const newData = new OTPVerificationModel(data);
    const savedData = await newData.save();
    send_verification_sms(phoneNo, otp_code);
    console.log(5);
    // console.log(savedData);
    return res.status(200).json({
      success: `A verification code sent in this ${phoneNo} phone number`,
    });
  } catch (error) {
    res.status(500).json(error);
  }

  // console.log(req.body);
  // res.send("ok");
};

module.exports.verifyOTP = async (req, res, next) => {
  const { otp, mobile } = req.body;
  // verify if match then update status to varified
  try {
    const existOTP = await OTPVerificationModel.findOne({
      mobile: mobile,
      otp: otp,
    });

    if (existOTP) {
      if (existOTP.status === "notVarified") {
        await existOTP.updateOne({ $set: { status: "varified" } });
        return res.status(200).json({
          varified: `Phone number verification successfull`,
        });
      }
    } else {
      return res.status(200).json({
        notVarified: `OTP doesn't match`,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
