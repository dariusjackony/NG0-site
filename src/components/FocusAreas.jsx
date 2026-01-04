import { FaUsers, FaHandsHelping, FaLightbulb} from "react-icons/fa";
export default function FocusAreas() {
    const Data = [
        {
         id: 1,
         title: "Community Support",
         description: "We work directly with local communities to identify needs and provide resources that empower individuals and families.",
         icon: FaUsers
        },
        {
         id: 2,
         title: "Community Support",
         description: "We work directly with local communities to identify needs and provide resources that empower individuals and families.",
         icon: FaHandsHelping
        },
        {
         id: 3,
         title: "Community Support",
         description: "We work directly with local communities to identify needs and provide resources that empower individuals and families.",
         icon: FaLightbulb
        },
        
        
    ]
    return(
       <section className="pt-10 px-4 bg-gray-50 mt-4 lg:mt-20 md:mt-20 p-10">
          <div className="lg:col lg:text-center lg:justify-center md:text-center">
            <p className="text-2xl">Our Focus Areas</p>
            <p className="mt-2 lg:text-xl text-gray-700">
                Our Work is dedicated to creating <span className="font-semibold">meaningful change</span> in the 
                communities we serve.
            </p>
          </div>
          <div className="lg:flex lg:justify-around lg:gap-2 md:flex md:gap-2">
            {Data.map((card) => (
             <div key={card.id} className="mt-4 bg-white p-5 shadow-lg rounded-2xl lg:max-w-[400px] lg:p-4 lg:mt-10 text-center align-center md:max-w-[300px] md:p-3">
              <div className="flex flex-col">
                <card.icon className="text-3xl text-amber-600 mx-auto mb-4"/>
                <span className="text-xl font-semibold">{card.title}</span>
              </div>
                <p className="mt-2 text-gray-700 lg:text-xl">{card.description}</p>
             </div>

            ))}
          </div>
       </section>
    )
}