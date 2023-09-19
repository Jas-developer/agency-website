export default function ReviewCard() {
  return (
    <div>
      <div className="bg-gray-800 text-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Hello!
            </div>
            <p className="block mt-1 text-lg leading-tight font-medium text-white">
              Hover Me (Love You Guys)
            </p>
            <p className="mt-2 text-gray-400">
              You're a monster. I can swallow a bottle of alcohol and I'll feel
              like Godzilla. Better hit the deck like the card dealer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
