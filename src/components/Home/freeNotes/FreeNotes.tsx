import { teal } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";

export default function FreeNotes() {
    return (
        <div
            className=" container mx-auto px-4 py-8 justify-center items-center flex "

        >
            <div className="inline-block w-[80%]  relative z-10  dark:bg-black bg-white rounded-2xl justify-center items-center overflow-hidden">
                <div
                    className="flex flex-col gap-4 justify-center items-center py-6"
                >
                    <h1
                        className="dark:text-white text-gray-900 text-[2.2rem] font-bold text-center py-2 mt-4"
                    >  Need the best teacher&apos;s class notes
                        and <br /> lecture sheets?</h1>
                    <CButton variant="solid" color={teal} textUpperCased>
                        Download
                    </CButton>

                </div>
                {/* left blur */}
                <div className="absolute bottom-[-5rem] left-[-2rem] w-52 h-52 rounded-full bg-[#1BE1FF] opacity-40 blur-[100px] z-10">
                </div>
                {/* right blur */}
                <div className="absolute top-[-5rem] right-[-2rem] w-52 h-52 rounded-full bg-[#FBC131] opacity-40 blur-[150px] z-10">
                </div>
            </div>
        </div>
    )
}
