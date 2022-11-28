import Span from "./span";
import Taitle from "./title";



export default function TitelWithSpan(props){

    return(
        <div className="flex justify-between mb-4">
            <Taitle title={props.title} />
            <Span span={props.span} />
        </div>
    )
}