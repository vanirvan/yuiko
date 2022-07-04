const About = () => {
    return(
        <div className="border-t-[1px] bg-white border-gray-300 w-full">
            <div className="pt-16 flex flex-col items-center max-w-5xl mx-auto">
                <span className="text-2xl font-carter my-4">About</span>
                <div className="w-full">
                    <span><b>Yuiko</b> is a side project i made to increase my css skill. Taking UI design from Dribbble, Instagram or anywhere and transforming into a functional website using HTML and CSS.</span>
                </div>
                <div className="flex flex-col my-16 items-center">
                    <span>Made using <a href="https://nextjs.org/" target={"_blank"} className="text-blue-500">Next JS</a> and hosted in <a href="https://vercel.com/" target={"_blank"} className="text-blue-500">Vercel</a></span>
                    <span>Source code available on <a href="https://github.com/vanirvan/yuiko" target={"_blank"} className="text-blue-500">Github</a>!</span>
                </div>
            </div>
        </div>
    )
}

export default About