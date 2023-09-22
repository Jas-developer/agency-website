import { Link } from "react-router-dom";
import { useState } from "react";

type NAVIGATE = "HOME" | "SERVICES" | "ABOUT" | "CONTACT";

export default function Navbar() {
  const [currentNavigation, setCurrentNavigation] = useState<NAVIGATE>("HOME");
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenOrClose = () => {
    setOpen(open === true ? false : true);
  };

  return (
    <header className="grid lg:grid-cols-5 text-lg font-medium text-gray-100 lg:mt-2 md:px-12 lg:px-24 px-2 ">
      <div className="flex justify-between x-2 px-2 mt-2 ">
        logo
        <button onClick={handleOpenOrClose} className="lg:hidden">
          {open === true ? (
            <div className="border border-gray-600 px-2 rounded text-gray-100 font-semibold">
              X
            </div>
          ) : (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          )}
        </button>
      </div>
      <div className="col-span-4 lg:flex lg:flex-row lg:justify-end flex-col lg:gap-7  hidden">
        <Link to="/">
          <div
            onClick={() => setCurrentNavigation("HOME")}
            className={`x-2 p-1 ${
              currentNavigation === "HOME" ? `border-b-2 border-green-500` : ``
            }`}
          >
            Home
          </div>
        </Link>
        <Link to="/service">
          <div
            onClick={() => setCurrentNavigation("SERVICES")}
            className={` px-2 p-1 ${
              currentNavigation === "SERVICES"
                ? `border-b-2 border-green-500`
                : ``
            }`}
          >
            Services
          </div>
        </Link>
        <Link to="/about">
          <div
            onClick={() => setCurrentNavigation("ABOUT")}
            className={`px-2 p-1  ${
              currentNavigation === "ABOUT" ? `border-b-2 border-green-500` : ``
            }`}
          >
            About Us
          </div>
        </Link>
        <Link to="/contact">
          <button
            onClick={() => setCurrentNavigation("CONTACT")}
            className={`bg-green-600 text-white rounded-sm lg:ml-12 lg:px-3 p-1 ${
              currentNavigation === "CONTACT"
                ? `border-b-2 border-gray-500`
                : ``
            }`}
          >
            Contact
          </button>
        </Link>
      </div>
      <div
        className={`${
          open === true
            ? `border-2 border-gray-100 shadow-lg lg:border-transparent border-t-transparent border-l-transparent border-r-transparent  border-b--700`
            : ""
        }`}
      >
        <div
          className={`${
            open === true
              ? "flex col-span-4  mb-2  gap-1  items-end flex-col lg:gap-7  lg:hidden"
              : "hidden"
          }`}
        >
          <Link to="/">
            <div
              onClick={() => {
                setCurrentNavigation("HOME");
                setOpen(false);
              }}
              className={`px-2  ${
                currentNavigation === "HOME"
                  ? `border-b-2 border-green-500 `
                  : ``
              }`}
            >
              Home
            </div>
          </Link>
          <Link to="/service">
            <div
              onClick={() => {
                setCurrentNavigation("SERVICES");
                setOpen(false);
              }}
              className={` px-2  ${
                currentNavigation === "SERVICES"
                  ? `border-b-2 border-green-500`
                  : ``
              }`}
            >
              Service
            </div>
          </Link>
          <Link to="/about">
            <div
              onClick={() => {
                setCurrentNavigation("ABOUT");
                setOpen(false);
              }}
              className={`px-2  ${
                currentNavigation === "ABOUT"
                  ? `border-b-2 border-green-500`
                  : ``
              }`}
            >
              About
            </div>
          </Link>
          <Link to="/contact">
            <button
              onClick={() => {
                setCurrentNavigation("CONTACT");
                setOpen(false);
              }}
              className={` rounded-sm lg:ml-12 px-2  py-1 ${
                currentNavigation === "CONTACT"
                  ? `border-b-2 border-green-500 background-color`
                  : ``
              }`}
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
