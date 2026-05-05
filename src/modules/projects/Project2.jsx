import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

import ProjectHris1 from "../projects/Project-hris1";
import ProjectCms from "../projects/Project-cms.jsx";
import ProjectHris3 from "../projects/Project-hris2.jsx";

import faith from "../../assets/Faith.png";

// import seeMoreHris1FullScreen from "../../assets/seeMoreHris1FullScreen.png";
// import seeMoreHris2FullScreen from "../../assets/seeMoreHris2FullScreen.png";
// import seeMoreCmsFullScreen from "../../assets/seeMoreCmsFullScreen.png";

import seeMoreHris1FullScreen from "../../assets/seeMoreHris1.png";
import seeMoreHris2FullScreen from "../../assets/seeMoreCms.png";
import seeMoreCmsFullScreen from "../../assets/seeMoreHris2.png";

// hero image
import project1Thumbnail from "../../assets/Project-1/Thumbnail.webp";
import project2Thumbnail from "../../assets/Project-2/Thumbnail.webp";
import project3Thumbnail from "../../assets/Project-3/Thumbnail.webp";

// see more projects
import seeMoreHris1_2 from "../../assets/seeMoreHris1.2.png";
import seeMoreCms2 from "../../assets/seeMoreCms2.png";
import seeMoreHris2_2 from "../../assets/seeMoreHris2.2.png";

import project1Image1 from "../../assets/Project-1/work-1.jpg";
import project1Image2 from "../../assets/Project-1/work-2.svg";
import project1Image3 from "../../assets/Project-1/work-3.svg";
import project1Image4 from "../../assets/Project-1/work-4.png";
import project1Image5 from "../../assets/Project-1/work-5.jpg";
import project1Image6 from "../../assets/Project-1/work-6.png";
import project1Image7 from "../../assets/Project-1/work-7.png";
import project1Image8 from "../../assets/Project-1/work-8.png";
import project1Image9 from "../../assets/Project-1/work-9.png";
import project1Image10 from "../../assets/Project-1/work-10.png";
import project1Image11 from "../../assets/Project-1/work-11.png";
import project1Image12 from "../../assets/Project-1/work-12.jpg";
import project1Image13 from "../../assets/Project-1/work-13.jpg";
import project1Image14 from "../../assets/Project-1/work-14.png";
import project1Image15 from "../../assets/Project-1/work-15.png";
import project1Image16 from "../../assets/Project-1/work-16.png";
import project1Image18 from "../../assets/Project-1/work-18.jpg";

import project1WebpImage1 from "../../assets/Project-1/WEBP/webp-1.webp";
import project1WebpImage2 from "../../assets/Project-1/WEBP/webp-2.webp";
import project1WebpImage3 from "../../assets/Project-1/WEBP/webp-3.webp";
import project1WebpImage4 from "../../assets/Project-1/WEBP/webp-4.webp";
import project1WebpImage5 from "../../assets/Project-1/WEBP/webp-5.webp";
import project1WebpImage6 from "../../assets/Project-1/WEBP/webp-6.webp";
import project1WebpImage7 from "../../assets/Project-1/WEBP/webp-7.webp";
import project1WebpImage8 from "../../assets/Project-1/WEBP/webp-8.webp";
import project1WebpImage9 from "../../assets/Project-1/WEBP/webp-9.webp";
import project1WebpImage10 from "../../assets/Project-1/WEBP/webp-10.webp";
import project1WebpImage11 from "../../assets/Project-1/WEBP/webp-11.webp";

import project2Image1 from "../../assets/Project-2/work-1.jpg";
import project2Image2 from "../../assets/Project-2/work-2.svg";
import project2Image3 from "../../assets/Project-2/work-3.svg";
import project2Image4 from "../../assets/Project-2/work-4.jpg";
import project2Image5 from "../../assets/Project-2/work-5.jpg";
import project2Image6 from "../../assets/Project-2/work-6.png";
import project2Image7 from "../../assets/Project-2/work-7.png";
import project2Image8 from "../../assets/Project-2/work-8.png";
import project2Image11 from "../../assets/Project-2/work-11.jpg";

