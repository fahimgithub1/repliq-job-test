import DivWrapper from "../../layout/divWrapper";
import ImageBox from "../../lib/imageBox";
import { FiShare2 } from 'react-icons/fi';
import Taitle from "../../lib/title";
import Span from "../../lib/span";
import Price from "../../lib/price";

export default function PerProduct(props){

    return (
        <DivWrapper >
            <div className="flex justify-between">
                <div className="flex items-center">
                    <ImageBox customerImg={props.image} />
                    
                    <div>
                        <Taitle title={props.productName} />
                        <Span span={props.avilable} />
                        <Price 
                                price={props.price}
                                disPrice={props.disPrice}
                        />
                    </div>
                </div>

                <div className="">
                    <FiShare2 className="text-2xl cursor-pointer"/>
                </div>
            </div>
            
            <div className="p-1 mt-3 text-center border-t-[1px] border-gray-600">
                <button className="text-gray-800 px-5 mt-1.5 font-bold text-lg py-0 border-[2px] border-gray-700 rounded-md cursor-pointer"   >View</button>
            </div>
        </DivWrapper>
    )
}