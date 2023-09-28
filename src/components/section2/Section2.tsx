import ReviewCard from "./ReviewCards";

export default function Section2() {
  return (
    <section className="grid lg:grid-cols-2 z-20 mt-6 gap-5 font-serif">
      <div className="flex items-center justify-center  lg:justify-start lg:items-start flex-col">
        <div className="relative ">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      <div className="z-30 relative">
        <div className="flex  lg:bg-gray-200 flex-col  p-4 lg:w-[100%] lg:mt-8  rounded-lg shadow-2xl z-30 lg:items-center lg:h-[30rem]   gap-5  items-center justify-center">
          <div
            className="lg:absolute  text-center text-lg px-2 lg:text-4xl justify-center lg:flex rounded-t-lg rounded-b-md lg:w-[30rem] lg:h-[6rem] items-center text-gray-100 transform  lg:top-[0.5rem] lg:left-[2rem] top-1 hidden
            z-50 bg-gray-700"
          >
            LET US BE YOUR GUIDE
          </div>
          <div>
            <p className="prose prose-md md:prose-lg lg:prose-xl text-gray-100 lg:text-gray-900  lg:text-start ">
              HEXADEV’s founders
              <b className="text-green-700">Jason Evaristo </b>
              and <b className="text-green-700">Angelica Consorte</b>, have had
              multiple successful businesses and major exits, wrote best-selling
              books, invested in dozens of startups, and host a popular
              entrepreneurship podcast. It has been their mission to build great
              businesses and to help other entrepreneurs succeed.
            </p>
            <span className="prose prose-md md:prose-lg lg:prose-xl font-medium text-gray-100 lg:text-gray-900 lg:mt-5">
              If you’re building a high-growth tech team, let us help you
              succeed.
            </span>
            <div className="flex justify-start lg:items-start mt-4 ">
              <button className="overflow-clip bg-black background-color text-gray-100 font-semibold lg:px-8 lg:p-2 px-4 p-1">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
