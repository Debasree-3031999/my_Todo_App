import { useState } from 'react'

import './App.css'
import List from './components/List.jsx'

    function App() {
        const [currentItem,setcurrentItem] = useState(null)
        const [itemList,updateItemList]=useState([])
          const onChangeHandler = (e)=>{
            // console.log("current value", e.target.value)
            setcurrentItem(e.target.value)
          }

          const addItemToList = ()=>{
              // console.log("List", itemList)
              updateItemList([...itemList,{item:currentItem,key:Date.now()}])

              setcurrentItem('')
            

          }

    return (
        <div className="App">
          <header className="header">
            <h2>....ToDo List....</h2>
          </header>
          <div className='wrapper'>
              <div className='input-wrapper'>
                <input placeholder='Type Your Todo Here' value={currentItem} onChange={onChangeHandler}/>
                <button onClick={addItemToList}>Add</button>
                
              </div>

            <List itemprop={itemList} propupdate={updateItemList}/>


          </div>

          
            


            
        </div>
    )
  }

export default App
