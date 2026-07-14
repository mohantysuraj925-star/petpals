import { Link } from "react-scroll";
import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "services", name: "Mission" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-2">
          <Leaf className="text-green-600" size={28} />
          <h1 className="text-2xl font-extrabold text-green-700">
            Green Earth
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-green-700 border-b-2 border-green-700"
              className="cursor-pointer text-gray-700 hover:text-green-600 font-medium transition-all pb-1"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg">
          {links.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b hover:bg-green-50 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
