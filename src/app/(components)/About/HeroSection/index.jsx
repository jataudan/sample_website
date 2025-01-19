"use client";
import React from "react"; // Ensure React is imported
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

export default function AboutHero() {
  const pathname = usePathname();
  const { category } = useParams(); // Get the category parameter from the route

  const capitalizeFirstLetterOfEachWord = (str) => {
    return str
      .split(" ") // Split string by spaces
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
      .join(" "); // Join the words back into a single string
  };

  const getHeading = () => {
    // Add specific cases for headings based on the pathname
    switch (pathname) {
      case "/about-us":
        return "About Us";
      case "/services":
        return "Our Services";
      case "/portfolio":
        return "Our Portfolio";
      case "/blog":
        return "Our Blog";
      case "/contact-us":
        return "Contact Us";
      case "/faq":
        return "FAQ";
      case "/our-team":
        return "Our Team";

      default:
        // If a category exists, return the category name with each word's first letter capitalized
        if (category) {
          return capitalizeFirstLetterOfEachWord(category.replace("-", " "));
        }
        return "Welcome"; // Default heading if no category or matching pathname is present
    }
  };

  const getBreadcrumb = () => {
    // Build breadcrumb based on the pathname and category
    const baseBreadcrumb = [{ label: "Home", link: "/" }];

    switch (pathname) {
      case "/about-us":
        baseBreadcrumb.push({ label: "About Us", link: "/about-us" });
        break;
      case "/services":
        baseBreadcrumb.push({ label: "Our Services", link: "/services" });
        break;
      case "/portfolio":
        baseBreadcrumb.push({ label: "Our Portfolio", link: "/portfolio" });
        break;
      case "/blog":
        baseBreadcrumb.push({ label: "Our Blog", link: "/blog" });
        break;
      case "/contact-us":
        baseBreadcrumb.push({ label: "Contact Us", link: "/contact-us" });
        break;
      case "/faq":
        baseBreadcrumb.push({ label: "FAQ", link: "/faq" });
      case "/our-team":
        baseBreadcrumb.push({ label: "Our Team", link: "/our-team" });
        break;
      default:
        if (category) {
          baseBreadcrumb.push(
            { label: "Our Services", link: "/services" },
            {
              label: capitalizeFirstLetterOfEachWord(
                category.replace("-", " ")
              ), // Capitalize each word in the category
              link: `/services/${category}`,
            }
          );
        }
        break;
    }

    return baseBreadcrumb;
  };

  return (
    <section className="relative w-full h-[537px] bg-custom-gray bg-center flex flex-col items-center px-6 md:px-20 lg:px-40">
      <div className="relative mt-[120px] flex flex-col items-center justify-center text-white px-4 text-center h-screen">
        {/* Heading */}
        <p className="sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4">
          {getHeading()}
        </p>

        {/* Breadcrumb */}
        <div className="mt-4 sm:mt-2 flex items-center justify-center rounded-full bg-gradient-to-r from-[#BF20FC] to-[#077EEC] p-[2px]">
          <div className="flex items-center justify-center p-2 font-bold rounded-full bg-custom-gray text-[18px] font-[plus jakarta sans]">
            {getBreadcrumb().map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <div className="px-2">
                    <Image
                      src="/assets/about/right-arrow.png"
                      alt="right arrow"
                      width={10}
                      height={10}
                    />
                  </div>
                )}
                <a href={item.link} className="text-white">
                  {item.label}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}