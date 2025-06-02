import AboutArea from "@/components/about/AboutArea";
import Service from "@/components/home/Service";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Testimonial from "@/components/home/Testimonial";
import Team from "@/components/home/Team";
import Client from "@/components/home/Client";
import Hero from "@/components/about/Hero";
import img from "../../../public/icon/service-icon2-1.svg";
import img2 from "../../../public/icon/service-icon2-2.svg";
import img3 from "../../../public/icon/support.png";
import dubai from "../../../public/webp/img12.webp";
import dubai2 from "../../../public/webp/img6.webp";
import dubai3 from "../../../public/webp/img5.webp";
import AboutProperty from "@/components/about/AboutProperty";
import FeaturedAwards from "@/components/about/FeaturedAwards";
import OtherBusinesses from "@/components/about/OtherBusinesses";

const aboutData = {
  title: "About Us",
  page: "About",
};

const servicePageData = {
  color: "#fff",
  bg: "--theme-color",
  title: "20 years of industry expertise",
  description:
    "Mohammad & Saba Real Estate LLC has built a reputation for excellence in Dubai’s competitive real estate sector.",
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

export default function page() {
  return (
    <>
      <Header />
      <Hero data={aboutData} />
      <AboutArea />
      <Service data={servicePageData} />
      <AboutProperty />
      <OtherBusinesses />
      <Testimonial />
      <Team />
      <FeaturedAwards />

      {/* <Client /> */}
      <Footer />
    </>
  );
}
