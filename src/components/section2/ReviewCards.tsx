import "../../styles/Floating.css";

export default function ReviewCard() {
  return (
    <div className="flex  justify-center shadow-sm ">
      <div className=" bg-gray-100      text-gray-900 max-w-md mx-auto rounded-sm  shadow-md overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl  transition-all duration-500 ease-in-out">
        <div className="md:flex ">
          <div className="lg:p-8 p-4 ">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
              Excellence
            </div>
            <p className="block mt-1 text-lg leading-tight font-medium  text-gray-900"></p>
            <p className="mt-2 text-gray-900 text-lg font-serif md:text-2xl ">
              We take pride in doing things well. All our work is done with the
              best quality possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
