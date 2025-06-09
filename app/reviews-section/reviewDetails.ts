import { StaticImageData } from "next/image";
import shreyansh from "../../public/shreyansh.jpg";
import saswat from "../../public/saswat.jpg";
import laxmi from "../../public/laxmi.jpg";
import kaustav from "../../public/kaustav.jpg";
import subhasish from "../../public/subhasish.jpg";
import subhankar from "../../public/subhankar.jpg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Subhasish R.",
    role: "Product Designer",
    company: "Tech Vision",
    profileImg: subhasish,
    testimonial:
      "Suman is seriously one of the best frontend developers I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Subhankar M.",
    role: "Founder",
    company: "Crown Branding Agency",
    profileImg: subhankar,
    testimonial:
      "Suman's work is truly outstanding, and I can't recommend him enough! He completely transformed our branding agency's website. Since launch, we've seen a significant jump in website traffic and, crucially, conversions.",
  },
  {
    name: "Shreyansh S.",
    role: "CEO",
    company: "Sahoo Digital Sol.",
    profileImg: shreyansh,
    testimonial:
      "Outstanding professional, developed our startup's website and delivered it in a very short time and with high quality.",
  },
  {
    name: "Kaustav D.",
    role: "Senior Executive R&D",
    company: "HiTech Formulation",
    profileImg: kaustav,
    testimonial:
      "Suman is hardworking and has great sense of ownership. He was able to contribute in engineering excellent user interfaces and user experiences. I’m confident he will be a great asset to any engineering team.",
  },
  {
    name: "Laxminarayan D.",
    role: "Senior Flutter Developer",
    company: "Motorola",
    profileImg: laxmi,
    testimonial:
      "I had I highly recommend him. He consistently delivered high-quality code, and brought a proactive and creative approach to problem-solving.",
  },
  {
    name: "Saswat R.",
    role: "Sales Specialist",
    company: "Cognizfy",
    profileImg: saswat,
    testimonial:
      "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  },
  
];
