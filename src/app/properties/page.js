"use client";

import { Suspense } from "react";
import Hero from "@/components/about/Hero";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import PropertiData from "@/components/properties/PropertiData";
import { useSearchParams } from "next/navigation";

function PageContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const propertieData = {
    bgImage:
      "https://cdn.pixabay.com/photo/2016/11/29/05/45/aerial-1867093_640.jpg",
    title: "Properties",
    page: category,
  };

  return (
    <>
      <Header />
      <Hero data={propertieData} />
      <PropertiData category={category} />
      <Footer />
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
