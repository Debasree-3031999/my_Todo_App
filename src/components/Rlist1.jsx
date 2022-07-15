import React from 'react'
import { useState } from 'react'

import './App.css'
import Rlist2 from './components/Rlist2'


function Rlist1(){
const [currentItem,setcurrentItem]=useState(null)
const [itemList,updateItemList]=useState([])
const onChangeHandler = (e) =>{
 setcurrentItem(e.target.value)
}

const AddItemToList =()=>{
    updateItemList([...itemList, {item:currentItem,key:Date.now()}])
    setcurrentItem(" ");
}


    return(
        <div className="App">
            <header className="header">
               <h2>....ToDo List....</h2>
            </header>
            <div className='wrapper'>
                    <div className='input-wrapper'>
                    <input placeholder='type your todo here' value={currentItem} onChange={onChangeHandler}/>
                    <button onClick={AddItemToList}>Add</button>
                    
                    </div>

        
            <Rlist2 propitem={itemList} propUpdate={updateItemList}/>

            </div>

            
            


            
        </div>
    )

}








export default Rlist1


















