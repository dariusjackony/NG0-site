import Hero from "../components/Hero";
import ImpactSection from "../components/ImpactSection";
import Introduction from "../components/Introduction";
import FocusAreas from "../components/FocusAreas";
import ImpactInAction from "../components/ImpactInAction";
import RelatedPosts from "../components/RelatedPosts";
import Volunteer from "../components/Volunteer";
import CTA from "../components/CTA";
export default function HomePage() {
    return(
        <>
         <Hero />
         <Introduction />
         <ImpactSection />
         <FocusAreas />
         <ImpactInAction />
         <RelatedPosts />
         <Volunteer />
         <CTA />
        </>
    )
}