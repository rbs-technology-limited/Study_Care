import { teal } from "@/Constant/Custom-Color";
import { freeNotesContent } from "@/Content";
import { CButton } from "@/Shared";

export default function FreeNotes() {
  return (
    <div className=" container mx-auto px-4 py-8 justify-center items-center flex ">
      <div className="inline-block md:w-[80%] relative z-10  dark:bg-black bg-white rounded-2xl justify-center items-center overflow-hidden">
        <div className="flex flex-col gap-4 justify-center items-center py-6">
          <h1 className="dark:text-white text-gray-900 md:text-3xl text-2xl font-bold text-center py-2 mt-4">
            {" "}
           {freeNotesContent.title}
          </h1>
          <CButton variant="solid" color={teal} textUpperCased>
            {freeNotesContent.button1}
          </CButton>
        </div>
        {/* left blur */}
        <div className="absolute bottom-[-5rem] left-[-2rem] w-52 h-52 rounded-full bg-button-teal opacity-40 blur-[100px] z-10"></div>
        {/* right blur */}
        <div className="absolute top-[-5rem] right-[-2rem] w-52 h-52 rounded-full bg-custom-orange opacity-40 blur-[150px] z-10"></div>
      </div>
    </div>
  );
}
