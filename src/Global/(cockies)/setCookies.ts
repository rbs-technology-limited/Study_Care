"use server";
import { cookies } from "next/headers";
interface GetCallProps {
  data: any;
  name?: string;
}

export const saveDataInCookies = async ({
  data,
  name = "authToken",
}: GetCallProps) => {
  // console.log(data);
  // console.log("server");
  cookies().set({
    name: name,
    value: JSON.stringify({
      accessToken: data.access,
      refreshToken: data.refresh,
      ...data,
    }),
    httpOnly: true,
    // secure: true,//https
    path: "/",
    //  expire after 1 day
    expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  });
};

export const removeDataInCookies = async (name = "authToken") => {
  cookies().set({
    name: name,
    value: "",
    httpOnly: true,
    maxAge: 0,
    path: "/",
  });
};
