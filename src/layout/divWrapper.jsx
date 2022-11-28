
export default function DivWrapper(props){

    return(
        <div className="p-2 bg-gray-200 rounded-md mb-2">
            {props.children}
        </div>
    )
}