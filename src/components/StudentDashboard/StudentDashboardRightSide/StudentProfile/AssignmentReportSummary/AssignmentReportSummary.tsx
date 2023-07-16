import React from "react";
import Chart from "react-apexcharts";

const AssignmentReportSummary = () => {
  const data = {
    participateCourseCount: 10,
    totalCourseCount: 20,
    timelySubmissionCount: 5,
    totalAssignmentCount: 15,
    totalAssignmentMarks: 100,
    getTotalAssignmentMarks: 30,
  };

  return (
    <main>
      <h1 className="text-xl font-bold text-gray-600">
        অ্যাসাইনমেন্ট রিপোর্ট সারসংক্ষেপ
      </h1>
      <section className="my-5">
        <div className="border md:w-3/5 w-full p-5 rounded">
          <section className="mb-5 flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="flex justify-between w-full">
              <div className="w-full">
                <p className="text-sm text-gray-600">অংশগ্রহণ</p>
                <p className="text-sm text-gray-600">সময়মত জমা</p>
                <p className="text-sm text-gray-600">প্রাপ্ত নম্বর</p>
              </div>
              <div className="w-full">
                <p className="text-sm text-gray-600">
                  {data.participateCourseCount}টি/ {data.totalCourseCount}টি
                </p>
                <p className="text-sm text-gray-600">
                  {data.timelySubmissionCount}টি
                </p>
                <p className="text-sm text-gray-600">
                  {data.getTotalAssignmentMarks}/ {data.totalAssignmentMarks}
                </p>
              </div>
            </div>
            {/* //round circle for percentage of assignment marks */}
            <section>
              <Chart
                options={{
                  chart: {
                    height: 180,
                    type: "radialBar",
                  },
                  plotOptions: {
                    radialBar: {
                      hollow: {
                        size: "50%",
                      },
                      dataLabels: {
                        value: {
                          show: false,
                        },
                      },
                    },
                  },
                  labels: [
                    `${
                      (data.getTotalAssignmentMarks /
                        data.totalAssignmentMarks) *
                      100
                    }%`,
                  ],
                }}
                series={[
                  (data.getTotalAssignmentMarks / data.totalAssignmentMarks) *
                    100,
                ]}
                type="radialBar"
                width="180"
              />
            </section>
          </section>
        </div>
      </section>
    </main>
  );
};

export default AssignmentReportSummary;
