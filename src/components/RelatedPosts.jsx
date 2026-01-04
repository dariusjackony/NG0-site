import { useState } from "react";
import Children from "../assets/children.jpg";
import { Button } from "./Button";
export default function RelatedPosts(){
    const posts = [
        {
          id: 1,
          image: Children,
          date: "25 Apr 2025",
          title: "Book Donation",
          text: "Donated learning books to ghetto youths in Nakawa, supporting education access and encouraging a culture of reading."
        },
        {
          id: 2,
          image: Children,
          date: "25 Nov 2025",
          title: "Community Clean-up",
          text: "Organized a clean-up campaign in Kyebando-kisalosalo to promote hygiene, environmental responsibility and community pride."
        },
        {
          id: 3,
          image: Children,
          date: "1 Jan 2026",
          title: "Youth Mentorship",
          text: "Hosted a mentorship session for Kamwokya youths focused on life skills, discipline, and future career guidance."
        },
        {
          id: 4,
          image: Children,
          date: "6 Oct 2026",
          title: "School Supplies",
          text: "Provided essential school materials to children in underserved Karamoja communities to support consistent learning."
        },
        
    ]
     //Track active slide
        const [activeIndex, setActiveIndex] = useState(0);
    return(
      <section className="mt-10 px-4 lg:p-20 md:p-10">
        <div>
          <span className="text-2xl">Related Posts</span>
          <p className="mt-2 text-gray-700 lg:text-xl lg:max-w-[700px] md:max-w-[400px] ">
            Discover related articles that showcase our work the lives we touch,
            and the progress we are making towards a better future.
          </p>
        </div>
        <div className="mt-3 overflow-hidden">
          <div className="flex lg:gap-5 md:gap-5 lg:flex-4
          transition-transform duration-500"
           style={{ transform: `translateX(-${activeIndex * 100}%)`}}
          >
            {posts.map((card, i) =>(
                <div key={i} className="bg-gray-50 rounded-lg overflow-hidden
                min-w-full lg:min-w-1/3 md:min-w-1/3
                ">
                  <img src={card.image} alt=""  className="w-full object-cover"/>
                  <div className="p-4">
                    <p className="text-xl flex">{card.title}</p>
                    <p className="text-gray-800">.{card.date}</p>
                    <p className="text-gray-700 mb-5 mt-3">{card.text}</p>
                    <Button>
                      Read More
                    </Button>
                  </div>
                </div>
            ))}
          </div>   
          <div className="flex justify-center gap-3">
            {posts.map((_, i) => (
              <button 
              key={i}
              onClick={ () => setActiveIndex(i)}
               className={`w-7 h-7 rounded-full cursor-pointer mt-5 text-white ${
                activeIndex === i ? "bg-yellow-400" : "bg-gray-300"
               }`}
              >
               {_.id}
              </button>
            ))}  
          </div>  
        </div>
      </section>
    )
}