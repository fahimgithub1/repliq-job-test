

export default function ImageBox(props){

    return(
        <div className="w-[70px] h-[70px] overflow-hidden mr-3">
            <img src={props.customerImg} alt="images" className="h-full w-full rounded-md mr-3" />
        </div>
    )
}