import banner from "../assets/banner-stack.png"

const Banner = () => {
    
    return (
        <div className="container mx-auto px-4 pt-12 md:pt-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-20">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold md:font-extrabold leading-tight">Build Your Ideal <br/> 
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-purple-500">Development Stack</span></h1>

                <p className="my-6 text-[#475569] text-lg max-w-xl">
                Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>
            
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button onClick={()=>{document.getElementById('tech-section')?.scrollIntoView({ behavior: 'smooth' })}} className="btn btn-secondary rounded-lg bg-linear-to-r from-[#F97316] to-[#EC4899] px-6">Explore Technologies</button>
                <button className="btn btn-outline border-[#E5E7EB] rounded-lg px-14">Learn More</button>
                </div>
            </div>
            <div className="flex justify-center md:justify-end">
                <img src={banner} alt="Banner Stack" className="w-full md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300" />
            </div>
        </div>
    )
}

export default Banner;