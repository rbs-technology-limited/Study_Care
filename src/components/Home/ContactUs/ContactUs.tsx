import { contactUsData } from "@/Content";
import Image, { StaticImageData } from "next/image";
import line from "public/Asset/image/line.svg";
import shape from "public/Asset/svg/contactUs/small_shape.svg";
import contactImage1 from "public/Asset/svg/contact_us_image1.svg";

const ContactUs = () => {
  interface IContact {
    id: number;
    icon: StaticImageData;
    title: string;
    data: string;
  }
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center my-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            {contactUsData?.title}
          </h1>
          <Image src={line} alt="line" width={152} height={13} />
        </div>
        {/* image and contact details part */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          {/* image part */}
          <div className="p-12 relative" data-aos="fade-right">
            <div className="basis-6/12  mx-auto rounded-2xl overflow-hidden ">
              <Image
                src={contactImage1}
                alt="contact image"
                width={450}
                height={300}
                className="object-cover object-center transform hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="absolute left-[1rem] top-[1rem] z-[-1]">
              <Image
                src={shape}
                alt="dotted square shape"
                width={80}
                height={80}
              />
            </div>
          </div>
          {/* details part */}
          <div className="basis-6/12" data-aos="fade-left">
            <div className="flex flex-col gap-y-8 md:py-12 ">
              {contactUsData?.infos.map((item: IContact) => (
                <div className="flex items-center gap-3" key={item.id}>
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3 className="text-md font-bold">{item.title}</h3>
                    <p>{item.data}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* left blur */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1BE1FF] opacity-40 blur-[100px] z-10"></div>
      {/* right blur */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FBC131] opacity-40 blur-[100px] z-10"></div>
    </section>
  );
};

export default ContactUs;
