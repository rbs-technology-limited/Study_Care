"use client";
import {getUserDataEndpoint} from "@/API_CALL";
import {getCall} from "@/Global/(ApiCalingFunc)/GetCall/GetCall";
import {getTokenCookies} from "@/Global/(cockies)/getCoockies";
import {removeDataInCookies} from "@/Global/(cockies)/setCookies";
import {getLoginInfo, getUserInfo} from "@/Redux/features/Auth/auth-slice";
import {AppDispatch} from "@/Redux/store";
import App from "next/app";
import {useRouter} from "next/navigation";
import React, {createContext, useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import {apiRequestWithRetry} from "@/API_CALL/PostData/RefreshToken/RefreshToken";
import {cToastify} from "@/Shared";

export const Context = createContext({});

interface Props {
    children: React.ReactNode;
}

let count = 0;
const ContextProvider = ({children}: Props): React.ReactElement<Props> => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const checkRefreshToken: any = useCallback(async () => {
        if (count < 3) {
            await apiRequestWithRetry();
            count++;
            await getDataUser();
        } else {
            await removeDataInCookies();
            // console.log("remove");
            cToastify({
                type: "error",
                message: "Something went wrong",
            });
            // router.push("/login");
            return;
        }
    }, [dispatch]);

    const getDataUser: any = useCallback(async () => {
        const getDataFromCookies = await getTokenCookies();
        // console.log(getDataFromCookies);
        if (getDataFromCookies?.isLogin) {
            const response = await getCall(getUserDataEndpoint, {});
            dispatch(getLoginInfo({isLogin: true}));
            // console.log(response);
            if (response.status === 401) {
                await checkRefreshToken();
            } else {
                dispatch(getUserInfo(response));
            }
        }
    }, [checkRefreshToken, dispatch]);

    useEffect(() => {

        (async () => {
            await getDataUser();

        })();
        return () => {

        }
    }, [getDataUser]);

    return (
        <Context.Provider
            value={
                {
                    // @ts-ignore
                }
            }
        >
            {children}
            <ToastContainer pauseOnFocusLoss={false}/>
        </Context.Provider>
    );
};

export default ContextProvider;
