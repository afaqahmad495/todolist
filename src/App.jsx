import React, { useState } from 'react'
import "./App.css"
const App = () => {

const[title , setTitle] = useState("")
const[desc , setDesc] = useState("")
const [mainTask , setMainTask ] = useState([])

const submitHandler = (e)=>{
  e.preventDefault()
  setMainTask([...mainTask ,{title , desc}])
  setTitle("")
  setDesc("")
  
}
 const deleteHandler = (i)=>{
   var copytask = [...mainTask]
   copytask.splice(i,1)
   setMainTask(copytask)
 }

let renderTask =<h1>No Task Available</h1>;
if(mainTask.length>0)
{
  renderTask = mainTask.map((t,i) => {
    return (
      <li key={i} className='flex item-center justify-between  '>
      <div className='flex items-center  justify-between w-2/3 '>
         <h5 className='text-2xl font-semibold'>{t.title}</h5>
         <h6 className='text-xl font-semibold'>{t.desc}</h6>
         
         </div>
         <button onClick={()=>{
          deleteHandler(i)}}
           className='bg-red-400 text-white px-3 py-2 flex m-1 font-bold rounded '>Delete</button>
         </li>
    );
  })
}





  
  return (
    <>
    <div className=' '>
      <h1 className="bg-black text-white py-4 text-4xl text-center font-bold">My Todo List</h1>
      </div>

      <form onSubmit={submitHandler} >
        
        <input type="text" 
        className='text-2xl border-zinc-800 border-4 m-5 px-6 py-3 '
        placeholder='Enter Task Here' 
        value={title}
        onChange={(e)=>{
           setTitle(e.target.value)
        }}
        />
        <input type="text" 
        className='text-2xl border-zinc-800 border-4 m-5 px-6 py-3 '
        placeholder='Enter Description Here' 
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
        />
        <button className='bg-black text-white p-4 text-2xl font-bold m-5 '>Add Task</button>
      </form>
      
    <div className='p-5 bg-slate-300'>
      <ul>
      {renderTask}
      </ul>
      </div>

      </> 
  )
}

export default App
