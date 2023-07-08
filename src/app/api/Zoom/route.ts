const KJUR = require("jsrsasign");
const ZOOM = require("../../../Constant/zoom");
import { NextResponse } from "next/server";

export async function POST(Request: Request) {
  const req = await Request.json();
//   console.log(req);
  //   return NextResponse.json({ req })
  const iat = Math.round(new Date().getTime() / 1000) - 30;
  const exp = iat + 60 * 60 * 2;

  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload = {
    sdkkey: ZOOM.SDK.KEY,
    mn: req.meetingNumber,
    role: req.role,
    iat,
    exp,
  };
  console.log(payload);

  const sHeader = JSON.stringify(header);
  const sPayload = JSON.stringify(payload);
  const meetingSignature = KJUR.KJUR.jws.JWS.sign(
    "HS256",
    sHeader,
    sPayload,
    ZOOM.SDK.SECRET
  );

  return NextResponse.json({
    message: "success",
    signature: meetingSignature,
    sdkkey: ZOOM.SDK.KEY,
  });
}
