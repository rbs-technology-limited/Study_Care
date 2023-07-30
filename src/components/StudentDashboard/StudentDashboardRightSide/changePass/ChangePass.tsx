import { teal } from "@/Constant/Custom-Color";
import { editProfileData } from "@/Content";
import { useChangePassMutation } from "@/Redux/features/changePass/changePassSlice";
import { CButton, CInput, cToastify } from "@/Shared";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";

const ChangePass = () => {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [changePass, { isLoading, isError, isSuccess, error }] = useChangePassMutation()

    const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        changePass({
            old_password: oldPass,
            new_password1: newPass,
            new_password2: confirmPass
        })

    };
    React.useEffect(() => {
        if (isError) {
            console.log(error)
        }
        if (isSuccess) {
            cToastify({
                type: "success",
                message: "Password changed successfully",
            });
        }
    }, [isError, error, isSuccess])


    return (
        <section>
            <form onSubmit={handleRegisterSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* old password */}
                    <div className="">
                        <div className="flex justify-between items-center">
                            <label htmlFor="name" className="my-2 md:my-0 lg:my-0 xl:my-1 dark:text-white">
                                Old Password
                            </label>
                            <BsQuestionCircleFill color={teal} className="cursor-pointer" />
                        </div>
                        <CInput
                            required
                            type="text"
                            placeholder="Old Password"
                            mb="mb-0"
                            value={oldPass}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setOldPass(e.target.value)}
                        />
                        <label htmlFor="" className="text-red-500 text-sm">
                            {isError && error?.data?.old_password ? error?.data?.old_password[0] : ""}
                        </label>
                    </div>
                    {/* new password */}
                    <div className="">
                        <div className="flex justify-between items-center">
                            <label htmlFor="name" className="my-2 md:my-0 lg:my-0 xl:my-1 dark:text-white">
                                New Password
                            </label>
                            <BsQuestionCircleFill color={teal} className="cursor-pointer" />
                        </div>
                        <CInput
                            required
                            type="text"
                            placeholder="New Password"
                            mb="mb-0"
                            value={newPass}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPass(e.target.value)}
                        />
                        <label htmlFor="" className="text-red-500 text-sm">
                            {isError && error?.data?.new_password2 ? error?.data?.new_password2[0] : ""}
                        </label>

                    </div>
                    {/* confirm password */}
                    <div className="">
                        <div className="flex justify-between items-center">
                            <label htmlFor="name" className="my-2 md:my-0 lg:my-0 xl:my-1 dark:text-white">
                                Confirm Password
                            </label>
                            <BsQuestionCircleFill color={teal} className="cursor-pointer" />
                        </div>
                        <CInput
                            required
                            type="text"
                            placeholder="Confirm New Password"
                            mb="mb-0"
                            value={confirmPass}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPass(e.target.value)}
                        />
                        <label htmlFor="" className="text-red-500 text-sm">
                            {isError && error?.data?.new_password2 ? error?.data?.new_password2[0] : ""}
                        </label>
                    </div>
                </div>
                <div className="my-4">
                    <CButton
                        type="submit"
                        variant="solid"
                        btnTitle={editProfileData?.button}
                        color={teal}
                        loading={isLoading}
                    />
                </div>
            </form>
        </section>
    );
};

export default ChangePass;
