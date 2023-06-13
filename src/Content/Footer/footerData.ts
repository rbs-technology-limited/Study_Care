import companyLogo from "public/Asset/Logo.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const footerData = {
  details: {
    icon: companyLogo,
    title: "স্টাডি কেয়ার",
    description: "অনলাইনে পড়ার জন্য সেরা স্থান",
  },
  subscription: {
    title: "আমাদের নিউজলেটারে সদস্যতা নিন",
    description:
      "লোরেম ইপসাম ডলর সিট আমেট কনসেকটেতুর, অদিপিসিং এলিট। কুইদেম ডলর কুম্কুই ইল্লো এরর ইদ বিয়াতে ভেনিয়াম ভলুপটাটিবিস রেকুসান্ডে,ডিগ্নিসিমোস উন্দে!",
    placeholder: "আপনার ইমেইল লিখুন",
    button1: "সাবস্ক্রাইব",
  },
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

export const footerRoutes = [
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
];

export default footerData;
