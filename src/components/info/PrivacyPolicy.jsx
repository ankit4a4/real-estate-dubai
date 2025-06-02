"use client";
import React, { useRef, useState } from "react";
import style from "../../style/info/Privacy.module.css";
import { GoTriangleRight } from "react-icons/go";
import { RxInfoCircled } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";

const PrivacyPolicy = ({
  sideData = { sideData },
  rightSideData = { rightSideData },
}) => {
  const sectionRefs = useRef({});
  const containerRef = useRef(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const handleSidebarClick = (key) => {
    setExpandedSection(expandedSection === key ? null : key);
    const section = sectionRefs.current[key];
    if (section && containerRef.current) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
      const container = containerRef.current;
      container.scrollTop = section.offsetTop - container.offsetTop;
    }
  };

  return (
    <div className={style.privacyHero}>
      <div className={style.privacyContent}>
        <div className={style.privacySidebar}>
          {sideData.map((item) => (
            <p
              key={item.key}
              className={style.sideBarItem}
              onClick={() => handleSidebarClick(item.key)}
            >
              <GoTriangleRight />
              {item.info}
            </p>
          ))}
        </div>

        <div className={style.privacyMainContent} ref={containerRef}>
          {Object.entries(rightSideData).flatMap(([key, sections]) =>
            sections.map((section, index) => (
              <div
                key={`${key}-${index}`}
                ref={(el) => {
                  sectionRefs.current[key] = el;
                }}
                className={style.contentSection}
              >
                <h3 className={style.sectionHeading}>
                  <GoTriangleRight />
                  {section.heading}
                  <RxInfoCircled className={style.infoIcon} />
                </h3>
                <p className={style.sectionTitle}>{section.title}</p>
              </div>
            ))
          )}
        </div>

        <div className={style.privacyMobile}>
          {Object.entries(rightSideData).flatMap(([key, sections]) =>
            sections.map((section, index) => (
              <div key={`${key}-${index}`} className={style.mobileSection}>
                <h3
                  className={style.mobileSectionHeading}
                  onClick={() => handleSidebarClick(`${key}-${index}`)}
                >
                  {section.heading}
                  <FaCaretDown className={style.mobileIcon} />
                </h3>
                {expandedSection === `${key}-${index}` && (
                  <p className={style.mobileSectionTitle}>{section.title}</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
