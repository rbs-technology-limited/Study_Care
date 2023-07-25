import apiUrl from "@/Base/apiUrl";
import { cToastify } from "@/Shared";

interface PostCallProps {
  endpoint: string;
  body: any;
  customConfig?: any;
  method?: string;
}

export async function callAction(
  endpoint: PostCallProps["endpoint"],
  {
    body,
    method = "POST",
    ...customConfig
  }: PostCallProps["body"] & { customConfig?: any } & { method?: string }
) {
  const headers = {
    ...(body instanceof FormData ? {} : { "Content-Type": "application/json" }),
  };
  try {
    let url = `${apiUrl}/${endpoint}`;
    const response = await fetch(url, {
      method: method,
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
      return response;
    }
    if (response.ok) {
      return data;
    }
    // throw new Error(response?.statusText);
  } catch (error) {
    // console.log(error);
    return Promise.reject(error);
  }
}