import project2Image12 from "../../assets/Project-2/work-12.webp";
import project2Image13 from "../../assets/Project-2/work-13.webp";
import project2Image14 from "../../assets/Project-2/work-14.webp";

import project3Image1 from "../../assets/Project-3/work-1.jpg";
import project3Image2 from "../../assets/Project-3/work-2.svg";
import project3Image3 from "../../assets/Project-3/work-3.svg";
// import project3Image4 from "../../assets/Project-3/work-4.png";
// import project3Image5 from "../../assets/Project-3/work-5.jpg";
import project3Image6 from "../../assets/Project-3/work-6.jpg";
import project3Image7 from "../../assets/Project-3/work-7.jpg";
import project3Image8 from "../../assets/Project-3/work-8.jpg";
import project3Image9 from "../../assets/Project-3/work-9.jpg";
import project3Image10 from "../../assets/Project-3/work-10.png";
import project3Image11 from "../../assets/Project-3/work-11.png";
import project3Image12 from "../../assets/Project-3/work-12.png";
import project3Image14 from "../../assets/Project-3/work-14.jpg";

import project3Image4 from "../../assets/Project-3/work-15.webp";
import project3Image5 from "../../assets/Project-3/work-16.webp";

import project3WebpImage1 from "../../assets/Project-3/WEBP/webp-1.webp";
import project3WebpImage2 from "../../assets/Project-3/WEBP/webp-2.webp";
import project3WebpImage3 from "../../assets/Project-3/WEBP/webp-3.webp";
import project3WebpImage4 from "../../assets/Project-3/WEBP/webp-4.webp";
import project3WebpImage5 from "../../assets/Project-3/WEBP/webp-5.webp";
import project3WebpImage6 from "../../assets/Project-3/WEBP/webp-6.webp";

