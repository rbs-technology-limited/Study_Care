import apiUrl from "@/Base/apiUrl";
import { cToastify } from "@/Shared";

interface PostCallProps {
  endpoint: string;
  body: any;
  customConfig?: any;
}

export async function postCall(
  endpoint: PostCallProps["endpoint"],
  { body, ...customConfig }: PostCallProps["body"] & { customConfig?: any }
) {
  const headers = {
    ...(body instanceof FormData ? {} : { "Content-Type": "application/json" }),
  };
  try {
    let url = `${apiUrl}/${endpoint}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...headers,
        ...customConfig.headers,
      },
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
    const data = await response.json();
    // console.log(data);
    if (!response.ok) {
      cToastify({
        type: "error",
        message: "Something went wrong! please try again",
      });
    }
    if (response.ok) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (error) {
    // console.log(error);
    return Promise.reject(error);
  }
}
