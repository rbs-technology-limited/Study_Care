import companyLogo from "public/Asset/Logo.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const footerData = {
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
};

export default footerData;
