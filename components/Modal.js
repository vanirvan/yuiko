const Modal = (props) => {

    if(!props.show){
        return null
    }

    return(
        <div className="w-full h-full fixed top-0 left-0 bg-black/25 flex justify-center items-center">
            <div className="flex flex-col max-w-[50%] w-24 h-96 bg-white">

            </div>
        </div>
    )
}

export default Modal