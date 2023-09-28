import { useState } from "react";

import {
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
  Finish,
} from "../components/getstarted/Questions";

type SLIDE_STATE =
  | "DEFAULT"
  | "SLIDE_1"
  | "SLIDE_2"
  | "SLIDE_3"
  | "SLIDE_4"
  | "SLIDE_5"
  | "SLIDE_6"
  | "SLIDE_7"
  | "SLIDE_8"
  | "SLIDE_9"
  | "SLIDE_10"
  | "FINISH";

const BUTTON_STYLE = "px-4 p-1 bg-green-500 text-gray-100 font-semibold";

export default function GetStarted() {
  const [slide, setSlide] = useState<SLIDE_STATE>("DEFAULT");

  const next = (slide: SLIDE_STATE) => {
    setSlide(slide);
  };

  return (
    <div className="flex flex-col ">
      <h1 className="lg:text-3xl text-gray-100">GetStarted</h1>
      {slide === "DEFAULT" ? (
        <div className="flex flex-col">
          <span className="lg:text-xl text-gray-100">
            Thank you for considering us to create your website. We're excited
            to work with you and want to ensure that we fully understand your
            vision and requirements. To get started, we'd like to ask you some
            questions that will help us create a website that perfectly fits
            your needs. Please feel free to share as much detail as possible;
            your input is crucial in making this project a success. Please click
            proceed button below.
          </span>
          <button onClick={() => next("SLIDE_1")} className={BUTTON_STYLE}>
            Proceed
          </button>
        </div>
      ) : (
        <div>
          {slide === "SLIDE_1" ? (
            <div>
              <Question1 />
              <button onClick={() => next("SLIDE_2")} className={BUTTON_STYLE}>
                Next
              </button>
            </div>
          ) : (
            ""
          )}
          {slide === "SLIDE_2" ? (
            <div>
              <Question2 />
              <button onClick={() => next("SLIDE_3")} className={BUTTON_STYLE}>
                Next
              </button>
            </div>
          ) : (
            ""
          )}
          {slide === "SLIDE_3" ? (
            <div>
              <Question3 />
              <button onClick={() => next("SLIDE_4")} className={BUTTON_STYLE}>
                Next
              </button>
            </div>
          ) : (
            ""
          )}
          {slide === "SLIDE_4" ? (
            <div>
              <Question4 />
              <button onClick={() => next("SLIDE_5")} className={BUTTON_STYLE}>
                Next
              </button>
            </div>
          ) : (
            ""
          )}
          {slide === "SLIDE_5" ? (
            <div>
              <Question5 />
              <button onClick={() => next("SLIDE_6")} className={BUTTON_STYLE}>
                Next
              </button>
            </div>
          ) : (
            ""
          )}
          {slide === "SLIDE_6" ? (
            <div>
              <Question6 />
              <button onClick={() => next("SLIDE_7")} className={BUTTON_STYLE}>
                Next
              </button>
            </div>
          ) : (
            ""
          )}
          {slide === "SLIDE_7" ? (
            <div>
              <Question7 />
              <button onClick={() => next("SLIDE_8")} className={BUTTON_STYLE}>
                Next
              </button>
            </div>
          ) : (
            ""
          )}
          {slide === "SLIDE_8" ? (
            <div>
              <Question8 />
              <button onClick={() => next("SLIDE_9")} className={BUTTON_STYLE}>
                Next
              </button>
            </div>
          ) : (
            ""
          )}
          {slide === "SLIDE_9" ? (
            <div>
              <Question9 />
              <button onClick={() => next("SLIDE_10")} className={BUTTON_STYLE}>
                Next
              </button>
            </div>
          ) : (
            ""
          )}
          {slide === "SLIDE_10" ? (
            <div>
              <Question10 />
              <button onClick={() => next("FINISH")} className={BUTTON_STYLE}>
                Next
              </button>
            </div>
          ) : (
            ""
          )}
          {slide === "FINISH" ? (
            <div>
              <Finish />
              <button onClick={() => next("DEFAULT")} className={BUTTON_STYLE}>
                Submit
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}
