import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import SingleProperte from "@/components/properties/SingleProperte";

export default async function Page({ params }) {
  const id = await params;
  return (
    <>
    <Header />
      <SingleProperte propertyId={id} />
      <Footer />
    </>
  );
}
