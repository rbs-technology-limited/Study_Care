"use client";
import { getUserDataEndpoint } from "@/API_CALL";
import { getCall } from "@/Global/(ApiCalingFunc)/GetCall/GetCall";
import { getTokenCookies } from "@/Global/(cockies)/getCoockies";
import { removeDataInCookies } from "@/Global/(cockies)/setCookies";
import { getLoginInfo, getUserInfo } from "@/Redux/features/Auth/auth-slice";
import { AppDispatch } from "@/Redux/store";
import App from "next/app";
import { useRouter } from "next/navigation";
import { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
export const Context = createContext({});

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props): React.ReactElement<Props> => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const getDataFromCookies = await getTokenCookies();
      // console.log(getDataFromCookies.isLogin);
      if (getDataFromCookies?.isLogin) {
        const response = await getCall(getUserDataEndpoint, {});
        dispatch(getLoginInfo({ isLogin: true }));
        // console.log(response);
        if (response.status === 401) {
          // removeDataInCookies();
          Swal.fire({
            title: "Error!",
            text: "Unauthorized! Please login again",
            icon: "error",
            confirmButtonText: "Ok",
          }).then(() => {
            removeDataInCookies();
            router.push("/");
            dispatch(
              getLoginInfo({
                isLogin: false,
              })
            );
          });
        } else {
          dispatch(getUserInfo(response));
        }
      }
    })();
  }, [dispatch, router]);

  return (
    <Context.Provider
      value={
        {
          // @ts-ignore
        }
      }
    >
      {children}
      <ToastContainer pauseOnFocusLoss={false} />
    </Context.Provider>
  );
};

export default ContextProvider;
