"use client";
import React, { useEffect } from "react";
import Styles from "./meeting.module.css";
import axios from "axios";
// import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

const LiveClass = () => {
  const searchParams = useSearchParams();
  // const pathname = usePathname()
  // console.log(searchParams.get("meetingNumber"));
  // console.log(searchParams.get("role"));

  useEffect(() => {
    return async () => {
      new Promise(async (resolve, reject) => {
        const ZoomEmbed = (await import("@zoomus/websdk/embedded")).default;

        resolve(ZoomEmbed.createClient());
      })
        .then(async (client) => {
          const meetingSDKElement =
            document.getElementById("meetingSDKElement");
          client.init({
            language: "en-US",
            zoomAppRoot: meetingSDKElement,
          });

          let payload = {
            meetingNumber: searchParams.get("meetingNumber"),
            role: searchParams.get("role"),
            userName: searchParams.get("userName"),
            password: searchParams.get("password"),
          };
          // console.log(searchParams);
          const { data } = await axios({
            url: "/api/zoom",
            method: "POST",
            data: payload,
          }).catch((error) => {
            console.log("error", error);
          });
          console.log(data);
          client.join({
            signature: data.signature,
            meetingNumber: payload.meetingNumber,
            userName: payload.userName,
            sdkKey: data.sdkkey,
            tk: "",
            success: (success) => {
              console.log("join meeting success");
            },
            error: (error) => {
              console.log("join meeting error", error);
            },
          });
        })
        .catch((error) => {
          console.log("error", error);
        });
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div className={Styles.meetingSDKElement} id="meetingSDKElement">
        <div className={Styles.content}></div>
      </div>
    </div>
  );
};

export default LiveClass;
