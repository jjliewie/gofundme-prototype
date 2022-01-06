import React, { useState } from "react";
import Paypal from "./Paypal";
import Fbase from "../../components/Fbase";
import { collection, addDoc, getDocs} from "firebase/firestore";


const Homepage = () => {
    const [state, setState] = useState("hello world");

    const onChange_txtBox = (e) => {
        setState(e.target.value)
    }

    const onClickTest = async (e) => {
        try{
            const docRef = await addDoc(collection(Fbase, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815,
                state: state
              });
              console.log("Document written with ID: ", docRef.id);
        }
        catch(e){
            console.log(e)
        }
    }

    const onClickRead = async(e) => {
        try{
            const querySnapshot = await getDocs(collection(Fbase, "users"));
                querySnapshot.forEach((doc) => {
                console.log(doc.data());
            });
        }
        catch(e){
            console.log(e)
        }
    }

    
    return (
        <div>
          <input type="text" style={{width:170}} onChange={onChange_txtBox}/>
        {state} 
        <Paypal/>

        <button onClick={onClickTest}>click me</button>
        <button onClick={onClickRead}>read</button>

        </div>
    )
}

export {Homepage};