"use server";

import { cookies } from "next/headers";

export const getTokenCookies = async () => {
  const { value }: any = cookies()?.get("userInfo") || {};
  const token = value ? JSON.parse(value) : null;
  return token || null;
};
