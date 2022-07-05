import Image from "next/image"
import { useState, useEffect } from "react"

const Modal = (props) => {

    return(
        <div onClick={() => props.triggerModal(false)} className={`w-full h-full ${(props.show ? 'z-10 opacity-100' : 'z-[-1] opacity-0')} fixed top-0 left-0 bg-black/25 flex justify-center items-center transition-all duration-300`}>
            <div onClick={e => e.stopPropagation()} className={`flex flex-col max-w-[95%] sm:max-w-[90%] ssm:max-w-[85%] md:max-w-[75%] lg:max-w-[50%] w-full rounded-md bg-white ${props.show ? 'mt-0' : 'mt-24'} overflow-hidden transition-all duration-300`}>
                <img src={props.data.img} alt={"thumbnail"} />
                <div className="p-4 flex flex-col">
                    <span className="font-bold">{props.data.title}</span>
                    <span className="text-xs">by <a rel="noreferrer" target={"_blank"} href={`${props.data.source}`} className="underline">{props.data.author}</a></span>
                    <div className="flex my-4 self-end">
                        <a rel="noreferrer" target={"_blank"} href={`${props.data.preview}`} className="text-sm text-white rounded-full px-4 py-2 bg-[#f77f00] flex justify-center mr-2">Preview</a>
                        <a rel="noreferrer" target={"_blank"} href={`${props.data.github}`} className="text-sm text-white rounded-full px-4 py-2 bg-[#0D1117] flex justify-center ml-2">Github</a>
                    </div>
                    <span className="text-xs self-end">{props.data.date}</span>
                </div>
            </div>
        </div>
    )
}

export default Modal