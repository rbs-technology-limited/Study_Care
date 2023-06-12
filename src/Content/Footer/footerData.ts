import companyLogo from "public/Asset/Logo.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const footerData = {
  details: {
    icon: companyLogo,
    title: "স্টাডি কেয়ার",
    description: "অনলাইনে পড়ার জন্য সেরা স্থান",
  },
  footerRoutes: [
    {
      title: "কোম্পানি",
      routes: [
        {
          title: "গোপনীয়তা নীতি",
        },
        {
          title: "কর্মসংস্থান",
        },
        {
          title: "মূল্যফিরত নীতি",
        },
        {
          title: "আমাদের সম্পর্কে",
        },
      ],
    },
    {
      title: "সেবা",
      routes: [
        {
          title: "ফ্রি কোর্সসমূহ",
        },
        {
          title: "সমস্ত কোর্সসমূহ",
        },
      ],
    },
    {
      title: "সম্পদসমূহ",
      routes: [
        {
          title: "নোট এবং গাইড",
        },
        {
          title: "ফ্রি ডাউনলোড",
        },
      ],
    },
  ],
  social: [
    {
      link: "https://www.facebook.com/",
      icon: FaFacebook,
    },
    {
      link: "https://www.linkedin.com/",
      icon: FaLinkedin,
    },
    {
      link: "https://www.twitter.com/",
      icon: FaTwitter,
    },
    {
      link: "https://www.instagram.com/",
      icon: FaInstagram,
    },
  ],
  // footerRoutes: [
  //   {
  //     title: "Company",
  //     routes: [
  //       {
  //         title: "Privacy Policy",
  //       },
  //       {
  //         title: "Careers",
  //       },
  //       {
  //         title: "Refund Policy",
  //       },
  //       {
  //         title: "About Us",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Services",
  //     routes: [
  //       {
  //         title: "Free Courses",
  //       },
  //       {
  //         title: "All Courses",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Resources",
  //     routes: [
  //       {
  //         title: "Notes and Guides",
  //       },
  //       {
  //         title: "Free Download",
  //       },
  //     ],
  //   },
  // ],
  // social: [
  //   {
  //     link: "https://www.facebook.com/",
  //     icon: FaFacebook,
  //   },
  //   {
  //     link: "https://www.linkedin.com/",
  //     icon: FaLinkedin,
  //   },
  //   {
  //     link: "https://www.twitter.com/",
  //     icon: FaTwitter,
  //   },
  //   {
  //     link: "https://www.instagram.com/",
  //     icon: FaInstagram,
  //   },
  // ],
};

export default footerData;
