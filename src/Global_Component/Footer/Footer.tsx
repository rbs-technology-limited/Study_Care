import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CButton, CInput } from "@/Shared";
import { teal } from "@/Constant/Custom-Color";
import footerImage1 from "public/Asset/svg/footer_image1.svg";
import footerImage2 from "public/Asset/svg/footer_image2.svg";
import footerImage3 from "public/Asset/svg/footer_image3.svg";
import footerImage4 from "public/Asset/svg/footer_image4.svg";
import { footerData, footerRoutes } from "@/Content";
import { IconType } from "react-icons/lib";

const Footer = () => {
  interface IRoute {
    title: string;
  }

  interface IFooterRoutes {
    title: string;
    routes: IRoute[];
  }

  interface ISocial {
    link: string;
    icon: IconType;
  }

  // interface IFooterData {
  //   details: {
  //     icon: StaticImageData;
  //     title: string;
  //     description: string;
  //   };
  //   footerRoutes: IFooterRoutes[];
  //   social: ISocial[];
  // }

  return (
    <section className="overflow-hidden mx-auto ">
      <div className="relative pt-9">
        <div className="bg-custom-teal dark:bg-dark-teal absolute left-[-1rem] bottom-[-9rem] h-[54rem] z-[-5] w-[100%] rotate-[-10deg] rounded-[80px]"></div>
        <Image
          src={footerImage1}
          alt="footer image"
          width={150}
          height={100}
          className="absolute left-28 top-[9rem] z-[5] hidden lg:block"
          data-aos="zoom-in"
        />
        <Image
          src={footerImage2}
          alt="footer image"
          width={150}
          height={100}
          className="absolute left-[20rem] top-[4rem]  z-[-5]  hidden lg:block"
          data-aos="zoom-in"
        />
        <Image
          src={footerImage3}
          alt="footer image"
          width={150}
          height={80}
          className="absolute left-0 bottom-0 z-[5] hidden lg:block"
        />
        <Image
          src={footerImage4}
          alt="footer image"
          width={150}
          height={80}
          className="absolute right-0 bottom-0 z-[0] hidden lg:block"
        />
        {/* subscribe newsletter */}
        <section className="container mx-auto px-8 md:mt-[7rem] lg:mt-[12rem]">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-3xl text-center">
              {footerData?.subscription?.title}
            </h3>
            <p className="my-9 w-full md:w-6/12 text-center">
              {footerData?.subscription?.description}
            </p>
            <div className="relative w-full md:w-6/12">
              <CInput
                type="text"
                placeholder={footerData?.subscription.placeholder}
                // className={`dark:${styles.inputPlaceholder} w-full p-2 pr-16 relative border border-rgba(0, 0, 0, 0.42) focus:outline-0 rounded dark:text-white text-black dark:bg-transparent`}
              />
              <CButton
                customClass="absolute bottom-0 right-2 top-2 bg-button-teal text-white px-4  rounded w-28 h-7"
                variant="solid"
                color={teal}
              >
                {footerData?.subscription.button1}
              </CButton>
            </div>
          </div>

          {/* footer route portion */}
          <div className="grid grid-cols-12 mt-28 pb-12">
            <div className="col-span-12 md:col-span-10">
              <div className="grid md:grid-cols-4 gap-3 px-3 py-4 justify-center">
                <div className="">
                  <Image
                    src={footerData.details.icon}
                    alt="company logo"
                    height={350}
                    width={300}
                  />
                  <p className="my-2">{footerData.details.description}</p>
                  <p>
                    &copy; {footerData.details.title} {new Date().getFullYear()}
                  </p>
                </div>
                {footerRoutes.map((route: IFooterRoutes) => (
                  <div key={route.title}>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-button-teal">
                        {route.title}
                      </h3>
                      {route.routes.map((routeItem: IRoute) => (
                        <p key={routeItem.title} className="py-2">
                          {routeItem.title}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* social links portion */}
            <div className="col-span-12 md:col-span-2 items-center">
              <div className="grid grid-cols-4 py-7">
                {footerData.social.map((sLink: ISocial) => (
                  <div key={sLink.link} className="cursor-pointer">
                    <Link
                      href={{ pathname: sLink.link }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {<sLink.icon color={teal} />}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Footer;
