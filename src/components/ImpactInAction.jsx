
export default function ImpactInAction() {
    return(
        <section className="mt-10 px-4 lg:text-center md:text-center">
            <span className="mt-2 text-2xl">Real Lives. Real Impact</span>
            <p className="mt-2 text-gray-700 lg:text-xl lg:max-w-[800px] lg:m-auto md:max-w-[500px] md:m-auto">
                Watch how your support is tranforming lives and strengthening communities 
                through real stories and meaningful action.
            </p>
            <div className="mt-2 aspect-video overflow-hidden rounded-lg lg:max-w-[800px] md:max-w-[500px] md:m-auto lg:m-auto md:mt-7
            lg:mt-10">
                <iframe 
                className="w-full h-full shadow-lg "
                title="Supporting Lives"
                src="https://youtu.be/KbF77xhyQHw?si=/embed/EzqV9Xk9LqFzlbX7" 
                allowFullScreen
                ></iframe>
            </div>
        </section>
    )
}