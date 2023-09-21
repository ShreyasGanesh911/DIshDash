import { useEffect, useState } from "react";
import AppContext from "./AppContext";

    const link = 'http://localhost:5000/user'
const AppState =(props)=>{
    const [cart,setCart]=useState(JSON.parse(
        localStorage.getItem(
            "cart"
        )
    ) || [])

    const [cartCount, setCartCount] = useState(0);
    const fullList=[];
    const [list,setList] = useState(fullList)
    const [resList,setResList] = useState(fullList)
    const resturantList = async(id) =>{
        try{
            const response = await fetch(`${link}/menu?resId=${id}`, {
            method: "GET",
            headers:  {
              "Content-Type": "application/json",
              
            },
            });
            const json = await response.json();
            setList(json)
        }catch(e){
            console.log(e)
        }
            
        
    }

    const displayRes = async()=>{
        try{const response = await fetch(`${link}/displayRes`, {
            method: "GET",
            headers:  {
              "Content-Type": "application/json",
            },
            });
            const json = await response.json();
            setResList(json)
        }catch(e){
            console.log(e)
        }

    }
    useEffect(()=>{
      
    },[setCart])
    return (
        <AppContext.Provider value={{cart , resturantList,list,resList,displayRes,setCart,cartCount, setCartCount}}>
      {props.children}
    </AppContext.Provider>
    )
}
export default AppState;