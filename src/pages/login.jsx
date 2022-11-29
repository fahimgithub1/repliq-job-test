import { useState } from "react";
import { Link } from "react-router-dom";
import FormWrapper from "../layout/fromWrapper";
import WrapperWithNavber from "../layout/wrapperWithNavber";
import Button from "../lib/button";
import Input from "../lib/input";
import Lable from "../lib/lable";


export default function Login(){
    const [Mobile, setMobile]= useState();
    const [Passoward, setPassoward]= useState();

    const InputMobile = (e) =>{
        setMobile(e.target.value);
    } 

    const InputPassoward = (e) =>{
        setPassoward(e.target.value);
    } 

    const LoginHandler = (event) =>{
        event.preventDefault();

        console.log(Mobile + "  " + Passoward);
        
        setMobile("");
        setPassoward("");
    }

    return(
        <WrapperWithNavber pageTitle="Login">
            <div className="mt-4  w-[100%] ">
                <FormWrapper>
                    <Lable text='Mobile No' />
                    <Input placeholder='Enter Mobile' inputHamdler={InputMobile} text={Mobile} />

                    <Lable text='Passoward' />
                    <Input placeholder='Enter Passward'  inputHamdler={InputPassoward}  text={Passoward} />

                    <Button text='Login' submitHandler={LoginHandler} />

                    <div className="p-4 text-center underline text-lg">
                        <Link to='/ragistation'>
                            Registation
                        </Link>
                    </div>
                </FormWrapper>  
            </div>          
        </WrapperWithNavber>
    )
}