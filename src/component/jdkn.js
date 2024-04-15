require("dotenv").config()




const accountSid = "ACcb53114c16a0b2f2dd40bbd8313b0f43";
const authToken = "bfcdeccaec54bb81b4042afe958761d7";
const verifySid = "VAb6728c1dc4c8e139192f41b32e217c44";
const client = require("twilio")(accountSid, authToken);

client.verify.v2
  .services(verifySid)
  .verifications.create({ to: "+917091071889", channel: "sms" })
  .then((verification) => console.log(verification.status))
  .then(() => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question("Please enter the OTP:", (otpCode) => {
      client.verify.v2
        .services(verifySid)
        .verificationChecks.create({ to: "+917091071889", code: otpCode })
        .then((verification_check) => console.log(verification_check.status))
        .then(() => readline.close());
    });
  });



