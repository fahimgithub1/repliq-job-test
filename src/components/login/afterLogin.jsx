import { useContext } from "react";
import Button from "../../lib/button";
import AuthContext from "../../store/authContext";


export default function AfterLogin(){
    const authCtx = useContext(AuthContext);

    const Logouthandler = (event) =>{
        event.preventDefault();

        authCtx.logout();
    }

    return(
        <div>
            <h1 className="font-bold mt-20 pl-4 text-4xl mb-3">You Are Logddin</h1>
            <Button text="logout" submitHandler={Logouthandler}/>
        </div>
    )
}