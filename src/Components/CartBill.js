import React from 'react'

export default function CartBill(props) {
    const myFunc=(a)=>{
        let totalReturnedPrice = 0
        const cost=Number(props.cost);
        switch(a){
            case '1':
                totalReturnedPrice=cost;
                break;
            case '2':
                totalReturnedPrice=Math.floor(cost/6)
                break;
            case '3':
                totalReturnedPrice=cost+Math.floor(cost/6)
                break;
            default:
                totalReturnedPrice=cost+Math.floor(cost/6)
            }
        ;
        return Number(totalReturnedPrice);
        }
    
  return (
    <div id='bill-content-header' className={`  bill-content-header ${props.typeCost==='3'? 'border-top':''} `}>
    <div id='bill-content' className="bill-content greyFont" >{props.msg}</div>
    <div className="bill-content" id='bill-content-none'></div>
    <div id='bill-content' className="bill-content Roboto greyFont"  >₹ {myFunc(props.typeCost)} </div>
   </div>
  )
}
