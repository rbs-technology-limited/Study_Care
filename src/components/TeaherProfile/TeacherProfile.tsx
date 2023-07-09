import { singleTeacherData } from "@/Content";
import { CButton, CInput } from "@/Shared";
import Image from "next/image";

const TeacherProfile = () => {
  const {
    name,
    designation,
    image,
    phone,
    email,
    address,
    educations,
    experiences,
  } = singleTeacherData;

  const educationContents = educations.map((education, index) => {
    const isFirstElement = index === 0;
    const conditions = !isFirstElement
      ? "border-b-[.093rem]"
      : "border-t-[.093rem] border-b-[.093rem]";
    return (
      <div key={education.id} className={`${conditions} border-dashed`}>
        <p className="text-sm  dark:text-white mt-2">
          <span className="font-bold">ডিগ্রিঃ</span> {education.degree}
        </p>
        <p className="text-sm  dark:text-white">
          <span className="font-bold">শিক্ষাপ্রতিষ্ঠানঃ</span>{" "}
          {education.institute}
        </p>
        <p className="text-sm  dark:text-white mb-2">
          <span className="font-bold">বিষয়ঃ</span> {education.subject}
        </p>
      </div>
    );
  });

  const experiencesContents = experiences.map((experience, index) => {
    const isFirstElement = index === 0;
    const conditions = !isFirstElement
      ? "border-b-[.093rem]"
      : "border-t-[.093rem] border-b-[.093rem]";
    return (
      <div key={experience.id} className={`${conditions} border-dashed`}>
        <p className="text-sm  dark:text-white mt-2">
          <span className="font-bold">পদবীঃ</span> {experience.designation}
        </p>
        <p className="text-sm  dark:text-white">
          <span className="font-bold">প্রতিষ্ঠানঃ</span> {experience.institute}
        </p>
        <p className="text-sm  dark:text-white mb-2">
          <span className="font-bold">কাজের সময়কালঃ</span> {experience.duration}
        </p>
      </div>
    );
  });

  return (
    <section className="container mx-auto px-4 md:px-16 py-8">
      {/*  search part  */}
      <div className="flex justify-end">
        <div className="w-full md:w-2/4 lg:w-1/3 flex flex-col md:flex-row gap-2 md:items-center">
          <CInput mb="0" placeholder="Search" />
          <CButton variant="solid" color="teal" btnTitle="Search" />
        </div>
      </div>
      {/* main part */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-2 my-5 text-gray-600 text-sm">
        {/* left side */}
        <div className="col-span-1 md:col-span-2">
          {/* image with details */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div>
              <Image src={image} alt="teacher image" width={200} height={200} />
            </div>
            <div>
              <p className="dark:text-white">
                <span className="font-bold">নামঃ</span> {name}
              </p>
              <p className="dark:text-white">
                <span className="font-bold">পদবীঃ</span> {designation}
              </p>
              <p className="dark:text-white">
                <span className="font-bold">মোবাইলঃ</span> {phone}
              </p>
              <p className="dark:text-white">
                <span className="font-bold">ইমেইলঃ</span> {email}
              </p>
              <p className="dark:text-white">
                <span className="font-bold">ঠিকানাঃ</span> {address}
              </p>
            </div>
          </div>

          {/* right side for small devices */}
          <div className="col-span-1 sm:block md:hidden mt-7">
            <p className="font-bold p-3 text-gray-800 dark:text-white border-[0.0937rem] rounded-md border-button-teal">
              ফেরদৌস45
            </p>
          </div>

          {/* education part */}
          <div className="my-7">
            <h1 className="text-xl text-gray-800 dark:text-white font-bold my-2">
              শিক্ষাগত যোগ্যতা
            </h1>
            {educationContents}
          </div>

          {/* experiences part */}
          <div>
            <h1 className="text-xl text-gray-800 dark:text-white font-bold my-2">
              পেশাগত অভিজ্ঞতা
            </h1>
            {experiencesContents}
          </div>
        </div>

        {/* right side */}
        <div className="hidden md:block col-span-1">
          <p className="font-bold p-3 text-gray-800 dark:text-white border-[0.0937rem] rounded-md border-button-teal">
            ফেরদৌস45
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeacherProfile;
