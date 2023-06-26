import { teal } from "@/Constant/Custom-Color";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const Signup = () => {
  return (
    <section>
      <div className="grid grid-cols-3 gap-3">
        {/* input section */}
        <div className="col-span-2">
          <div className="flex items-center gap-1">
            <p className="text-button-teal">Already a member?</p>
            <BsFillPersonFill color={teal} />
          </div>
        </div>
        {/* image section */}
        <div className="col-span-1"></div>
      </div>
    </section>
  );
};

export default Signup;
