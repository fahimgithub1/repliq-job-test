import DivWrapper from "../../layout/divWrapper";
import ImageBox from "../../lib/imageBox";
// import customerImg from '../../assets/images/customers.webp';
import Taitle from "../../lib/title";
import Span from "../../lib/span";

export default function PerCustomers(props){

    return (
        <DivWrapper >
            <div className="flex items-center">
                <ImageBox customerImg={props.image} />
                
                <div>
                    <Taitle title={props.name} />
                    <Span span={props.orders} />
                </div>
            </div>
        </DivWrapper>
    )
}