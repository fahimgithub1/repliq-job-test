

export default function Price(props){

    return(
        <div>
            <span className="font-bold mr-2 text-orange-900">{props.price}Tk</span>
            <span className=" text-gray-500 line-through" >{props.disPrice}</span>
        </div>
    )
}