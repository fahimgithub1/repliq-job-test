import TitelWithSpan from "../../lib/titleWithSpan";
import OverViewStatus from "./overViewStatus";



export default function OverView(props){

    return(
        <div className="mb-4">
            <TitelWithSpan
                            title="Overview" 
                            span="Last Week"
            />

            <div className="flex flex-wrap justify-between">
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
            </div>
        </div>
    )
}