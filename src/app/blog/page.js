import Hero from "@/components/about/Hero";
import BlogArea from "@/components/blog/BlogArea";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

const blogData = {
  title: "Blog",
  subtitle: "Home",
  page: "blog",
};

export default function page() {
  return (
    <>
      <Header />
      <Hero data={blogData} />
      <BlogArea />
      <Footer />
    </>
  );
}
