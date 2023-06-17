import addressImage from "public/Asset/svg/contactUs/address_image1.svg";
import addressImage2 from "public/Asset/svg/contactUs/address_image2.svg";
import callImage from "public/Asset/svg/contactUs/call.svg";
import emailImage from "public/Asset/svg/contactUs/email.svg";

const contactUsData = {
  title: "যোগাযোগ করুন",
};

export const contactInfos = [
  {
    id: 1,
    icon: callImage,
    title: "কল করুন:",
    data: "+৮৮০ ১৭১১ ১১১ ১১১",
  },
  {
    id: 2,
    icon: emailImage,
    title: "ইমেইল:",
    data: "info@studycare.com",
  },
  {
    id: 3,
    icon: addressImage,
    title: "অফিস ঠিকানা:",
    data: "হাউস- ৫৪/এ, রোড-১৩৩, রুম নং: ৩০২, গুলশান-১, ঢাকা-১২১২",
  },
  {
    id: 4,
    icon: addressImage2,
    title: "অফিস ঠিকানা ২:",
    data: "হাউস- ৫৪/এ, রোড-১৩৩, রুম নং: ৩০২, গুলশান-১, ঢাকা-১২১২",
  },
];

export default contactUsData;
