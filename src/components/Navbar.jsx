import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "services", name: "Services" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-extrabold text-blue-700">
          Suraj
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={150}
              offset={-70}
              activeClass="text-blue-700 border-b-2 border-blue-700 font-bold"
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition-all duration-150 py-2"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          {links.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={150}
              offset={-70}
              activeClass="text-blue-700 font-bold"
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b cursor-pointer hover:bg-blue-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
