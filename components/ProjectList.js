import { useEffect, useRef } from 'react'

const ProjectList = (props) =>{
    return(
        <>
            <div className='py-4 grid grid-cols-1 ssm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto'>
                { props.data.map((value, index) => 
                    <div key={index} className='w-full aspect-square rounded-md bg-blue-500'>

                    </div>
                )}
            </div>
        </>
    )
}

export default ProjectList