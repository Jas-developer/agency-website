import HERO_IMAGE from "../assets/images/LOPTOP_HERO_IMAGE.png";
import Section2 from "../components/section2/Section2";
import "../styles/Floating.css";

export default function HomePage() {
  return (
    <main className=" lg:mt-[8rem] ">
      <section className="grid lg:grid-cols-2 lg:pb-[4rem] items-center lg:px-24 px-2 ">
        <div className="">
          <fieldset className="border-color border-t-green-700 border-y-[1rem] overflow-clip lg:border-y-[2rem] border-b-transparent border-r-transparent border-l-transparent  border-double border text-lg lg:text-4xl font-medium  rounded-md">
            <legend className="font-bold   text-[#ff5e00] text-2xl lg:text-5xl overflow-clip">
              HEXADEV
            </legend>
          </fieldset>
          <span className="lg:text-3xl font-semibold">
            PROVIDE SOFTWARE SOLUTIONS FOR YOUR BUSINESS
          </span>
          <div className="prose prose-md   lg:text-start lg:prose-2xl mt-5 lg:mt-12">
            <p className="strong">
              We specialize in creating software for business needs, enhancing
              customer experiences, or boosting efficiency.
            </p>
            <p className="">
              Unlock your business's full potential through technology. Contact
              us today to get started.
            </p>
          </div>
          <div className="mt-2">
            <button className="lg:px-8 lg:p-2 px-4 p-1 rounded-sm shadow-l bg-black button text-white font-semibold  overflow-clip">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex float-area items-center w-full justify-center relative flex-col overflow-clip ">
          <img
            src={HERO_IMAGE}
            alt="hero-image"
            className="transform skew-y-2 floating-img"
          />
        </div>
      </section>
      <section className="bg-gray-700 lg:px-24 px-2 lg:py-24">
        <div className="text-center flex flex-col gap-4 lg:gap-4 mt-4 lg:mt-0">
          <span className="lg:text-[3rem] text-orange-500  lg:px-[30%] text-[1.6rem]  font-bold uppercase floating ">
            <span className="border-2 shadow-sm border-b-green-400 border-l-transparent border-r-transparent border-t-transparent  border-[overflow-clip]">
              Why choose Hexadev?
            </span>
          </span>
          <span className="lg:text-4xl text-gray-100  font-medium lg:px-[20%]">
            We Have The People, Platform, and Process to Help Your Company
            Succeed
          </span>
        </div>
        <div className="lg:px-24 px-2 ">
          <Section2 />
        </div>
      </section>

      {/*third section */}
    </main>
  );
}
