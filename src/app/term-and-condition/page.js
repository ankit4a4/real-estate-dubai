import Hero from "@/components/about/Hero";
import PrivacyPolicy from "@/components/info/PrivacyPolicy";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React from "react";

const page = () => {
  const sideData = [
    {
      info: "Introduction",
      key: "informationWeCollect",
    },
    {
      info: "Services Offered",
      key: "howWeUseYourInformation",
    },
    {
      info: "User Responsibilities",
      key: "dataSecurity",
    },
    {
      info: "Property Listings & Information",
      key: "informationSecurity",
    },
    {
      info: "Payments & Fees",
      key: "datatransfer",
    },
    {
      info: "Limitation of Liability",
      key: "securitypractices",
    },
    {
      info: "Privacy Policy",
      key: "legalrequirement",
    },
    {
      info: "Third-Party Links & Services",
      key: "datasecurity",
    },
    {
      info: "Termination of Services",
      key: "payments",
    },
    {
      info: "Amendments to Terms",
      key: "othersiteslink",
    },
    {
      info: "Governing Law & Dispute Resolution",
      key: "changestothisprivacypolicy",
    },
  ];

  const rightSideData = {
    informationWeCollect: [
      {
        heading: "Introduction",
        title:
          "These Terms and Conditions govern your use of Mohammad & Saba Real Estate LLC’s website and services. By engaging with our platform, you acknowledge and accept these terms.",
      },
    ],
    howWeUseYourInformation: [
      {
        heading: "Services Offered",
        title:
          "Mohammad & Saba Real Estate LLC provides real estate services, including but not limited to - Buying and selling off-plan and ready properties,  Property rentals (residential & commercial), Investment consultation,  Property management services, All transactions and dealings are subject to UAE real estate laws and regulations.",
      },
    ],
    dataSecurity: [
      {
        heading: "User Responsibilities",
        title:
          "By using our website and services, you agree to -  Provide accurate and complete information when required, Comply with all applicable laws and regulations,  Not engage in any fraudulent or misleading activities, Maintain the confidentiality of your account information (if applicable), Mohammad & Saba Real Estate LLC reserves the right to suspend or terminate access to its services for violations of these terms.",
      },
    ],
    informationSecurity: [
      {
        heading: "Property Listings & Information",
        title:
          "While we strive to provide accurate and updated property information, Mohammad & Saba Real Estate LLC does not guarantee the completeness, accuracy, or availability of any property listings. Prices, availability, and property details are subject to change without prior notice.",
      },
    ],

    datatransfer: [
      {
        heading: "Payments & Fees",
        title:
          "Payments for services, including brokerage and consultation fees, must be made as agreed in contractual agreements, Mohammad & Saba Real Estate LLC does not process online payments through its website, Any fees paid are non-refundable unless otherwise stated.",
      },
    ],

    securitypractices: [
      {
        heading: "Limitation of Liability",
        title:
          "Mohammad & Saba Real Estate LLC shall not be liable for - Any direct or indirect losses resulting from the use of our website or services, Errors or inaccuracies in property listings, Third-party service failures (e.g., mortgage providers, banks, legal advisors)",
      },
    ],

    legalrequirement: [
      {
        heading: "Privacy Policy",
        title:
          "Your privacy is important to us. Please refer to our  Privacy Policy  for details on how we collect, use, and protect your personal data.",
      },
    ],

    datasecurity: [
      {
        heading: "Third-Party Links & Services",
        title:
          "Our website may contain links to third-party websites or services. Mohammad & Saba Real Estate LLC is not responsible for the content, policies, or practices of external sites.",
      },
    ],

    payments: [
      {
        heading: "Termination of Services",
        title:
          "Mohammad & Saba Real Estate LLC reserves the right to terminate or restrict access to any user found in violation of these terms, without prior notice.",
      },
    ],

    othersiteslink: [
      {
        heading: "Amendments to Terms",
        title:
          "We may update these Terms and Conditions periodically. Users are encouraged to review this page regularly. Continued use of our services after changes are made constitutes acceptance of the revised terms.",
      },
    ],

    changestothisprivacypolicy: [
      {
        heading: "Governing Law & Dispute Resolution",
        title:
          "These Terms and Conditions are governed by the laws of the  United Arab Emirates . Any disputes arising from these terms will be resolved in accordance with UAE law.",
      },
    ],
  };

  const blogData = {
    title: "Term and Condition",
    subtitle: "Home",
    page: "Term and Condition",
  };

  return (
    <>
      <Header />
      <Hero data={blogData} />

      <PrivacyPolicy sideData={sideData} rightSideData={rightSideData} />
      <Footer />
    </>
  );
};

export default page;
