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
    <main className="mt-16">
      <h1 className="text-xl font-bold text-gray-600 dark:text-white">
        অ্যাসাইনমেন্ট রিপোর্ট সারসংক্ষেপ
      </h1>
      <section className="my-5">
        <div className="border md:w-3/5 w-full p-5 rounded shadow-md bg-white dark:bg-transparent">
          <section className="mb-5 flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="flex justify-between w-full text-gray-600 dark:text-white">
              <div className="w-full">
                <p className="text-sm">অংশগ্রহণ</p>
                <p className="text-sm">সময়মত জমা</p>
                <p className="text-sm">প্রাপ্ত নম্বর</p>
              </div>
              <div className="w-full">
                <p className="text-sm">
                  {data.participateCourseCount}টি/ {data.totalCourseCount}টি
                </p>
                <p className="text-sm">{data.timelySubmissionCount}টি</p>
                <p className="text-sm">
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
                          show: true,
                        },
                      },
                    },
                  },
                  labels: [
                    // `${
                    //   (data.getTotalAssignmentMarks /
                    //     data.totalAssignmentMarks) *
                    //   100
                    // }%`,
                    "গড় মার্ক",
                  ],
                }}
                series={[
                  (data.getTotalAssignmentMarks / data.totalAssignmentMarks) *
                    100,
                ]}
                type="radialBar"
                width="250"
              />
            </section>
          </section>
        </div>
      </section>
    </main>
  );
};

export default AssignmentReportSummary;
