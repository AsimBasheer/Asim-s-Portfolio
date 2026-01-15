import b1 from "../public/b1.svg";
import b4 from "../public/b4.svg";
import b5 from "../public/b5.svg";
import grid from "../public/grid.svg";
import qf from "../public/qf.png";
import sf from "../public/sf.png";
import ft from "../public/ft.png";
import _if from "../public/if.png";
import umrah from "../public/umrah.png";
import ifix from "../public/ifix.png";
import ifixamerica from "../public/ifixamerica.png";
import bigbanyan from "../public/bigbanyan.png";
import shiftfhish from "../public/shiftfhish.png";
import fixtrack from "../public/fixtrack.png";

import re from "../public/re.svg";
import tail from "../public/tail.svg";
import ts from "../public/ts.svg";
import three from "../public/three.svg";
import fm from "../public/fm.svg";
import next from "../public/next.svg";
import stream from "../public/stream.svg";
import c from "../public/c.svg";
import gsap from "../public/gsap.svg";
import exp1 from "../public/exp1.svg";
import exp2 from "../public/exp2.svg";
import exp3 from "../public/exp3.svg";
import exp4 from "../public/exp4.svg";
import git from "../public/git.svg";
import twit from "../public/twit.svg";
import link from "../public/link.svg";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: b1,
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: grid,
    spareImg: b4,
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: b5,
    spareImg: grid,
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "QualityFriend Hotel Tools - Qualityfriend Mobile App",
    des: "This app is designed for users of Qualityfriend—a product of Holidayfriend.solutions—who want to access our web-based social intranet solution for hotels and hospitality businesses on their mobile devices.",
    img: qf,
    iconLists: [re, tail, ts, three, fm],
    link: "https://apps.apple.com/us/app/qualityfriend-hotel-tools/id1632745674",
  },
  {
    id: 2,
    title: "ShiftFish Employees - Your Schedule, Your Choice",
    des: "Shift Fish puts the power &amp; flexibility of scheduling in the hands of team members. Shift Fish eliminates the need for time off requests &amp; availability changes.",
    img: sf,
    iconLists: [next, tail, ts, stream, c],
    link: "https://apps.apple.com/au/app/shiftfish-employees/id6451487646",
  },
  {
    id: 3,
    title: "Fixtrack Service Managment",
    des: "Fixtrack, Fixtrack Service Management, Repairing, Fixtrack Device, Service, Technician. FixTrack is a SAAS platform that allows repair companies to register on our platform and add their customers and technicians to their portal.",
    img: ft,
    iconLists: [re, tail, ts, three, c],
    link: "https://apps.apple.com/az/app/fixtrack-service-management/id6450923824",
  },
  {
    id: 4,
    title: "ifixAmerica",
    des: "I fix America app will serve as a platform to schedule and manage times for jobs for technicians in the repair and service industry. Technicians can view and accept jobs directly through the app, while managers, well scheduled jobs and assigned jobs to technicians.",
    img: _if,
    iconLists: [next, tail, ts, three, gsap],
    link: "https://apps.apple.com/az/app/ifixamerica/id6452802738",
  },
];

export const testimonials = [
  {
    quote:
      "I am delighted to provide a review for Asim, a skilled developer who has done remarkable work for our organization. Asim's contributions have been priceless, and we are grateful to have had her as part of our team.",
    name: "Chris Johncke",
    title: "CEO IFIXYOURI CORP",
  },
  {
    quote:
      "Working with Asim Bashir on our mobile app project was a game-changer. With over 5 years of experience in mobile development, his expertise in both iOS and Android platforms shone through. He was professional, responsive, and delivered a high-quality, user-friendly app ahead of schedule. Asim's attention to detail and proactive suggestions truly elevated our product. Highly recommend him for any mobile development needs!",
    name: "Sarah Thompson",
    title: "CEO of HealthTrack Pro"
  },
  {
    quote:
      "Asim Bashir brought our e-commerce mobile app vision to life flawlessly. His rich experience in mobile development ensured smooth integration of complex features like real-time payments and push notifications. He communicated clearly throughout, met every deadline, and provided valuable insights that improved user experience. The app has received rave reviews from our customers. Asim is a true professional!",
    name: "David Chen",
    title: "Founder of ShopSwift Mobile"
  },
  {
    quote:
      "I hired Asim for a cross-platform mobile app, and his deep knowledge from over 5 years of experience made all the difference. He handled everything from UI/UX design tweaks to backend integration seamlessly. Asim was always available for feedback, delivered bug-free code, and helped us launch on both App Store and Google Play without issues. Exceptional work – we'll definitely collaborate again!",
    name: "Emma Rodriguez",
    title: "Product Manager at FitLife Apps"
  },
  {
    quote:
      "Asim Bashir's professionalism and skill in mobile development exceeded our expectations. Drawing from his  experience, he built a robust Android and iOS app for our delivery service, incorporating GPS tracking and secure user authentication perfectly. His dedication, quick turnaround on revisions, and enthusiasm for the project were outstanding. If you need a reliable mobile developer, Asim is the one!",
    name: "Michael Patel",
    title: "Director of QuickDeliver Solutions"
  },
  {
    quote:
      "Collaborating with Asim on our social networking app was an absolute pleasure. His extensive experience in mobile development allowed him to tackle challenging features like real-time chat and media sharing with ease. Asim was prompt, creative in problem-solving, and committed to delivering a polished, high-performance app. The results speak for themselves – increased user engagement and positive feedback all around!",
    name: "Lisa Nguyen",
    title: "Co-Founder of ConnectHub"
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: shiftfhish,
  },
  {
    id: 2,
    name: "appwrite",
    img: ifix,
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: ifixamerica,
  },
  {
    id: 4,
    name: "stream",
    img: bigbanyan,
  },
  {
    id: 5,
    name: "docker.",
    img: fixtrack,
  },
  {
    id: 6,
    name: "docker.",
    img: umrah,
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Android & React Native Developer Junior",
    desc: "Developed and maintained mobile applications for both Android and iOS platforms using React Native and Android Studio.",
    className: "md:col-span-2",
    thumbnail: exp1,
  },
  {
    id: 2,
    title: "Mobile App Dev - TechXpert",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: exp2,
  },
  {
    id: 4,
    title: "Lead Mobile App Developer",
    desc: "Developed and maintained mobile applications for both Android and iOS platforms using React Native and Android Studio.",
    className: "md:col-span-2",
    thumbnail: exp4,
  },
  {
    id: 3,
    title: "FreelanceSenior Mobile App Developer",
    desc: "Developed and maintained mobile applications for both Android and iOS platforms using React Native and Android Studio.",
    className: "md:col-span-2",
    thumbnail: exp3,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: git,
    link: "https://github.com/AsimBasheer",
  },
  {
    id: 2,
    img: twit,
    link: "https://twitter.com/asimmehar124",
  },
  {
    id: 3,
    img: link,
    link: "https://www.linkedin.com/in/asim-bashir-7a967b18b",
  },
];