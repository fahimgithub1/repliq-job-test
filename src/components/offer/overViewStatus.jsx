import DivWrapper from "../../layout/divWrapper";
import Span from "../../lib/span";
import Taitle from "../../lib/title";


export default function OverViewStatus(props){

    return(
        <div className="w-[49%]">
            <DivWrapper>
                <div className="p-3">
                    <Span span={props.ratingTitle} />
                    <Taitle title={props.persentage} />
                </div>
            </DivWrapper>
        </div>
    )
}