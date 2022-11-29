import { useState } from "react";
import { Link } from "react-router-dom";
import FormWrapper from "../layout/fromWrapper";
import WrapperWithNavber from "../layout/wrapperWithNavber";
import Button from "../lib/button";
import Input from "../lib/input";
import Lable from "../lib/lable";


export default function Ragistation(){
    const [Mobile, setMobile]= useState();
    const [Passoward, setPassoward]= useState();
    const [ConfPassoward, setConfPassoward]= useState();

    const InputMobile = (e) =>{
        setMobile(e.target.value);
    } 

    const InputPassoward = (e) =>{
        setPassoward(e.target.value);
    } 

    const InputConPassoward = (e) =>{
        setConfPassoward(e.target.value);
    } 

    const RegisterHandler = (event) =>{
        event.preventDefault();

        console.log(Mobile + "  " + Passoward + '   ' + ConfPassoward);

        setMobile("");
        setPassoward("");
        setConfPassoward("");
    }

    return(
        <WrapperWithNavber pageTitle="Register">
            <div className="mt-4  w-[100%] pb-20">
                <FormWrapper>
                    <Lable text='Mobile No' />
                    <Input placeholder='Enter Mobile'  inputHamdler={InputMobile} text={Mobile} />

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
        </WrapperWithNavber>
    )
}