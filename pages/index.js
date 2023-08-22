
import { useState } from "react"
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })




export default function Home() {

  
  // taking our function outside so that we can use state.
  const [list, setList] = useState([1, 2, 3])
  
  // we did not really pass any data up to our parent component when the onClick event is fired but we can easily do that through our function. 
  function addValue({incrementValue}) {

    // calculating the largest number in our current array and adding 1 to it.
    // To pass data from a parent to a child component, we pass them as attributes 
    // To pass data to from a child component is a little more indirect, we pass a function to the child component which the child component can call to pass data back to the parent component. 
    // for example now our addValue is passed as attribute to list items and the distructured back{incoming parameter} to the child component  as a received value then we can have a button that calls.  

    const newVal = Math.max(...list) + incrementValue;
    setList([...list, newVal]);


  }

  // const list = [1, 2, 3, 4] commenting our old object out since it is already included in useState
  // useList now becomes our new function that we can call from inside a javascript event to replace the old state with the new state.

  function ListItems({list, addValue}) {

    const increment = 3;

    return (
      <>

      <button onClick={() => addValue(increment)}>Add Item</button>
        { 
          list.map(id =>{
            return(
              <li key={id}>{id}</li>
              // the key helps react to keep track on what is rendered before the onclick is fired and also what if any changes happened after the onClick 
            )
          }) 
         }
      </>
    )
  }
  

  return (
    <ul>
      <ListItems list={list} addValue={addValue}/>
    </ul>
  )
}
