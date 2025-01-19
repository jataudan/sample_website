import Image from "next/image";

export default function WorkProcess() {
  return (
    <section
      className=" relative w-full min-h-screen bg-cover bg-center flex flex-col justify-center gap-4"
      style={{
        backgroundImage: `url(/assets/about/work-process-bg.png)`,
      }}
    >
      <div className="container mx-auto bg-[#7fdeff] md:bg-transparent">
        <div className=" flex flex-col align-center justify-center items-center text-center">
          <span className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#635AD9] to-[#219BE4] font-[plus jakarta sans]">
            Work Process{" "}
          </span>

          <div className="text-[46px] font-extrabold mt-2 font-poppins">
            <span className="text-[#000]">Our Working Process </span>{" "}
          </div>
        </div>
        <div className="flex flex-col md:flex-row relative items-center justify-between p-8 rounded-lg ">
          {/* <!-- Step 1 --> */}
          <div className="flex relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex items-center justify-center text-white">
                  <Image
                    src="/assets/about/icon-1.png"
                    alt="Service Icon"
                    width={106}
                    height={100}
                  />
                </div>
                <span className="absolute top-3.5 left-3.5 bg-[#219be4] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold font-[plus jakarta sans]">
                Choose A Service
              </h3>
              <p className="mt-2  text-base text-gray-700">
                In a free hour, when our power of choice is untrammeled and
              </p>
            </div>
            <hr className="absolute right-[-125px] top-[100px] rotate-[23deg] transform bg-transparent text-transparent w-[250px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>

          {/* <!-- Step 2 --> */}
          <div className="flex relative">
            <div className="flex flex-col-reverse lg:flex-col items-center text-center">
              <h3 className="mt-4 text-lg font-bold font-[plus jakarta sans] hidden lg:block">
                Define Requirements
              </h3>
              <p className="mt-2  text-base text-gray-700 hidden lg:block">
                In a free hour, when our power of choice is untrammeled and
              </p>

              <div className="block lg:hidden">
                <h3 className="mt-4 text-lg font-bold font-[plus jakarta sans]">
                  Define Requirements
                </h3>
                <p className="mt-2  text-base text-gray-700">
                  In a free hour, when our power of choice is untrammeled and
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center text-white">
                  <Image
                    src="/assets/about/icon-2.png"
                    alt="Requirements Icon"
                    width={106}
                    height={100}
                  />
                  <span className="absolute top-3.5 left-3.5 bg-[#219be4] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Connecting Line --> */}
            <hr className="absolute right-[-125px] top-[100px] rotate-[-23deg] transform bg-transparent text-transparent w-[250px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>
          {/* <!-- Step 3 --> */}
          <div className="flex relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex items-center justify-center text-white">
                  <Image
                    src="/assets/about/icon-3.png"
                    alt="Meeting Icon"
                    width={106}
                    height={100}
                  />
                </div>
                <span className="absolute top-3.5 left-3.5 bg-[#219be4] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  3
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold font-[plus jakarta sans]">
                Request A Meeting
              </h3>
              <p className="mt-2  text-base text-gray-700">
                In a free hour, when our power of choice is untrammeled and
              </p>
            </div>

            {/* <!-- Connecting Line --> */}
            <hr className="absolute right-[-125px] top-[100px] rotate-[23deg] transform bg-transparent text-transparent w-[250px] border-dotted border border-[#219BE4] hidden lg:block" />
          </div>
          {/* <!-- Step 4 --> */}
          <div className="flex flex-col-reverse lg:flex-col items-center text-center">
            <div className="block lg:hidden">
              <h3 className="mt-4 text-lg font-bold font-[plus jakarta sans]">
                Final Solution
              </h3>
              <p className="mt-2 text-base text-gray-700">
                In a free hour, when our power of choice is untrammeled and
              </p>
            </div>
            <h3 className="mt-4 text-lg font-bold font-[plus jakarta sans] hidden lg:block">
              Final Solution
            </h3>
            <p className="mt-2 text-base text-gray-700 hidden lg:block">
              In a free hour, when our power of choice is untrammeled and
            </p>
            <div className="relative">
              <div className="flex items-center justify-center text-white">
                <Image
                  src="/assets/about/icon-4.png"
                  alt="Solution Icon"
                  width={106}
                  height={100}
                />
              </div>
              <span className="absolute top-3.5 left-3.5 bg-[#219be4] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                4
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}