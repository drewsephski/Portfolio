const config = {
  title: "Drw Sepeczi | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Drew, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Drew, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Drew",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Drew Sepeczi",
  email: "drewsepeczi@gmail.com",
  site: "https://deepseekdrew.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.webp";
  },
  social: {
    twitter: "https://x.com/drewsepeczi",
    linkedin: "https://www.linkedin.com/in/drewsepeczi/",
    instagram: "https://www.instagram.com/drew.sepeczi",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/drewsephski",
  },
};
export { config };
