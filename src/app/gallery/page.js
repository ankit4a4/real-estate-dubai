import Hero from "@/components/about/Hero";
import ContactUs from "@/components/contact/ContactUs";
import GalleryCard from "@/components/gallery/GalleryCard";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

const gallery = {
  title: "Gallery",
  subtitle: "Home",
  page: "Gallery",
};


export default function page() {
  return (
    <>
     <Header/> 
    <Hero data={gallery}/>
    <GalleryCard />
    <Footer/>
    </>
  )
}