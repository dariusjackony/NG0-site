import { useEffect, useState } from "react";
import BgPic from "../assets/ghettokids.png";
import { Button } from "./Button";
export default function Hero() {
   const [show, setShow] = useState(false);

   useEffect(() =>{
      setShow(true);
   }, [])
    return(
        <section className="flex  text-left h-[65vh] relative bg-cover bg-center
         lg:h-[100vh] md:h-[55vh]
        "
          style={{backgroundImage: `url(${BgPic})`}}
        >
             <div className="absolute inset-0 bg-black/50"></div>
              <div className="z-10 text-white px-5 pt-40 md:pt-50 lg:pl-15">
                 <p className={`mb-1 md:text-lg lg:text-base lg:text-xl transition-all duration-700 ${
                  show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                 }`}>Together We Can</p>
                 <p className={`mt-3 text-3xl font-bold md:text-4xl lg:text-6xl lg:max-w-[850px] lg:max-w-2x1 md:max-w-[400px] transition-all duration-700 ${
                  show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                 }`}>
                    Empowering Communities For A Better Tomorrow
                 </p>
                 <p className={`mb-5 md:text-lg lg:text-4x1 md:max-w-[450px] lg:mt-5 lg:text-xl transition-all duration-700 ${
                  show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                 }`}>
                    We help vulnerable communities access education, healthcare, and hope.
                 </p>

                 <Button>
                    Donate Now
                 </Button>
              </div>
        </section>
    )
}