import Image from "next/image";

export default function OurTeamSection() {
  const teamMembers = [
    {
      name: "Dan k jatau Ph.D.",
      role: "CTO & Founder",
      image: "/assets/about/Circle-lg.png",
      socials: [
        {
          icon: "/assets/about/facebook.png",
          hoverIcon: "/assets/about/facebook-orange.png",
          width: 10.74,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/instagram.png",
          hoverIcon: "/assets/about/instagram-orange.png",
          width: 20,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/twitter.png",
          hoverIcon: "/assets/about/twitter-orange.png",
          width: 24.63,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/pinterest.png",
          hoverIcon: "/assets/about/pinterest-orange.png",
          width: 15.38,
          height: 20,
          link: "#",
        },
      ],
    },
    {
      name: "Ismail Saleem",
      role: "CMO",
      image: "/assets/about/Circle-lg.png",
      socials: [
        {
          icon: "/assets/about/facebook.png",
          hoverIcon: "/assets/about/facebook-orange.png",
          width: 10.74,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/instagram.png",
          hoverIcon: "/assets/about/instagram-orange.png",
          width: 20,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/twitter.png",
          hoverIcon: "/assets/about/twitter-orange.png",
          width: 24.63,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/pinterest.png",
          hoverIcon: "/assets/about/pinterest-orange.png",
          width: 15.38,
          height: 20,
          link: "#",
        },
      ],
    },
    {
      name: "ashikur Rahman",
      role: "Head of Engineering",
      image: "/assets/about/Circle-lg.png",
      socials: [
        {
          icon: "/assets/about/facebook.png",
          hoverIcon: "/assets/about/facebook-orange.png",
          width: 10.74,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/instagram.png",
          hoverIcon: "/assets/about/instagram-orange.png",
          width: 20,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/twitter.png",
          hoverIcon: "/assets/about/twitter-orange.png",
          width: 24.63,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/pinterest.png",
          hoverIcon: "/assets/about/pinterest-orange.png",
          width: 15.38,
          height: 20,
          link: "#",
        },
      ],
    },
    {
      name: "Jermaine Jatau",
      role: "Software Engineer",
      image: "/assets/about/Circle-lg.png",
      socials: [
        {
          icon: "/assets/about/facebook.png",
          hoverIcon: "/assets/about/facebook-orange.png",
          width: 10.74,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/instagram.png",
          hoverIcon: "/assets/about/instagram-orange.png",
          width: 20,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/twitter.png",
          hoverIcon: "/assets/about/twitter-orange.png",
          width: 24.63,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/pinterest.png",
          hoverIcon: "/assets/about/pinterest-orange.png",
          width: 15.38,
          height: 20,
          link: "#",
        },
      ],
    },
    {
      name: "Dan K Jatau",
      role: "Chief Solutions Architect",
      image: "/assets/about/Circle-lg.png",
      socials: [
        {
          icon: "/assets/about/facebook.png",
          hoverIcon: "/assets/about/facebook-orange.png",
          width: 10.74,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/instagram.png",
          hoverIcon: "/assets/about/instagram-orange.png",
          width: 20,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/twitter.png",
          hoverIcon: "/assets/about/twitter-orange.png",
          width: 24.63,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/pinterest.png",
          hoverIcon: "/assets/about/pinterest-orange.png",
          width: 15.38,
          height: 20,
          link: "#",
        },
      ],
    },
    {
      name: "Robert Hartburn",
      role: "Product Design",
      image: "/assets/about/Circle-lg.png",
      socials: [
        {
          icon: "/assets/about/facebook.png",
          hoverIcon: "/assets/about/facebook-orange.png",
          width: 10.74,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/instagram.png",
          hoverIcon: "/assets/about/instagram-orange.png",
          width: 20,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/twitter.png",
          hoverIcon: "/assets/about/twitter-orange.png",
          width: 24.63,
          height: 20,
          link: "#",
        },
        {
          icon: "/assets/about/pinterest.png",
          hoverIcon: "/assets/about/pinterest-orange.png",
          width: 15.38,
          height: 20,
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="relative bg-white py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white  border border-[#EAF3F8] rounded-lg text-center p-10 justify-between w-[370px] h-[510px]"
            >
              {/* Member Image */}
              <div className=" mx-auto overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={294}
                  height={294}
                />
              </div>

              {/* Member Info */}
              <h3 className="font-semibold text-[22px] text-[#101010] font-[plus jakarta sans]">
                {member.name}
              </h3>
              <p className="text-base text-[#101010] font-[plus jakarta sans] mb-4">
                {member.role}
              </p>
              <hr className="mb-4 w-[270px] text-[#EAF3F8] px-4" />
              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                {member.socials.map((social, socialIndex) => (
                  <a
                    key={socialIndex}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex justify-center items-center transition relative"
                  >
                    <Image
                      src={social.icon}
                      alt="social icon"
                      width={social.width}
                      height={social.height}
                      className="absolute transition-opacity duration-300 opacity-100 hover:opacity-0"
                    />
                    <Image
                      src={social.hoverIcon}
                      alt="hover icon"
                      width={social.width}
                      height={social.height}
                      className="absolute transition-opacity duration-300 opacity-0 hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}