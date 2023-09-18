import { Link } from "react-router-dom";
import { useState } from "react";

type NAVIGATE = "HOME" | "SERVICES" | "ABOUT" | "CONTACT";

export default function Navbar() {
  const [currentNavigation, setCurrentNavigation] = useState<NAVIGATE>();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="grid lg:grid-cols-5 text-lg font-medium text-gray-800 lg:mt-2">
      <div className="x-2 p-1">logo</div>
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
            className={`bg-green-600 text-white rounded-md lg:ml-12 lg:px-3 p-1 ${
              currentNavigation === "CONTACT"
                ? `border-b-2 border-gray-500`
                : ``
            }`}
          >
            Contact
          </button>
        </Link>
      </div>
    </header>
  );
}
