import { Link } from "react-router-dom";
import SearchDiv from "../../lib/searchdiv";


export default function Navber(props){

    return(
        <nav className="bg-blue-700 fixed w-full max-w-[475px] left-0 top-0 p-3 px-[15px]  md:left-[calc((100%_-_475px)/2)] md:w-[475px]">
            <div className="flex justify-between items-center">
                <div className="text-xl text-white">
                    <Link to='/'>
                        {props.backIcon}
                    </Link>
                </div>
                
                <div className="font-semibold text-2xl text-white">
                    {props.pageTitle}
                </div>

                <div>
                    {/*  */}
                </div>
            </div>

            <SearchDiv />
        </nav>
    )
}