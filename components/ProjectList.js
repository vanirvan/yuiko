import { useEffect, useRef, useState } from 'react'

const ProjectList = (props) =>{

    const [paramsTrigger, setParamsTriggrer] = useState()

    const testfunc = (id) =>{
        props.getData(id)
    }

    return(
        <>
            <div className='p-4 grid grid-cols-1 ssm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto'>
                { props.data.map((value, index) => 
                    <div key={index} onClick={() => testfunc(index)} className='w-full aspect-square rounded-md bg-blue-500 flex justify-center items-center'>
                        <span>{value.title}</span>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProjectList