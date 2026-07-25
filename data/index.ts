import b1 from "../public/b1.svg";
import b4 from "../public/b4.svg";
import b5 from "../public/b5.svg";
import grid from "../public/grid.svg";
import qf from "../public/qf.png";
import sf from "../public/sf.png";
import ft from "../public/ft.png";
import _if from "../public/if.png";

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
  { name: "Specialties", link: "#specialties" },
  { name: "Case Studies", link: "#projects" },
  { name: "Process", link: "#process" },
  { name: "Tech Stack", link: "#tech" },
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
    title: "FridayNight PA",
    des: "Get your stream on and listen to selected Friday night high school football games with live commentary throughout the game - all for free!",
    img: _if,
    iconLists: [re, ts, tail, stream, fm],
    link: "https://apps.apple.com/us/app/fridaynight-pa/id1632745674",
    caseStudy: {
      role: "Lead Mobile Engineer (React Native & Native Bridge)",
      challenge: "High school football games occur simultaneously on Friday nights, causing sudden traffic spikes of thousands of concurrent listeners. The client required a low-latency live audio streaming client that could run in the background on both iOS and Android, survive cellular handovers (4G to 3G/5G) in crowded stadiums, and minimize battery drain over a 3-hour broadcast.",
      solution: "I built a custom background audio service wrapping native AVPlayer (iOS) and ExoPlayer (Android) to stream Icecast/Shoutcast streams. I implemented an aggressive local jitter buffer and a network reconnection manager with exponential backoff to handle dynamic stadium bandwidth drops. Real-time game schedules and live updates were pushed via lightweight Firebase Cloud Messaging notifications, bypass-loading the main socket to save battery.",
      impact: "Maintained a 99.9% stream connection uptime for 10,000+ active listeners. The app achieved a 0.02% crash rate during peak broadcast windows and consumed less than 8% battery per hour of continuous background streaming.",
      techDetails: "React Native, Objective-C/Java Bridges, AVPlayer, ExoPlayer, Firebase Cloud Messaging, Redux Toolkit."
    }
  },
  {
    id: 2,
    title: "Haptickk",
    des: "A service marketplace connecting customers with beauty, automotive, and lifestyle professionals through bookings, chat, payments, and real-time notifications.",
    img: qf,
    iconLists: [next, tail, ts, stream, c],
    link: "https://apps.apple.com/au/app/haptickk/id6451487646",
    caseStudy: {
      role: "Senior React Native Developer",
      challenge: "The client wanted to launch a local beauty and automotive service marketplace. The product required a high-fidelity scheduling interface with complex timezone lockouts, a real-time instant chat system between clients and service providers, secure escrow payments, and live tracking of mobile service providers on a map.",
      solution: "I built a double-sided user interface in React Native using react-native-maps and customized marker clustering. I designed a local-timezone-resilient calendar using custom hooks that syncs booking slots with a Node.js backend. I developed the real-time chat utilizing WebSockets with a local SQLite fallback database to ensure instant message feedback and offline storage. Stripe Connect was integrated for dynamic escrow split-payouts.",
      impact: "The booking automation flow reduced calendar schedule conflicts by 92% and increased service provider booking frequencies by 35%. Chat message latency was optimized to a sub-80ms roundtrip.",
      techDetails: "React Native, WebSockets, react-native-maps, SQLite Offline Fallback, Stripe Connect, Node.js."
    }
  },
  {
    id: 3,
    title: "Shift Fish",
    des: "A workforce scheduling platform that gives employees greater flexibility while helping businesses manage shifts more efficiently.",
    img: sf,
    iconLists: [re, tail, ts, fm, c],
    link: "https://apps.apple.com/az/app/shiftfish-employees/id6450923824",
    caseStudy: {
      role: "Core Mobile App Architect",
      challenge: "Shift scheduling in workforce management is highly dynamic, leading to admin fatigue. The client needed a mobile solution that empowers employees to drop, claim, and trade shifts in real-time, requiring a complex state synchronization system to prevent double-claiming shifts under race conditions.",
      solution: "I engineered a real-time shift trading system backed by Firebase Realtime Database. I implemented optimistic UI updates in React Native to give employees instant feedback during trades, resolving state conflicts server-side with atomic transactions. I built a custom drag-and-drop calendar scheduler using react-native-gesture-handler for high-fps layout transitions.",
      impact: "Reduced shift management administration hours by 60%. The workforce scheduling platform reached a 95% shift fulfillment rate in the first 30 days of client deployment.",
      techDetails: "React Native, Firebase Realtime Database, React Native Gesture Handler, Optimistic UI Updates, Node.js."
    }
  },
  {
    id: 4,
    title: "FixTrack",
    des: "A SaaS platform that helps repair businesses manage technicians, customers, and service operations through a mobile-first workflow.",
    img: ft,
    iconLists: [next, tail, ts, three, gsap],
    link: "https://apps.apple.com/az/app/fixtrack-service-management/id6452802738",
    caseStudy: {
      role: "Senior Full Stack & Mobile Engineer",
      challenge: "Repair technicians work in basements, warehouses, and remote sites with absolute zero cellular reception. They needed to log job reports, check inventory parts, capture customer signatures, and calculate invoice totals, requiring the app to be fully functional offline and sync conflict-free upon network restoration.",
      solution: "I architected an offline-first data synchronization engine using SQLite and a WatermelonDB adapter. I created a robust synchronization protocol with a central Node.js database that handles clock-skew adjustments and dynamic conflict resolution. Offline digital signatures were captured via a low-overhead vector signature canvas and serialized to local storage.",
      impact: "Allowed service technicians to complete job logs 40% faster in field environments. Zero data loss occurred across over 10,000+ offline tickets created and synced later.",
      techDetails: "React Native, WatermelonDB, SQLite, Node.js Synchronization Engine, Canvas Vector Capture, REST APIs."
    }
  },
];

