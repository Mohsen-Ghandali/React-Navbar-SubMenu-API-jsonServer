import { useState } from "react";
import Header from "../Header/Header";
import { useEffect } from "react";

const App = () => {

    let [header, setHeader] = useState(null)

    const fetchHeader = async () => {
        try {
            let data = await fetch("http://localhost:3030/menu")
            let res = await data.json()
            setHeader(res)
        } catch (error) {
         console.log(error.message);
        }
    }

    useEffect(() => {
   
        fetchHeader()

    }, [])
    
    return (
        <>
            <Header header={header} />
        </>
    );
}

export default App;
