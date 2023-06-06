import { teal } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";

export default function FreeNotes() {
    return (
        <div
            className=" container mx-auto px-4 py-8 bg-white justify-center items-center flex "

        >
            <div className="inline-block w-[80%]  relative z-10  bg-black  rounded-2xl justify-center items-center overflow-hidden">
                <div
                    className="flex flex-col gap-4 relative justify-center items-center"
                >
                    <h1
                        className="text-white text-[2.2rem] font-bold text-center py-2 mt-4"
                    >  Need the best teacher&apos;s class notes
                        and <br /> lecture sheets?</h1>
                    <CButton variant="solid" color={teal} textUpperCased>
                        Download
                    </CButton>
                    <div
                        className="after:absolute after:top-0 after:left-0 after:w-[298px] after:h-[298] after:bg-[rgba(251, 193, 49, 0.5)] after:opacity-40 blur-[150px] "
                    />
                </div>
            </div>
        </div>
    )
}
