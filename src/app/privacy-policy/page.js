import Hero from "@/components/about/Hero";
import PrivacyPolicy from "@/components/info/PrivacyPolicy";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React from "react";

const page = () => {
  const sideData = [
    {
      info: "Information We Collect",
      key: "informationWeCollect",
    },
    {
      info: "How We Use Your Information",
      key: "howWeUseYourInformation",
    },
    {
      info: "Data Sharing & Disclosure",
      key: "dataSecurity",
    },
    {
      info: "Data Security & Retention",
      key: "informationSecurity",
    },
    {
      info: "Cookies & Tracking Technologies",
      key: "datatransfer",
    },
    {
      info: "Your Rights & Choices",
      key: "securitypractices",
    },
    {
      info: "Changes to This Privacy Policy",
      key: "legalrequirement",
    },
  ];

  const rightSideData = {
    informationWeCollect: [
      {
        heading: "Information we collect",
        title:
          "We may collect and process the following types of personal information - Personal Details:Name, email address, phone number, and company name.Property Preferences: Information about your real estate interests, investment goals, and property searches. Communication Data: Records of your interactions with us via email, phone, or website forms. Website Usage Data: Information on how you use our website, including IP address, browser type, and pages visited. Marketing Preferences: Your preferences for receiving communications about properties, promotions, and updates.",
      },
    ],
    howWeUseYourInformation: [
      {
        heading: "How We Use Your Information",
        title:
          "Your information is used for the following purposes - To provide and improve our real estate services, To respond to inquiries and schedule consultations, To send you property updates, investment insights, and promotional offers (if opted in),  To analyze website traffic and user behavior for optimization, To comply with legal and regulatory requirements. ",
      },
    ],
    dataSecurity: [
      {
        heading: "Data Sharing & Disclosure",
        title:
          "We implement strict security measures to protect your personal data from unauthorized access, loss, or misuse. Your data is retained only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.  .",
      },
    ],
    informationSecurity: [
      {
        heading: "Data Security & Retention",
        title:
          "We implement strict security measures to protect your personal data from unauthorized access, loss, or misuse. Your data is retained only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.  ",
      },
    ],

    datatransfer: [
      {
        heading: "Cookies & Tracking Technologies",
        title:
          "Our website uses cookies to enhance user experience and track website analytics. You can control cookie settings through your browser preferences.  ",
      },
    ],

    securitypractices: [
      {
        heading: "Your Rights & Choices",
        title:
          "You have the right to - Access, update, or delete your personal data, Opt out of marketing communications at any time, Request details on how your data is processed. For any requests, please contact us at privacy@msrealestate.com.",
      },
    ],

    legalrequirement: [
      {
        heading: "Changes to This Privacy Policy",
        title:
          "We may update this policy periodically. Any significant changes will be notified via email or a notice on our website. ",
      },
    ],
  };

  const blogData = {
    title: "Privacy Policy",
    subtitle: "Home",
    page: "Privacy Policy",
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
