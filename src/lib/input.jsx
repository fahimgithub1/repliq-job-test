
export default function Input(props){

    return(
        <input className="block border-[2px] w-full p-2 rounded-lg mb-4 mt-2" 
               type="text" 
               placeholder={props.placeholder} 
               value={props.text}
               onChange={props.inputHamdler}
        />
    )
}