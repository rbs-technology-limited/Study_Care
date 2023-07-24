
"use server";
import { cookies } from "next/headers";
interface GetCallProps {
  data: any;
}

export const saveDataInCookies = async ({ data }: GetCallProps) => {
  // console.log(data);
  // console.log("server");
  cookies().set({
    name: "userInfo",
    value: JSON.stringify({
      accessToken: data.access,
      refreshToken: data.refresh,
    }),
    httpOnly: true,
    // secure: true,//https
    path: "/",
    //  expire after 1 day
    expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  });
};

export const removeDataInCookies = async () => {
  cookies().set({
    name: "userInfo",
    value: "",
    httpOnly: true,
    maxAge: 0,
    path: "/",
  });
};
