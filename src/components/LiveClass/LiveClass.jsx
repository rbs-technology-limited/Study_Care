"use client";
import React, { useEffect } from "react";
import Styles from "./meeting.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const LiveClass = () => {
  const router = useRouter();
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

          let payload = router.query;
          console.log(payload);
          const { data } = await axios({
            url: "/zoom",
            method: "POST",
            body: payload,
          })
            .then((res) => {
              return res;
            })
            .catch((error) =>
              console.log("- signature req failed --> ", error)
            );
          console.log(data);
          client.join({
            signature: data.signature,
            meetingNumber: payload.meetingNumber,
            userName: payload.userName,
            sdkkey: data.sdkkey,
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
  }, [router.query]);

  return (
    <div className="container mx-auto">
      <div className={Styles.meetingSDKElement} id="meetingSDKElement">
        <div className={Styles.content}></div>
      </div>
    </div>
  );
};

export default LiveClass;
