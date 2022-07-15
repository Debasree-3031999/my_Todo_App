import React from "react";
function Rlist2(props){
    console.log(props)
    const deleteItemFromList=(key)=>{

    }

    return (
        <div>
            <div className= "item">
        {props.propitem.map((data)=>{
            return <p>{data.item}</p>
            <button onClick={()deleteItemFromList(data.key)}>delete</button>
        })}
        </div>


            </div>
        
    )

}


export default Rlist2