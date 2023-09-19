import ReviewCard from "./ReviewCards";

export default function Section2() {
  return (
    <section className="grid lg:grid-cols-2 mt-6">
      <div className="flex items-center justify-center lg:justify-start lg:items-start flex-col">
        <h2 className="lg:text-3xl font-semibold text-gray-900 flex flex-col ">
          <span>
            <b className="text-green-600">Comprehensive</b> partner for all your
          </span>
          <span>digital solution needs.</span>
        </h2>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div></div>
    </section>
  );
}
