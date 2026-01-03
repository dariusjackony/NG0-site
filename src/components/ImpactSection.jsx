import ImpactPic from "../assets/books.jpg";
import { Button } from "./Button";
export default function ImpactSection(){
    return(
        <section >
            <div className="mt-2 px-4 mx-auto lg:flex lg:justify-center md:flex md:justify-center">
                <div className="mt-10">
                    <img src={ImpactPic} alt="woman" className=" rounded-lg shadow-lg w-3/2  lg:w-3/4 mx-auto lg:mt-5 md:w-3/4" />
                </div>
                <div className="mt-2 lg:mt-10">
                    <p className="mt-2 text-2xl">
                        Be a Changemaker
                    </p>
                    <p className="mt-2 text-gray-700 mb-5 lg:max-w-[500px] lg:text-xl md:max-w-[400px]">
                        Every meaningful change begins with a single step. By supporting our work, you become part of a growing movement
                        dedicated to uplifting communities, creating opportunities, and building sustainable solutions that last. Together, we can turn compassion
                        into action and make a lasting impact where it matters most.
                    </p>
                    <Button>
                        Get Involved
                    </Button>
                </div>
            </div>
        </section>
    )
}