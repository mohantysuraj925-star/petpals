export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Innovation Week
          </h2>
          <p className="mt-3 text-gray-400 leading-7">
            A practice project built for Innovation Week to showcase modern
            web development using React, Vite and Tailwind CSS.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#services" className="hover:text-cyan-400">Services</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">Suraj Kumar Mohanty</p>
          <p className="text-gray-400">Innovation Week Practice Project</p>
          <p className="text-gray-400 mt-2">
            Email: example@email.com
          </p>
        </div>

      </div>

      <div className="border-t border-slate-700 mt-8 pt-6 text-center text-gray-500">
        © 2026 Innovation Week Project. All Rights Reserved.
      </div>
    </footer>
  );
}
