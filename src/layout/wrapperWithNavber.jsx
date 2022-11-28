// import Navber from "../components/navber/navber";
import BottomNav from "../components/navber/bottomNev";
import Navber from "../components/navber/navber";
import WidthWtappper from "./widthWrapper";

export default function WrapperWithNavber(props){

    return(
        <WidthWtappper>
            <Navber pageTitle={props.pageTitle} backIcon={props.backIcon} />
            {props.children}

            <BottomNav />
        </WidthWtappper>
    )
}