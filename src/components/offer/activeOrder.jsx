import TitelWithSpan from "../../lib/titleWithSpan";
import PerOrder from "../ordes/perOrder";



export default function AciveOrder(props){

    return(
        <div className="mb-4">
            <TitelWithSpan
                            title="Acive Orders" 
                            span="View All"
            />

                {props.OrderInfo.map((item)=>(
                    <PerOrder   key={item.id}
                                image={item.image} 
                                productName={item.productName}
                                avilable={item.item}
                                price={item.price}
                                status={item.status}
                                date={item.date}
                    />
                ))}

            {/* <div className="flex flex-wrap justify-between">
                <OverViewStatus 
                                ratingTitle="Total sell"
                                persentage="43948Tk"
                />
                <OverViewStatus 
                                ratingTitle="Shop View"
                                persentage="644"
                />
                <OverViewStatus 
                                ratingTitle="Product View"
                                persentage="78544"
                />
                <OverViewStatus 
                                ratingTitle="Return"
                                persentage="43"
                />
            </div> */}
        </div>
    )
}