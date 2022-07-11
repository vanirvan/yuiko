import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const ProjectList = (props) =>{

    const [paramsTrigger, setParamsTriggrer] = useState()

    const testfunc = (id) =>{
        props.getData(id)
    }

    return(
        <>
            <div className='p-4 grid grid-cols-1 ssm:grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto'>
                { props.data.map((value, index) => 
                    <div key={index} onClick={() => testfunc(index)} className='relative w-full aspect-video rounded-md bg-gray-800 flex justify-center items-center shadow-lg overflow-hidden'>
                        <Image src={value.img} alt="thumbnail" layout='fill' objectFit='cover' priority />
                    </div>
                )}
            </div>
        </>
    )
}

export default ProjectList