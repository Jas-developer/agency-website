import ReviewCard from "./ReviewCards";

export default function Section2() {
  return (
    <section className="grid lg:grid-cols-2 mt-6">
      <div className="flex items-center justify-center lg:justify-start lg:items-start flex-col">
        <div className="relative ">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      <div className="flex flex-col gap-5  justify-center">
        <span className="text-orange-500 lg:text-4xl overflow-clip font-semibold ">
          LET US BE YOUR GUIDE
        </span>
        <p className="prose prose-md lg:prose-xl  prose-invert ">
          HEXADEV’s founders, <b className="text-green-700">Jason Evaristo </b>
          and <b className="text-green-700">Angelica Consorte</b>, have had
          multiple successful businesses and major exits, wrote best-selling
          books, invested in dozens of startups, and host a popular
          entrepreneurship podcast. It has been their mission to build great
          businesses and to help other entrepreneurs succeed.
        </p>
        <span className="prose prose-md lg:prose-xl font-medium prose-invert lg:mt-5">
          If you’re building a high-growth tech team, let us help you succeed.
        </span>
        <div className="  ">
          <button className="overflow-clip bg-black text-white font-semibold button lg:px-8 lg:p-2 px-4 p-1">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
}
