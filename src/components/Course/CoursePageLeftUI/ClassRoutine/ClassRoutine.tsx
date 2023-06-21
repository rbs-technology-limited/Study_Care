import React from "react";
import { couseClassRoutineData } from "@/Content";

const ClassRoutine = () => {
  return (
    <>
      <h1 className="text-xl mb-5 mt-12 font-semibold dark:text-white text-gray-800">
        {couseClassRoutineData.title}
      </h1>
      <table className="border table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-center">দিন</th>
            <th className="px-4 py-2 text-center">ক্লাস</th>
          </tr>
        </thead>
        <tbody>
          {couseClassRoutineData.classRoutine?.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-center">{item.day}</td>
              <td className="border px-4 py-2 text-center">
                {item.classCount}
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={2} className="border px-4 py-2 text-center">
              {couseClassRoutineData.description}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ClassRoutine;
