import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Service from "@/components/home/Service";
import Portfolio from "@/components/home/Portfolio";
import Gallery from "@/components/home/Gallery";
import Team from "@/components/home/Team";
import Testimonial from "@/components/home/Testimonial";
import Client from "@/components/home/Client";
import Appointment from "@/components/home/Appointment";
import Contact from "@/components/home/Contact";
import Blog from "@/components/home/Blog";
import ShowCase from "@/components/home/ShowCase";
import img from "../../public/icon/service-icon2-1.svg";
import img2 from "../../public/icon/service-icon2-2.svg";
import img3 from "../../public/icon/support.png";
import dubai from "../../public/webp/money.webp";
import dubai2 from "../../public/webp/house.webp";
import dubai3 from "../../public/webp/support.webp";
import { BiSupport } from "react-icons/bi";
import FeaturedAwards from "@/components/about/FeaturedAwards";

export default function page() {

  const servicePageData = {
    color: "#000",
    bg: "--gray-color",
    title: "Explore Our Premium Services",
    description:
      "We are a real estate firm with over 20 years of expertise, and our main goal is to provide amazing locations to our partners and clients. Within the luxury real estate market, our agency offers customized solutions.",
    btn: "Browse All Services",
    cardData: [
      {
        title: "Investment Consulting",
        des: "Get expert guidance for high-yield investments.",
        img: img,
        img2: dubai,
      },
      {
        title: "Mortgage Assistance",
        des: "Hassle-free financing options for buyers.",
        img: img2,
        img2: dubai2,
      },
      {
        title: "After-Sales Support",
        des: "Property management and resale assistance.",
        img: img3,
        img2: dubai3,
      },
    ],
  };
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service data={servicePageData} />
      <Portfolio />
      <Gallery />
      <Team />
      <Testimonial />
      <Appointment />
      <Contact />
      <Blog />
      <FeaturedAwards />
      <Footer />
    </>
  );
}
