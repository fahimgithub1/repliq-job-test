import DivWrapper from "../../layout/divWrapper";
import ImageBox from "../../lib/imageBox";
import Price from "../../lib/price";
import Span from "../../lib/span";
import Taitle from "../../lib/title";


export default function PerOrder(props){

    return(
        <DivWrapper >
            <div>
                <div className="flex justify-between mb-1">
                    <Taitle title={props.productName} />
                    <span>{props.date}</span>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <ImageBox customerImg={props.image} />
                        
                        <div>
                            <Span span={props.avilable} />
                            <Price 
                                    price={props.price}
                                    disPrice={props.disPrice}
                            />
                        </div>
                    </div>

                    <div className="">
                        <span className="p-1 px-2 text-white bg-red-600 text-center rounded-md" >{props.status}</span>
                    </div>
                </div>
            </div>
            
            <div className="p-1 mt-3 text-center border-t-[1px] border-gray-600">
                <button className="text-gray-800 px-5 mt-1.5 font-bold text-lg py-0 border-[2px] border-gray-700 rounded-md cursor-pointer">
                    Details
                </button>
            </div>
        </DivWrapper>
    )
}