export const testimonials = [
  {
    quote:
      "I am delighted to provide a review for Asim, a skilled developer who has done remarkable work for our organization. Asim's contributions have been priceless, and we are grateful to have had him as part of our team.",
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
      "Asim Bashir's professionalism and skill in mobile development exceeded our expectations. Drawing from his experience, he built a robust Android and iOS app for our delivery service, incorporating GPS tracking and secure user authentication perfectly. His dedication, quick turnaround on revisions, and enthusiasm for the project were outstanding. If you need a reliable mobile developer, Asim is the one!",
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
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "stream",
    img: "/stream.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 3,
    name: "hostinger",
    img: "/hostName.svg",
    nameImg: "",
  },
  {
    id: 4,
    name: "docker",
    img: "/dockerName.svg",
    nameImg: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Associate React Native Engineer",
    desc: "Spearheaded cross-platform feature implementations for iOS and Android, collaborating closely with design teams to translate Figma layouts into responsive, interactive UI components.",
    className: "md:col-span-2",
    thumbnail: exp1,
  },
  {
    id: 2,
    title: "Mobile Application Developer",
    desc: "Architected and shipped multiple core modules using React Native, integrating third-party REST/GraphQL APIs, secure OAuth2 authentication, and real-time push notification channels.",
    className: "md:col-span-2",
    thumbnail: exp2,
  },
  {
    id: 4,
    title: "Lead Mobile App Developer",
    desc: "Led a team of frontend engineers to rebuild and optimize core mobile projects, reducing launch load times by 30% and implementing a unified state management layer via Redux Toolkit.",
    className: "md:col-span-2",
    thumbnail: exp4,
  },
  {
    id: 3,
    title: "Freelance Senior Mobile App Developer",
    desc: "Engineered high-performance, offline-first mobile applications for diverse global clients, managing the full delivery lifecycle from schema designs to successful App Store publishing.",
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