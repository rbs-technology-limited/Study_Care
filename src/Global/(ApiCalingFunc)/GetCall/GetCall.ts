import { apiRequestWithRetry } from "@/API_CALL/PostData/RefreshToken/RefreshToken";
import apiUrl from "@/Base/apiUrl";
import { getTokenCookies } from "@/Global/(cockies)/getCoockies";
interface GetCallProps {
  endpoint: string;
  data?: any;
  body?: any;
  customConfig?: any;
  query?: object;
  revalidate?: number;
  cache?: any;
  retryCount?: number;
}

export async function getCall(
  endpoint: GetCallProps["endpoint"],
  {
    data: data = {},
    body: body,
    query: query = {},
    // revalidate will be after 4 min
    revalidate: revalidate = 240,
    cache,
    ...customConfig
  }: GetCallProps["body"] & {
    data?: any;
    customConfig?: any;
    query?: object;
    revalidate?: number;
    cache?: any;
  }
) {
  const token = await getTokenCookies();
  // console.log(token);
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token.accessToken}` }),
  };
  try {
    let url = `${apiUrl}/${endpoint}`;

    if (data?.id) {
      url = `${url}/${data.id}`;
    }

    const searchParams = Object?.keys?.(query)?.length
      ? new URLSearchParams(query)?.toString()
      : null;

    if (searchParams) {
      url = `${url}?${searchParams}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...headers,
        ...customConfig.headers,
      },
      next: {
        revalidate: revalidate,
      },
      ...(cache && { cache }),
    });
    const result = await response.json();
    // console.log(data);
    if (!response.ok) {
      return response;
    }
    if (response.ok) {
      return result;
    }
  } catch (error) {
    console.log(error, "error");
    return Promise.reject(error);
  }
}
