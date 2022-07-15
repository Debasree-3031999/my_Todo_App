import React from 'react'

function List(props){
    // console.log(props)
        const deleteItemFromList=key=>{
                const newlist=props.itemprop.filter(data=>{
                    return data.key!==key
                });
            props.propupdate(newlist)
        }
    return(
        <div >
            {/* <h3>hello</h3> */}
            {props.itemprop.map((data)=>{
                return(
                    <div key={data.key} className="item">
                            <p>{data.item}</p>

                            <button onClick={()=>deleteItemFromList(data.key)}>delete</button>
                    </div>      
                    
                ) 
            })}

        </div>
        
    )
}
export default List