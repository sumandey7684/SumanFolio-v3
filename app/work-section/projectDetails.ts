export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Metaversus",
    description:
      "Metaversus is a modern, interactive web experience built using React, Next 13, Tailwind CSS, and Framer Motion, showcasing smooth animations and sleek futuristic design elements.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/sumandey7684/Metaversus",
    demo: "https://metaversus-ten-ashy.vercel.app/",
    image: require(".//../../public/projects/meta.jpg"),
    available: true,
  },
  {
    id: 1,
    name: "Sumanfolio-v2",
    description:
      "Sumanfolio v2 is a modern, responsive portfolio showcasing my frontend and UI/UX journey, built with SCSS, JavaScript, and Vite for speed, interactivity, and design precision.",
    technologies: ["SCSS", "JavaScript", "HTML5"],
    github: "https://github.com/sumandey7684/SumanFolio-v2",
    demo: "https://sumanfolio.vercel.app/",
    image: require(".//../../public/projects/portfolio.jpg"),
    available: true,
  },
  {
    id: 2,
    name: "Brainwave",
    description:
      "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard.",
    technologies: ["React", "Next.js", "SCSS"],
    github: "https://github.com/sumandey7684/Brainwave",
    demo: "https://brainwave-suman.vercel.app/",
    image: require(".//../../public/projects/brain.jpg"),
    available: true,
  },
  {
    id: 3,
    name: "The Duo Studio",
    description:
      "A website built for a software startup and small business, to showcase their services and mark their online presence.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sumandey7684/Duo-Studio",
    demo: "https://duo-studio-suman.netlify.app/",
    image: require(".//../../public/projects/duo.jpg"),
    available: true,
  },
  {
    id: 4,
    name: "Atomic Health",
    description:
      "Atomic Health blends healthcare and technology to deliver elegant digital experiences, using HTML, CSS, and JavaScript to craft a clean, impactful and user-centered design.",
    technologies: ["Next.js", "Typescript", "Prisma"],
    github: "https://github.com/sumandey7684/Atomic-health",
    demo: "https://atomic-health-suman.netlify.app/",
    image: require(".//../../public/projects/atomic.jpg"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
