const MENU_LIST = [
  { text: "হোম", href: "/" },
  { text: "সেবা", href: "/services" },
  {
    text: "কোর্সসমূহ",
    subMenu: [
      {
        id: 1,
        text: "৬ষ্ঠ শ্রেণী",
        href: "/courses/12",
      },
      {
        id: 2,
        text: "৭ম শ্রেণী",
        href: "/courses/12",
      },
      {
        id: 3,
        text: "৮ম শ্রেণী",
        href: "/courses/12",
      },
      {
        id: 4,
        text: "৯ম শ্রেণী",
        href: "/courses/12",
      },
      {
        id: 5,
        text: "১০ম শ্রেণী",
        href: "/courses/12",
      },
      {
        id: 6,
        text: "একাদশ শ্রেণী",
        href: "/courses/11",
      },
      {
        id: 7,
        text: "দ্বাদশ শ্রেণী",
        href: "/courses/12",
      },
    ],
  },
  { text: "আমাদের পণ্যসমূহ", href: "/products" },
  { text: "আমাদের সম্পর্কে", href: "/about" },
  { text: "যোগাযোগ", href: "/contact" },
];

export default MENU_LIST;
