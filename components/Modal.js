import IconClose from 'components/icons/iconClose'

const Modal = (props) => {
    return(
        <div className={`w-full h-full ${(props.show ? 'z-10 opacity-100' : 'z-[-1] opacity-0')} fixed top-0 left-0 bg-black/25 flex justify-center items-center transition-all duration-300`}>
            <div className={`flex flex-col xs:max-w-[95%] sm:max-w-[90%] ssm:max-w-[85%] md:max-w-[75%] lg:max-w-[50%] w-full h-96 rounded-md bg-white ${props.show ? 'mt-0' : 'mt-24'} p-4 transition-all duration-300`}>
                <IconClose onClick={() => props.triggerModal(false)} className={`w-4 h-4 text-black self-end `} />
                <span>{props.data.title}</span>
            </div>
        </div>
    )
}

export default Modal