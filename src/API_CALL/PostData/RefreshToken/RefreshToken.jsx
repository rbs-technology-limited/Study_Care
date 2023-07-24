import apiUrl from "@/Base/apiUrl";
import { getTokenCookies } from "@/Global/(cockies)/getCoockies";
import {
  removeDataInCookies,
  saveDataInCookies,
} from "@/Global/(cockies)/setCookies";
// import { cookies } from "next/headers";

async function apiRequestWithRetry() {
  const token = await getTokenCookies();
  // console.log(token);
  if (!token) {
    return;
  }

  const axios = require("axios");
  const FormData = require("form-data");
  let data = new FormData();
  data.append("refresh", token);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${apiUrl}/token_refresh/`,
    data: data,
  };

  // const response = await axios(config);
  // const result = await response.data;
  // console.log(result);
  try {
    const response = await axios(config);
    const result = await response.data;
    // console.log(result);
    if (response.status === 200) {
      // console.log(result);
      // console.log(result.access);
      const value = {
        access: result.access,
        refresh: result.refresh,
      };
      // console.log(value);
      saveDataInCookies({ data: value });
      
    } else {
      // removeDataInCookies();
    }
  } catch (error) {
    console.log(error);
  }
}

export { apiRequestWithRetry };

