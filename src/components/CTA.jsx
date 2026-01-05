import Aerial from "../assets/aerial.webp";
import { Button } from "./Button";
export default function CTA() {
    return(
     <section className="mt-10 
          relative h-[30vh] bg-cover bg-center lg:h-[53vh]"
         style={{backgroundImage: `url(${Aerial})`}}
         >
          <div className="absolute inset-0 bg-black/50"></div>
           <div className=" z-10 relative pt-13 lg:pt-30  text-white text-center mx-auto">
             <p className=" font-bold text-2xl max-w-[280px] m-auto md:text-3xl md:max-w-[500px] md:pt-10 lg:text-5xl lg:max-w-[600px]">
               Join us and help create positive change
             </p>
             <div className="mt-5">
                 <button className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white px-3 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition">
                    Become a Volunteer
                 </button>
             </div>
           </div>
      </section>
    )
}