import Hero from "@/components/about/Hero";
import ContactUs from "@/components/contact/ContactUs";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

const contactData = {
  title: "Contact",
  subtitle: "Home",
  page: "contact",
};


export default function page() {
  return (
    <>
     <Header/> 
    <Hero data={contactData}/>
    <ContactUs/>
    <Footer/>
    </>
  )
}