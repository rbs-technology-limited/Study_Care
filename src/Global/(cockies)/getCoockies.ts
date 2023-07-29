"use server";

import { cookies } from "next/headers";

export const getTokenCookies = async (name = "authToken") => {
  const { value }: any = cookies()?.get(name) || {};
  const token = value ? JSON.parse(value) : null;
  return token || null;
};
