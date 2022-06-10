// dependencies
const sgMail = require("@sendgrid/mail");

/**
 * @name send_verification_mail
 * @description Sends the verification code to the user email
 * @param {string} email user email address
 * @param {string} otp_code otp code for verification
 *
 * @returns {*} send emails
 */
module.exports.send_verification_mail = async (email, otp_code) => {
  // console.log(process.env.SENDGRID_API_KEY);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "myplatexyz@gmail.com", // Use the email address or domain you verified above
    // subject: "Verification Code",
    templateId: "d-a8f149879cd1478c9c410ab8a1f99143",
    dynamic_template_data: {
      otp_code: otp_code,
    },
  };
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
};

/**
 * @name send_block_mail
 * @description Sends the block message
 * @param {string} email user email address
 *
 * @returns {*} send emails
 */
module.exports.send_block_mail = async (email) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "myplatexyz@gmail.com", // Use the email address or domain you verified above
    // subject: "Verification Code",
    templateId: "d-1cb8f50b056b4deea81bf650c1fe641d",
  };
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
};

/**
 * @name send_unblock_mail
 * @description Sends the unblock message
 * @param {string} email user email address
 *
 * @returns {*} send emails
 */
module.exports.send_unblock_mail = async (email) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "myplatexyz@gmail.com", // Use the email address or domain you verified above
    // subject: "Verification Code",
    templateId: "d-a331a2e1f84d4f7595e9db9f5a58e6e3",
  };
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
};
