import SingleBlog from "@/components/blog/SingleBlog";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default async function Page({ params }) {
  const id = await params;
  return (
    <>
      <Header />
      <SingleBlog blogId={id} />
      <Footer />
    </>
  );
}
