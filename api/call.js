const { ACCOUNT_SID, TWILIO_PHONE, AUTH_TOKEN } = process.env;

const Twilio = require("twilio")(ACCOUNT_SID, AUTH_TOKEN, {
  lazyLoading: false,
  autoRetry: true,
  maxRetries: 2,
});

export default async function handler(req, res) {
  const { phone } = req.body;
  if (!phone) res.status(400).json({ message: "Phone number is missing" });
  try {
    const call = await Twilio.calls.create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: phone,
      from: TWILIO_PHONE,
    });
    console.log(call);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Request failed" });
  }
  return res.status(200).json({
    message: "Call requested",
  });
}
