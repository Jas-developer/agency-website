import HERO_IMAGE from "../assets/images/LOPTOP_HERO_IMAGE.png";

export default function HomePage() {
  return (
    <main className="w-full mx-[auto] lg:mt-[8rem] px-2">
      <section className="grid lg:grid-cols-2 lg:pb-[4rem] items-center">
        <div className="">
          <fieldset className=" border-t-orange-400 border-y-[1rem] lg:border-y-[2rem] border-double border text-xl lg:text-4xl font-medium  rounded-[30%]">
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
        <div className="flex items-center justify-center border-2 border-t-transparent border-l-transparent border-r-transparent w-full border-b-green-400">
          <img src={HERO_IMAGE} alt="hero image" className="lg:w-[80%] " />
        </div>
      </section>
    </main>
  );
}
