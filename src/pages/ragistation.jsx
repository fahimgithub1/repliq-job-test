import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AfterLogin from "../components/login/afterLogin";
import FormWrapper from "../layout/fromWrapper";
import WrapperWithNavber from "../layout/wrapperWithNavber";
import Button from "../lib/button";
import Input from "../lib/input";
import Lable from "../lib/lable";
import AuthContext from "../store/authContext";


export default function Ragistation(){
    const [Email, setEmail]= useState();
    const [Passoward, setPassoward]= useState();
    const [ConfPassoward, setConfPassoward]= useState();

    const authCtx = useContext(AuthContext);

    const isLogdedIn = authCtx.isLogdedIn;

    const InputEmail = (e) =>{
        setEmail(e.target.value);
    } 

    const InputPassoward = (e) =>{
        setPassoward(e.target.value);
    } 

    const InputConPassoward = (e) =>{
        setConfPassoward(e.target.value);
    } 

    const RegisterHandler = (event) =>{
        event.preventDefault();

        // console.log(Email + "  " + Passoward + '   ' + ConfPassoward);

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCW4CMBwjV7HOQXfo7H2AQ2QGcisycvPI',
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
        setConfPassoward("");
    }

    return(
        <WrapperWithNavber pageTitle="Register">


            {!isLogdedIn && <div className="mt-4  w-[100%] pb-20">
                    <FormWrapper>
                        <Lable text='Email No' />
                        <Input placeholder='Enter Email'  inputHamdler={InputEmail} text={Email} />

                        <Lable text='Passoward' />
                        <Input placeholder='Enter Passward'  inputHamdler={InputPassoward} text={Passoward} />

                        <Lable text='Conferm Passoward' />
                        <Input placeholder='Enter Passward'  inputHamdler={InputConPassoward} text={ConfPassoward} />

                        <Button text='Register'  submitHandler={RegisterHandler} />

                        <div className="p-4 text-center  underline text-lg">
                            <Link to='/'>
                                Go to Login
                            </Link>
                        </div>
                    </FormWrapper>  
                </div>   
            }   

            {isLogdedIn && <AfterLogin />}    
        </WrapperWithNavber>
    )
}