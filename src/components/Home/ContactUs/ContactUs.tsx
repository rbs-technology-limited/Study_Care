import Image from "next/image";
import React from "react";
import line from "public/Asset/image/line.svg";
import contactImage1 from "public/Asset/svg/contact_us_image1.svg";
import callImage from "public/Asset/svg/contactUs/call.svg";
import emailImage from "public/Asset/svg/contactUs/email.svg";
import addressImage from "public/Asset/svg/contactUs/address_image1.svg";
import addressImage2 from "public/Asset/svg/contactUs/address_image2.svg";
import shape from "public/Asset/svg/contactUs/small_shape.svg";

const ContactUs = () => {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center my-6">
          <h1 className="text-2xl md:text-3xl font-bold">Contact Us</h1>
          <Image src={line} alt="line" width={152} height={13} />
        </div>
        {/* image and contact details part */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          {/* image part */}
          <div className="p-12 relative">
            <div className="basis-6/12  mx-auto rounded-2xl overflow-hidden ">
              <Image
                src={contactImage1}
                alt="contact image"
                width={450}
                height={300}
                className="object-cover object-center"
              />
            </div>
            <div className="absolute left-[1rem] top-[1rem] z-[-1]">
              <Image src={shape} alt="" width={80} height={80} />
            </div>
          </div>
          {/* details part */}
          <div className="basis-6/12">
            <div className="flex flex-col gap-y-8 md:py-12 ">
              <div className="flex items-center gap-3">
                <Image src={callImage} alt="" width={50} height={50} />
                <div>
                  <h3 className="text-md font-bold">Call Now:</h3>
                  <p>01609132586</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Image src={emailImage} alt="" width={50} height={50} />
                <div>
                  <h3 className="text-md font-bold">Email:</h3>
                  <p>info@rbs.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Image src={addressImage} alt="" width={50} height={50} />
                <div>
                  <h3 className="text-md font-bold">Office Address:</h3>
                  <p>
                    House- 54/A, Road-133, Room no: 302, Gulshan-1, Dhaka-1212
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Image src={addressImage2} alt="" width={50} height={50} />
                <div>
                  <h3 className="text-md font-bold">Office Address 2:</h3>
                  <p>
                    House- 54/A, Road-133, Room no: 302, Gulshan-1, Dhaka-1212
                  </p>
                </div>
              </div>
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