const contentArray = [
  {
    id: "1",
    // hero section
    title: "Enhanced the HRIS for a more efficient and intuitive workflow.",
    description:
      "I enhanced the company’s HRIS by refining its interface and simplifying workflows, making it easier for employees and administrators to navigate and manage tasks efficiently.",
    image: project1Thumbnail,
    company: "Slashtech Solutions",
    industry: "Information Technology",
    timeline: "Jul - Sep 2023",
    platform: "Web App",
    role: "Product Designer",
    // goal section
    goalImg: project1Image2,
    goalParagraph:
      "The goal is to enhance the overall design and functionality of the HRIS system to make it more intuitive, visually consistent, and user-friendly. Through enhancing the interface, the aim is to improve accessibility, simplify workflows, and ensure that users can efficiently manage HR-related tasks with clarity and ease.",
    // requirements section
    definingTitle: "Problems",
    definingParagraph:
      "These are the key usability and design challenges I identified that impacted the interface's clarity, consistency, and user experience.",
    definingCards: [
      {
        cardId: "01",
        title: "Inconsistent UI & Visual Clutter",
        description:
          "The platform lacked a unified design, with buttons, pagination, and other elements using different styles. Overly bright colors and poor spacing made the interface feel cluttered and visually unbalanced.",
      },
      {
        cardId: "02",
        title: "Inefficient Layout & Navigation Issues",
        description:
          "Poor placement of key elements disrupted the workflow. The search bar and item count weren't intuitive, tables had too many action buttons, and large tables crammed excessive information, causing overload.",
      },
      {
        cardId: "03",
        title: "Readability Challenges & Unclear Terminology",
        description:
          "Weak typographic hierarchy made scanning difficult. Low text contrast reduced readability, and the use of modals limited the capacity for detailed information. Unclear titles and labels caused confusion",
      },
    ],
    // solutions
    solutionTitle: "Solutions",
    solutionParagraph:
      "These are the design improvements I implemented to enhance clarity, reduce clutter, and create a more user-friendly interface.",
    solutionsCards: [
      {
        cardId: "01",
        title: "Standardizing UI  & Simplifying Filters",
        description:
          "I applied a consistent color scheme, unified button styles, and improved contrast. Filters were decluttered by removing unnecessary labels and refining spacing, creating a more cohesive and user-friendly interface.",
      },
      {
        cardId: "02",
        title: "Improving Layout & Accessibility",
        description:
          'I repositioned key elements, placed the search bar where users expect it, replaced multiple action buttons with a "More" button for cleaner tables, and introduced horizontal scrolling for large tables to improve readability.',
      },
      {
        cardId: "03",
        title: "Enhancing Readability & Content Structure",
        description:
          "I refine text styles to establish better hierarchy, enhance contrast, and label clarity. I also replace modals with full pages for more detailed and structured content, resulting in clearer and more organized information.",
      },
    ],
    // implemented
    implementedImg: project1Image3,
    // showcase
    // 1
    showcaseTitle: "Standardizing UI & Simplifying Filters",
    showcaseParagraph:
      "I applied a consistent color scheme, unified button styles, and improved contrast. Filters were decluttered by removing unnecessary labels and refining spacing, creating a more cohesive and user-friendly interface.",
    showcaseImageBefore1: project1WebpImage6,
    showcaseImageAfter1: project1WebpImage5,
    // 2
    showcaseTitle2: "Improving Layout & Navigation",
    showcaseParagraph2:
      'I repositioned key elements, placed the search bar where users expect it, replaced multiple action buttons with a "More" button for cleaner tables, and introduced horizontal scrolling for large tables to improve readability.',
    showcaseImageBefore2: project1WebpImage10,
    showcaseImageBefore2_1: project1WebpImage11,
    showcaseImageAfter2: project1WebpImage3,
    showcaseImageAfter2_1: project1WebpImage1,
    // 3
    showcaseTitle3: "Enhancing Readability & Content Structure",
    showcaseParagraph3:
      "I refine text styles to establish better hierarchy, enhance contrast, and label clarity. I also replace modals with full pages for more detailed and structured content, resulting in clearer and more organized information.",
    showcaseImageBefore3_1: project1WebpImage7,
    showcaseImageAfter3_1: project1WebpImage8,
    showcaseImageBefore3_2: project1Image12,
    showcaseImageAfter3_2: project1Image13,
    // demo
    demoTitle: "Slash HRIS",
    // demoImg: project1Image14,
    demoImg: project1Image18,
    demoImgResponsive: project1Image1,
    // takeaways
    takeAwayList: [
      {
        takeawayPoints:
          "Ensuring consistency by standardizing colors and unifying design elements creates a more structured and visually cohesive interface that enhances usability.",
      },
      {
        takeawayPoints:
          "Improving layout and organization by repositioning key elements and decluttering tables makes navigation more intuitive and interactions more efficient.",
      },
      {
        takeawayPoints:
          "Enhancing readability by defining a clear text hierarchy, improving contrast, and refining labels helps users process information more quickly and accurately.",
      },
    ],

    // more work
    moreWorkList: [
      {
        moreWorkTag1: "MARTECH",
        moreWorkTagDot1: "·",
        moreWorkTag2: "WEB APP",
        moreWorkTitle:
          "Building a CMS to simplify content management & enhance.",
        moreWorkLink: "/view-work/2",
        moreWorkImg: seeMoreCms2,
        moreWorkImgFullScreen: seeMoreCmsFullScreen,
      },
      {
        moreWorkTag1: "HR TECH",
        moreWorkTagDot1: "·",
        moreWorkTag2: "WEB APP",
        moreWorkTitle:
          "Customizing the HRIS to align with client’s needs and branding.",
        moreWorkLink: "/view-work/3",
        moreWorkImg: seeMoreHris2_2,
        moreWorkImgFullScreen: seeMoreHris2FullScreen,
      },
    ],
    viewPrototype: "https://tinyurl.com/slash-hris",
  },
  {
    id: "2",
    // hero section
    title: "Developed a CMS to enable the company’s upcoming market launch.",
    description:
      "I developed a content management system to simplify content creation and management, supporting the company’s successful market launch.",
    image: project2Thumbnail,
    company: "Slashtech Solutions",
    industry: "Information Technology",
    timeline: "Jul - Aug 2023",
    platform: "Web App",
    role: "Product Designer",
    // goal section
    goalImg: project2Image2,
    goalParagraph:
      "The goal is to enhance the overall design and functionality of the HRIS system to make it more intuitive, visually consistent, and user-friendly. Through enhancing the interface, the aim is to improve accessibility, simplify workflows, and ensure that users can efficiently manage HR-related tasks with clarity and ease.",
    // requirements section
    definingTitle: "Requirements",
    definingParagraph:
      "These are the client's requirements to better align the system with their branding, workflows, and operational processes.",
    definingCards: [
      {
        cardId: "01",
        title: "Website-like Navigation Layout",
        description:
          "The CMS needed to have a layout that resembled a website, replacing the sidebar navigation with a top bar for a modern look. This adjustment aimed to improve accessibility and create an enhanced user experience.",
      },
      {
        cardId: "02",
        title: "Adopt Key System Modules",
        description:
          "The system had to incorporate key modules from the reference platform to maintain core functionality, serving as a foundation for building the company's own CMS with enhanced usability and tailored features.",
      },
      {
        cardId: "03",
        title: "Slideshow Creation Feature",
        description:
          "A slideshow creation module was required to let users compile and manage media presentations efficiently. This feature allowed for seamless content organization and playback customization.",
      },
    ],
    // solutions
    solutionTitle: "Solutions",
    solutionParagraph:
      "These are the design improvements I implemented to enhance clarity, reduce clutter, and create a more user-friendly interface.",
    solutionsCards: [
      {
        cardId: "01",
        title: "Optimized Navigation for Better Accessibility",
        description:
          "The interface was redesigned with a top navigation bar, optimizing screen space and improving accessibility. This structure made it easier for users to navigate between modules efficiently.",
      },
      {
        cardId: "02",
        title: "Improved Layouts for Better Usability",
        description:
          "While core modules were retained, the CMS was redesigned with a new layout and improved interactions, offering better usability through clearer navigation and a more intuitive user experience.",
      },
      {
        cardId: "03",
        title: "Playlist Module for Slideshows",
        description:
          "The Playlist Module was created with customizable timing and smooth transitions for greater flexibility. These powerful features allow users to create engaging and professional slideshows with minimal effort.",
      },
    ],
    // implemented
    implementedImg: project2Image3,
    // showcase
    showcaseTitle: "Website-like Navigation Layout",
    showcaseParagraph:
      "The interface was redesigned with a top navigation bar, optimizing screen space and improving accessibility. This structure made it easier for users to navigate between modules efficiently.",
    showcaseImageCms1: project2Image13,
    showcaseTitle2: "Improved Layouts for Better Usability",
    showcaseParagraph2:
      "While core modules were retained, the CMS was redesigned with a new layout and improved interactions, offering better usability through clearer navigation and a more intuitive user experience.",
    showcaseImageCms2: project2Image12,

    showcaseTitle3: "Playlist Module for Slideshows",
    showcaseParagraph3:
      "The Playlist Module was created with customizable timing and smooth transitions for greater flexibility. These powerful features allow users to create engaging and professional slideshows with minimal effort.",
    showcaseImageCms3: project2Image14,
    // demo
    demoTitle: "CMS",
    // demoImg: project2Image6,
    demoImg: project2Image11,
    demoImgResponsive: project2Image1,
    // takeaways
    takeAwayList: [
      {
        takeawayPoints:
          "Optimizing navigation by implementing a website-like top bar layout improves accessibility and makes module switching easier.",
      },
      {
        takeawayPoints:
          "Enhancing usability by refining module layouts, spacing, and responsiveness makes interactions smoother and more intuitive.",
      },
      {
        takeawayPoints:
          "Simplifying slideshow creation with the Playlist Module allows users to efficiently build and customize engaging media presentations.",
      },
    ],
    // more work
    moreWorkList: [
      {
        moreWorkTag1: "HR TECH",
        moreWorkTagDot1: "·",
        moreWorkTag2: "WEB APP",
        moreWorkTitle:
          "Enhancing the HRIS for a more efficient and intuitive workflow.",
        moreWorkLink: "/view-work/1",
        moreWorkImg: seeMoreHris1_2,
        moreWorkImgFullScreen: seeMoreHris1FullScreen,
      },
      {
        moreWorkTag1: "HR TECH",
        moreWorkTagDot1: "·",
        moreWorkTag2: "WEB APP",
        moreWorkTitle:
          "Customizing the HRIS to align with client’s needs and branding.",
        moreWorkLink: "/view-work/3",
        moreWorkImg: seeMoreHris2_2,
        moreWorkImgFullScreen: seeMoreHris2FullScreen,
      },
    ],
    viewPrototype: "https://tinyurl.com/slash-cms",
  },
  {
    id: "3",
    // hero section
    title: "Customized the HRIS to align with business needs and branding.",
    description:
      "I customized the HRIS with additional features and enhancements tailored to the client’s specific needs, improving employee management and operational processes.",
    image: project3Thumbnail,
    company: "Infinity Eight",
    industry: "Trading & Marketing",
    timeline: "Oct - Nov 2023",
    platform: "Web App",
    role: "Product Designer",
    // goal section
    goalImg: project3Image2,
    goalParagraph:
      "The goal of this project was to tailor the HRIS to meet the client's unique needs by customizing its interface and functionality. This involved adapting the system's design to reflect their brand identity and incorporating new features that align with their operational processes, ensuring a cohesive and efficient user experience.",
    // requirements section
    definingTitle: "Requirements",
    definingParagraph:
      "These are the client's requirements to better align the system with their branding, workflows, and operational processes.",
    definingCards: [
      {
        cardId: "01",
        title: "Branded Interface Customization",
        description:
          "The client wanted the HRIS to reflect their brand identity by updating the interface with their official colors and design elements. They requested a more polished, modern look to create a seamless experience for employees while maintaining the platform's familiar structure.",
      },
      {
        cardId: "02",
        title: "Pakyawan Wage & Workload Management",
        description:
          "The client required a custom Pakyawan module to handle employees paid based on output rather than fixed salaries. They needed a reliable system that could track workloads, calculate piece-rate payments, manage payroll, and handle cash advances efficiently.",
      },
    ],
    // solutions
    solutionTitle: "Customizations",
    solutionParagraph:
      "These are the modifications I implemented to enhance the system's interface and functionality based on the client's needs.",
    solutionsCards: [
      {
        cardId: "01",
        title: "Tailoring the UI to Match Brand Identity",
        description:
          "To align the HRIS with the client's branding, I updated the color scheme across buttons, navigation bars, tables, and other elements. I refined shades for better contrast, ensured accessibility, and maintained a cohesive, modern, and professional look.",
      },
      {
        cardId: "02",
        title: "Building a Pakyawan Module",
        description:
          "I designed a Pakyawan module with four sub-modules: Piece Rate for pay calculation, Workload for task tracking, Pakyawan Payroll for automation, and Cash Advance for requests. This created a more efficient system for handling Pakyawan-based compensation.",
      },
    ],
    // implemented
    implementedImg: project3Image3,
    // showcase
    // 1
    showcaseTitle: "Tailoring the UI to Match Brand Identity",
    showcaseParagraph:
      "To align the HRIS with the client's branding, I updated the color scheme across buttons, navigation bars, tables, and other elements. I refined shades for better contrast, ensured accessibility, and maintained a cohesive, modern, and professional look.",
    showcaseImageBefore1: project3WebpImage6,
    showcaseImageAfter1: project3WebpImage1,
    // 2
    showcaseTitle2: "Building a  Pakyawan Module",
    showcaseParagraph2:
      "I designed a Pakyawan module with four sub-modules: Piece Rate for pay calculation, Workload for task tracking, Pakyawan Payroll for automation, and Cash Advance for requests. This created a more efficient system for handling Pakyawan-based compensation.",
    // 3
    pakyawanImg1: project3WebpImage4,
    pakyawanImg2: project3WebpImage5,
    pakyawanImg3: project3WebpImage3,
    pakyawanImg4: project3WebpImage2,

    // demo
    demoTitle: "Infinity",
    // demoImg: project3Image10,
    demoImg: project3Image14,
    demoImgResponsive: project3Image1,
    // takeaways
    takeAwayList: [
      {
        takeawayPoints:
          "Aligning the UI with the client’s branding by updating colors and refining visual elements created a more cohesive and professional-looking platform.",
      },
      {
        takeawayPoints:
          "Tailoring the system to client needs by customizing the HRIS interface and workflows ensured a more intuitive experience while maintaining its core functionality.",
      },
      {
        takeawayPoints:
          "Developing the Pakyawan module with structured submodules for payroll, workload, and cash advances provided an efficient system for managing output-based compensation.",
      },
    ],
    // more work
    moreWorkList: [
      {
        moreWorkTag1: "HR TECH",
        moreWorkTagDot1: "·",
        moreWorkTag2: "WEB APP",
        moreWorkTitle:
          "Enhancing the HRIS for a more efficient and intuitive workflow.",
        moreWorkLink: "/view-work/1",
        moreWorkImg: seeMoreHris1_2,
        moreWorkImgFullScreen: seeMoreHris1FullScreen,
      },
      {
        moreWorkTag1: "MARTECH",
        moreWorkTagDot1: "·",
        moreWorkTag2: "WEB APP",
        moreWorkTitle:
          "Building a CMS to simplify content management & enhance.",
        moreWorkLink: "/view-work/2",
        moreWorkImg: seeMoreCms2,
        moreWorkImgFullScreen: seeMoreCmsFullScreen,
      },
    ],
    viewPrototype: "https://tinyurl.com/infinity-hris2",
  },
];

