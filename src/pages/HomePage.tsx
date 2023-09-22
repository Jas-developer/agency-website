import HERO_IMAGE from "../assets/images/LOPTOP_HERO_IMAGE.png";
import Section2 from "../components/section2/Section2";
import "../styles/Floating.css";
import BG_HERO_IMAGE from "../assets/images/BG_HERO_IMAGE.jpg";

export default function HomePage() {
  return (
    <main className=" lg:mt-[2rem] relative font-serif ">
      <section className="grid  lg:grid-cols-2   lg:pb-[4rem] items-center md:px-12 lg:px-24 px-2">
        <div className="px-2">
          <div className="absolute w-full top-20 background-image z-0  h-[30rem] bg-black  left-0 right-0 bottom-0 m-auto">
            <img
              src={BG_HERO_IMAGE}
              alt=""
              className="object-cover h-[100%] w-full blur-[0.2rem]"
            />
          </div>
          <div className="background-color bg-black lg:p-4 p-2">
            <fieldset className="border-color border-t-green-700 border-y-[1rem] overflow-clip lg:border-y-[2rem] border-b-transparent border-r-transparent border-l-transparent  border-double border text-lg lg:text-4xl font-medium  rounded-md">
              <legend className="font-bold md:text-3xl z-20  text-[#ff5e00] text-2xl lg:text-5xl overflow-clip">
                HEXADEV
              </legend>
            </fieldset>
            <span
              className="lg:text-3xl md:text-2xl lg:text-start text-xl text-white flex justify-center lg:justify-start
          
          font-semibold"
            >
              PROVIDE SOFTWARE SOLUTIONS FOR YOUR BUSINESS
            </span>
            <div className="prose prose-md md:prose-lg items-center  text-white lg:text-start lg:prose-2xl mt-5 lg:mt-12">
              <p className="strong">
                We specialize in creating software for business needs, enhancing
                customer experiences, or boosting efficiency.
              </p>
              <p className="">
                Unlock your business's full potential through technology.
                Contact us today to get started.
              </p>
            </div>
            <div className="mt-2 flex items-center  lg:justify-start">
              <button className="lg:px-8 lg:p-2 px-4 p-1 rounded-sm shadow-l bg-black button text-white font-semibold  overflow-clip">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="flex   items-center w-full justify-center relative flex-col  overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="hero-image"
            className="transform skew-y-2 "
          />
        </div>
      </section>
      <section className="background-color bg-black lg:px-24 px-2 lg:py-24 z-10">
        <div className="text-center flex flex-col gap-4 lg:gap-4 mt-4 lg:mt-0">
          <span className="lg:text-[3.5rem] md:text-4xl text-green-500 overflow-clip  lg:px-[20%] text-[1.6rem]  font-bold uppercase floating ">
            <span className="border-2 overflow-clip font-sans  shadow-sm  stroke-green-600 border-b-green-400 border-l-transparent border-r-transparent border-t-transparent  border-[overflow-clip]">
              Why choose Hexadev?
            </span>
          </span>
          <span className="lg:text-5xl md:text-3xl text-xl text-white font-serif overflow-hidden z-10  font-medium lg:px-[20%]">
            We Have The People, Platform, and Process to Help Your Company
            Succeed
          </span>
        </div>
        <div className="lg:px-24 px-2 md:px-12 ">
          <Section2 />
        </div>
      </section>

      {/*third section */}
    </main>
  );
}
