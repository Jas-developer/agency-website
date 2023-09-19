import HERO_IMAGE from "../assets/images/LOPTOP_HERO_IMAGE.png";
import Section2 from "../components/section2/Section2";

export default function HomePage() {
  return (
    <main className=" lg:mt-[8rem] ">
      <section className="grid lg:grid-cols-2 lg:pb-[4rem] items-center ">
        <div className="">
          <fieldset className=" border-t-orange-400 border-y-[1rem] lg:border-y-[2rem] border-b-transparent border-r-transparent border-l-transparent  border-double border text-xl lg:text-4xl font-medium  rounded-md">
            <legend className="font-bold text-green-600 text-2xl lg:text-5xl ">
              HEXADEV
            </legend>
            <h1 className="mt-2">
              PROVIDE SOFTWARE SOLUTIONS FOR YOUR BUSINESS
            </h1>
          </fieldset>
          <div className="prose prose-md lg:prose-xl ">
            <p>
              We specialize in creating software tailored to your business
              needs, whether it's streamlining operations, enhancing customer
              experiences, or boosting efficiency.
            </p>
            <p>
              Partner with us to unlock your business's full potential through
              technology. Contact us today to get started.
            </p>
          </div>
          <div className="mt-2">
            <button className="lg:px-8 lg:p-2 px-4 p-1 rounded-sm shadow-lg text-white font-semibold bg-green-500">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <img src={HERO_IMAGE} alt="hero image" className="lg:w-[80%] " />
          <span className="border-2 border-orange-500 lg:px-12 text-lg font-semibold rounded-lg py-2 text-green-500">
            Boosted with seo to attract customers.
          </span>
        </div>
      </section>
      {/* second section */}
      <section className="bg-white">
        <Section2 />
      </section>
    </main>
  );
}
