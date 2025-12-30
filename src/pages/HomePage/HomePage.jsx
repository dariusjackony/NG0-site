import Hero from "../../components/Hero/Hero";
import Introduction from "../../components/Introduction/Introduction";
import WhatWeDo from "../../components/WhatWeDoSection/WhatWeDo";
import Testimonials from "../../components/Testimonials/Testimonials";
export default function HomePage() {
    return(
        <>
         <Hero />
         <Introduction />
         <WhatWeDo />
         <Testimonials />
        </>
    )
}