const Project2 = () => {
  const { id } = useParams();
  const [imageSrc, setImageSrc] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Single declaration of projectContent
  const projectContent = contentArray.find((content) => content.id === id);

  useEffect(() => {
    // Handle image source based on screen size
    const handleResize = () => {
      if (window.innerWidth <= 991 && projectContent?.demoImgResponsive) {
        setImageSrc(projectContent.demoImgResponsive);
      } else {
        setImageSrc(projectContent?.demoImg);
      }
    };

    // Set initial image
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, [projectContent]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!projectContent) {
    return <div>Project not found</div>;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // aos
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, // animations will occur every time element comes into view
      offset: 0,
    });
  }, []);
  return (
    <section className="container-fluid min-vh-100 py-2 project-section ">
      <a
        href="#"
        className={`scroll-to-top-container ${isVisible ? "" : "hidden"}`}
        onClick={scrollToTop}
      >
        <div className="scroll-to-top d-flex flex-row align-items-center justify-content-center">
          <i className="bx bxs-chevron-up fs-3 text-white"></i>
        </div>
      </a>
      <div className="hero-container d-flex flex-column align-items-center project-container ">
        <div className="d-flex flex-column project-work-card">
          <div className="project-work-title-card">
            <a
              data-aos-delay="300"
              data-aos="fade-up"
              href="/#works"
              style={{ textDecoration: "none", fontSize: "16px" }}
              className="a-link"
            >
              <i className="bx bx-chevron-left"></i> <span>All works</span>
            </a>

            <h6
              className="h-primary-color mt-2"
              style={{
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "56px",
                marginTop: "24px",
                marginBottom: "16px",
              }}
              data-aos-delay="200"
              data-aos="fade-up"
            >
              {projectContent.title}
            </h6>

            <p
              className="text-start p-text-muted lato-font"
              style={{ fontSize: "20px", lineHeight: "34px" }}
              data-aos-delay="300"
              data-aos="fade-up"
            >
              {projectContent.description}
            </p>
          </div>

          <div className="project-work-img-container">
            <img
              src={projectContent.image}
              className="img-fluid border-radius-responsive"
              style={{ height: "100%", borderRadius: "48px" }}
              alt="Hero Work Image"
            />
          </div>

          <div className="project-work-overview border shadow d-flex flex-row justify-content-between">
            <div>
              <p
                className="p-text-muted"
                style={{
                  marginBottom: "10px",
                  fontSize: "14pxvh",
                  fontWeight: 500,
                }}
              >
                Company
              </p>
              <h6
                className="h-primary-color"
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                {projectContent.company}
              </h6>
            </div>
            <div>
              <p
                className="p-text-muted"
                style={{
                  marginBottom: "10px",
                  fontSize: "14pxvh",
                  fontWeight: 500,
                }}
              >
                Industry
              </p>
              <h6
                className="h-primary-color"
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                {projectContent.industry}
              </h6>
            </div>
            <div>
              <p
                className="p-text-muted"
                style={{
                  marginBottom: "10px",
                  fontSize: "14pxvh",
                  fontWeight: 500,
                }}
              >
                Timeline
              </p>
              <h6
                className="h-primary-color"
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                {projectContent.timeline}
              </h6>
            </div>
            <div>
              <p
                className="p-text-muted"
                style={{
                  marginBottom: "10px",
                  fontSize: "14pxvh",
                  fontWeight: 500,
                }}
              >
                Platform
              </p>
              <h6
                className="h-primary-color"
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                {projectContent.platform}
              </h6>
            </div>
            <div>
              <p
                className="p-text-muted"
                style={{
                  marginBottom: "10px",
                  fontSize: "14pxvh",
                  fontWeight: 500,
                }}
              >
                Role
              </p>
              <h6
                className="h-primary-color"
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                {projectContent.role}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center project-work-documentation">
        <div className="project-work-goal d-flex flex-row justify-content-between project-work-responsive-container project-work-break-container">
          <div className="project-work-goal-title">
            <h6
              className="h-primary-color h6-flex-responsive"
              style={{ fontSize: "32px", fontWeight: 600 }}
            >
              Goal
            </h6>
          </div>
          <div className="project-work-goal-p">
            <p
              className="p-text-muted text-start lato-font"
              style={{ fontSize: "16px", lineHeight: "24px", fontWeight: 400 }}
            >
              {projectContent.goalParagraph}
            </p>
          </div>
        </div>

        <div className="project-work-hero-img project-work-responsive-container">
          <img
            src={projectContent.goalImg}
            alt="Goal Image"
            className="img-fluid w-100"
          />
        </div>

        <div className="project-work-requirements-container project-work-responsive-container border-radius-responsive">
          <div className="project-work-requirements project-work-responsive-container  ">
            <div className="w-100 d-flex flex-row justify-content-between defining-container project-work-break-container">
              <div className="project-work-requirements-title">
                <h6
                  className="h-primary-color color-white h6-flex-responsive"
                  style={{ fontSize: "32px", fontWeight: 600 }}
                >
                  {projectContent.definingTitle}
                </h6>
              </div>
              <div className="project-work-requirements-p">
                <p className="text-align-start lato-font">
                  {projectContent.definingParagraph}
                </p>
              </div>
            </div>

            <div className="w-100 d-flex flex-row justify-content-between defining-card-container blue-white-card">
              {projectContent.definingCards.map((definingCard, index) => (
                <div key={index} className="w-100 defining-card">
                  <h6 className="text-white">{definingCard.cardId}</h6>
                  <h6 className="text-white ">{definingCard.title}</h6>
                  <p className="text-align-start project-work lato-font">
                    {definingCard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="project-work-solutions project-work-responsive-container">
            <div className="w-100 d-flex flex-row justify-content-between solutions-container project-work-break-container">
              <div className="project-work-solutions-title">
                <h6
                  className="h-primary-color color-white h6-flex-responsive"
                  style={{ fontSize: "32px", fontWeight: 600 }}
                >
                  {projectContent.solutionTitle}
                </h6>
              </div>
              <div className="project-solutions-requirements-p">
                <p className="text-align-start lato-font">
                  {projectContent.solutionParagraph}
                </p>
              </div>
            </div>
            <div className="w-100 d-flex flex-row justify-content-between solutions-card-container blue-white-card">
              {projectContent.solutionsCards.map((card, index) => (
                <div key={index} className="w-100 solutions-card">
                  <h6 className="text-white ">{card.cardId}</h6>
                  <h6 className="text-white ">{card.title}</h6>
                  <p className="text-align-start p-text-muted lato-font">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="project-work-implement project-work-responsive-container">
          <img
            src={projectContent.implementedImg}
            className="w-100"
            alt="Implemented Image"
          />
        </div>

        <div className="project-work-show-container project-work-responsive-container">
          {/* 1 */}
          <div className="project-work-show d-flex flex-row justify-content-between project-work-break-container">
            <div className="project-work-show-title">
              <h6
                className="h-primary-color h6-flex-responsive"
                style={{ fontSize: "32px", fontWeight: 600 }}
              >
                {projectContent.showcaseTitle}
              </h6>
            </div>
            <div className="project-work-show-p">
              <p
                className="p-text-muted text-start lato-font"
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                }}
              >
                {projectContent.showcaseParagraph}
              </p>
            </div>
          </div>

          {/* Customized content for every project */}
          {id === "1" && <ProjectHris1 projectContent={projectContent} />}
          {id === "2" && <ProjectCms projectContent={projectContent} />}
          {id === "3" && <ProjectHris3 projectContent={projectContent} />}
        </div>

        <div className="project-work-demo d-flex flex-row align-items-center project-work-responsive-container project-work-break-container border-radius-responsive ">
          <div className="d-flex flex-column project-work-demo-title text-start">
            <h6 className="h-primary-color text-start ">
              {projectContent.demoTitle}
            </h6>
            <p className="p-text-muted text-start">
              Click the button to view the final design in action
            </p>
            <a
              href={projectContent.viewPrototype}
              target="_blank"
              className="primaryBtnNav text-center"
            >
              View Prototype
            </a>
          </div>
          <div className="project-work-demo-img shadow">
            <img
              src={imageSrc || projectContent.demoImg}
              alt="Demo Image"
              className="w-100 img-fluid h-100"
              style={{
                borderTopLeftRadius: "16px",
                borderBottomLeftRadius: "16px",
              }}
            />
          </div>
        </div>

        <div className="project-work-takeaways-container d-flex flex-row justify-content-between project-work-responsive-container project-work-break-container">
          <div className="project-work-takeaways-title ">
            <h6
              className="h-primary-color h6-flex-responsive"
              style={{ fontSize: "32px", fontWeight: 600 }}
            >
              My Takeaways
            </h6>
          </div>
          <div className="project-work-takeaways-p">
            <ul className="list-unstyled ">
              {projectContent.takeAwayList.map((item, index) => (
                <li key={index} className="d-flex align-items-start mb-3">
                  <span className="me-2">•</span>
                  <p
                    className="m-0 text-secondary"
                    style={{ fontSize: "18px", lineHeight: "1.5" }}
                  >
                    {item.takeawayPoints}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-work-thanks-container d-flex flex-column justify-content-center align-items-center project-work-responsive-container  project-work-break-container border-radius-responsive">
          <img src={faith} alt="Faith" />
          <h6 className="text-white">Thank you for viewing!</h6>
        </div>

        <div className="project-work-more-work d-flex flex-column project-work-responsive-container">
          <h6 className="text-center h-primary-color">See more of my work</h6>

          <div className="d-flex flex-row project-work-more-work-card-container">
            {projectContent.moreWorkList.map((work, index) => (
              <div
                key={index}
                className="w-100 project-work-more-work-card border"
              >
                {/* Work Title & Details */}
                <div className="project-work-more-work-card-title">
                  <p className="p-text-muted text-start">
                    {work.moreWorkTag1}{" "}
                    <span className="mx-1">{work.moreWorkTagDot1}</span>
                    {work.moreWorkTag2}
                  </p>
                  <h6 className="text-start h-primary-color">
                    {work.moreWorkTitle}
                  </h6>
                  <button
                    style={{ textDecoration: "none" }}
                    className="seeWorkSecondaryBtn"
                    onClick={() => (window.location.href = work.moreWorkLink)}
                  >
                    View Work{" "}
                    <FontAwesomeIcon icon={faArrowRightLong} className="mx-1" />
                  </button>
                </div>

                {/* Work Image */}
                <div className="project-work-more-work-card-img d-flex flex-row justify-content-end">
                  <picture>
                    {/* For screens wider than 991px */}
                    <source
                      media="(min-width: 992px)"
                      srcSet={work.moreWorkImg}
                    />
                    {/* For screens 991px and narrower */}
                    <source
                      media="(max-width: 991px)"
                      srcSet={work.moreWorkImgFullScreen || work.moreWorkImg}
                    />
                    {/* Fallback */}
                    <img src={work.moreWorkImg} alt="Card Image" />
                  </picture>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project2;
