const Hero = () =>{
    // const code = code.transformTo("code")
    return(
        <div className="w-full pt-32 pb-8 px-4 flex flex-col items-center">
            <span className="font-carter text-4xl text-stroke-white">Yuiko</span>
            {/* for 'code' */}
            <div className="font-mono text-sm bg-gray-100 p-2 my-4 rounded-lg">
                <span className="text-blue-800">const </span>
                <span className="text-blue-500">yuiko</span>
                <span> = </span>
                <span className="text-blue-500">design</span>
                <span className="text-gray-800">.</span>
                <span className="text-amber-500">transform</span>
                <span className="text-purple-500">(</span>
                <span className="text-amber-800">&ldquo;code&rdquo;</span>
                <span className="text-purple-500">)</span>
            </div>
        </div>
    )
}

export default Hero