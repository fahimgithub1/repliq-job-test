
export default function Button(props){

    return(
        <button className="bg-orange-700 p-3 w-full text-white text-lg font-bold rounded-lg hover:bg-orange-500 " onClick={props.submitHandler}>
            {props.text}
        </button>
    )
}