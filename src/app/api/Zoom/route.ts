const KJUR = require("jsrsasign");
import ZOOM from "@/Constant/zoom";

export default function handler(req: any, res: any) {
  console.log(req);
  const iat = Math.round(new Date().getTime() / 1000) - 30;
  const exp = iat + 60 * 60 * 2;

  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload = {
    sdkkey: ZOOM.SDK.KEY,
    mn: req.body.meetingNumber,
    role: req.body.role,
    iat,
    exp,
  };

  const sHeader = JSON.stringify(header);
  const sPayload = JSON.stringify(payload);
  const meetingSignature = KJUR.KJUR.JWS.sign(
    "HS256",
    sHeader,
    sPayload,
    ZOOM.SDK.SECRET
  );

  res.status(200).json({
    signature: meetingSignature,
    sdkKey: ZOOM.SDK.KEY,
    message: "success",
  });
}
