import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LearnMore from "./pages/LearnMore";


function App() {

  return (

    <BrowserRouter>

      <div className="bg-white overflow-x-hidden">

        <Navbar />

        <main>

          <Routes>

            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Services />
                  <Contact />
                </>
              }
            />


            <Route
              path="/learn-more"
              element={<LearnMore />}
            />

          </Routes>

        </main>


        <Footer />

      </div>

    </BrowserRouter>

  );

}

export default App;
