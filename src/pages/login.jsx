import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AfterLogin from "../components/login/afterLogin";
import FormWrapper from "../layout/fromWrapper";
import WrapperWithNavber from "../layout/wrapperWithNavber";
import Button from "../lib/button";
import Input from "../lib/input";
import Lable from "../lib/lable";
import AuthContext from "../store/authContext";


export default function Login(){
    const [Email, setEmail]= useState();
    const [Passoward, setPassoward]= useState();

    const authCtx = useContext(AuthContext);

    const InputEmail = (e) =>{
        setEmail(e.target.value);
    } 

    const InputPassoward = (e) =>{
        setPassoward(e.target.value);
    } 

    const LoginHandler = (event) =>{
        event.preventDefault();

        console.log(Email + "  " + Passoward);

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCW4CMBwjV7HOQXfo7H2AQ2QGcisycvPI',
            {
                method : 'POST',
                body : JSON.stringify({
                    email : Email,
                    password : Passoward,
                    returnSecureToken : true
                }),
                headers:{
                    'Content-Type' : 'application/json'
                }
            }
        ).then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return res.json().then(data=>{
                    console.log(data);

                })
            }
        }).then((data)=>{
            authCtx.login(data.idToken);
        });
        
        setEmail("");
        setPassoward("");
    }

    const isLoggedIn = authCtx.isLogdedIn;

    return(
        <WrapperWithNavber pageTitle={isLoggedIn ? "logout" : "Login"}>


            {!isLoggedIn && <div className="mt-4  w-[100%] ">
                <FormWrapper>
                    <Lable text='Email No' />
                    <Input placeholder='Enter Email' inputHamdler={InputEmail} text={Email} />

                    <Lable text='Passoward' />
                    <Input placeholder='Enter Passward'  inputHamdler={InputPassoward}  text={Passoward} />

                    <Button text='Login' submitHandler={LoginHandler} />

                    <div className="p-4 text-center underline text-lg">
                        <Link to='/ragistation'>
                            Registation
                        </Link>
                    </div>
                </FormWrapper>  
            </div>}  

            {isLoggedIn && <AfterLogin />}
        </WrapperWithNavber>
    )
}