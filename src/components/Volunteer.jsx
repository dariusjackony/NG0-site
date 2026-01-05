import Sponser from "../assets/muzei.jpeg";
export default function Volunteer() {
    const Volunteers = [
        {
          image: Sponser,
          name: "Woori T.",
          rank: "Community Leader",
        },
        {
          image: Sponser,
          name: "Sarah M.",
          rank: "Youth Coordinator",
        },
        {
         image: Sponser,
         name: "Daniel K.",
         rank: "Project Volunteer",
        },
        {
         image: Sponser,
         name: "Daniel K.",
         rank: "Project Volunteer",
        },
    ]
    return(
        <section className="px-4 mt-8 lg:mt-1">
            <p className="max-w-[400px] text-center m-auto text-2xl">
                Meet Our Volunteers Behind the Success Story
            </p>
            <p className="mt-2 text-gray-700 lg:text-xl text-center">
              Dedicated individuals working behind the scenes to make our mission a success.
           </p>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 lg:flex lg:justify-center lg:gap-10 justify-items-center">
          {Volunteers.map((volunteer, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center  p-6 rounded-xl shadow-lg"
          >
            <img
              src={volunteer.image}
              alt={volunteer.name}
              className="w-24 h-24 rounded-full object-cover border-amber-400 border-1"
            />
            <p className="mt-4 font-medium">{volunteer.name}</p>
            <p className="text-sm text-gray-500">{volunteer.rank}</p>
          </div>
        ))}
       </div>
        </section>
    )
}