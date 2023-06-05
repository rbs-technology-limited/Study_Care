import React from "react";
import companyLogo from "public/Asset/Logo.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

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
    icon: React.ReactNode;
  }

  interface IFooterData {
    details: {
      icon: StaticImageData;
      title: string;
      description: string;
    };
    footerRoutes: IFooterRoutes[];
    social: ISocial[];
  }

  const footerData: IFooterData = {
    details: {
      icon: companyLogo,
      title: "Study Care",
      description: "The best place to study online",
    },
    footerRoutes: [
      {
        title: "Company",
        routes: [
          {
            title: "Privacy Policy",
          },
          {
            title: "Careers",
          },
          {
            title: "Refund Policy",
          },
          {
            title: "About Us",
          },
        ],
      },
      {
        title: "Services",
        routes: [
          {
            title: "Free Courses",
          },
          {
            title: "All Courses",
          },
        ],
      },
      {
        title: "Resources",
        routes: [
          {
            title: "Notes and Guides",
          },
          {
            title: "Free Download",
          },
        ],
      },
    ],
    social: [
      {
        link: "https://www.facebook.com/",
        icon: <FaFacebook />,
      },
      {
        link: "https://www.linkedin.com/",
        icon: <FaLinkedin />,
      },
      {
        link: "https://www.twitter.com/",
        icon: <FaTwitter />,
      },
      {
        link: "https://www.instagram.com/",
        icon: <FaInstagram />,
      },
    ],
  };

  return (
    <div className="mt-36 px-8">
      {/* subscribe newsletter */}
      <div className="text-center">
        <h3 className="font-bold text-3xl">Subscribe our newsletter</h3>
        <p className="my-9">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem dolor
          cumque illo error id beatae veniam voluptatibus recusandae,
          dignissimos unde!
        </p>
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter your email"
            className="relative w-6/12"
          />
          {/* <button className="absolute left-0">Subscribe</button> */}
        </div>
      </div>

      {/* footer route portion */}
      <div className="grid grid-cols-12 mt-36">
        <div className="col-span-10">
          <div className="grid grid-cols-4">
            <div className="">
              <Image src={footerData.details.icon} alt="company logo" />
              <p>{footerData.details.description}</p>
              &copy; {footerData.details.title} {new Date().getFullYear()}
            </div>

            {footerData.footerRoutes.map((route: IFooterRoutes) => (
              <div key={route.title} className="">
                <div>
                  <h3 className="text-2xl font-bold ">{route.title}</h3>
                  {route.routes.map((routeItem: IRoute) => (
                    <p key={routeItem.title}>{routeItem.title}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* social links portion */}
        <div className="col-span-2">
          <div className="grid grid-cols-4">
            {footerData.social.map((sLink: ISocial) => (
              <div key={sLink.link}>
                <Link
                  href={{ pathname: sLink.link }}
                  target="_blank"
                  rel="noreferrer"
                >
                  {sLink.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
