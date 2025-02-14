import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])


  const todoAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
    console.log('todo added  ')
  }

  const todoEdit = (e, id) => {

    let t = todos.filter(i=>i.id === id)
    settodo(t[0].todo)

    let newtodos = todos.filter(value=>{
      return value.id !==id;
    });
 
    settodos(newtodos)

  }

  const todoDelete = (e, id) => {
    
    let newtodos = todos.filter(value=>{
      return value.id !==id;
    });
 
    settodos(newtodos)


  }
  const handleChange = (e) => {
    settodo(e.target.value)
  }


  const handleOnChange = (e) => {

    const id = e.target.name;
    console.log(`id is ${id}`)
    let index = todos.findIndex(item => {
      return item.id === id;

    })
    console.log(`index is ${index}`)
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    settodos(newtodos)

  }
  return (
    <>
      <div className="flex justify-between items-center bg-violet-500 h-[10vh] text-xl">
        <div className="logo ml-10 font-bold hover:text-gray-700 hover:cursor-pointer">
          ITodo
        </div>
        <ul className='flex gap-4 mr-9 font-medium '>
          <li className='hover:text-gray-700 hover:cursor-pointer'>My Todo</li>
          <li className='hover:text-gray-700 hover:cursor-pointer'>My works</li>
        </ul>
      </div>
      <div  className=" todo  m-auto bg-violet-100 mt-10 rounded-2xl h-[80vh] w-[70%] ">
        <div className='mb-7'>
          <input onChange={handleChange} value={todo} className='ml-10 pl-2 mt-10   shadow-lg shadow-cyan-500/50  w-[70%] h-10 outline-none rounded-xl text-xl' type="text" placeholder='Add New ' />
          <button onClick={todoAdd} disabled={todo.length<=3} className='w-17 ml-4 hover:text-gray-700 disabled:bg-red-700 transition-all hover:cursor-pointer  p-2 rounded-2xl  bg-cyan-500 shadow-lg shadow-cyan-500/50  text-white '>Add</button>
        </div>
        <h2 className='ml-10 font-extrabold text-3xl text-gray-400 mb-3  '>Your Todo</h2>

        {todos.length ==0 && <div className='w-[100%] ml-10 font-bold text-2xl text-gray-600 '>No Todos... </div>}
        {todos.map(value => {
          return <div key={value.id} className='flex gap- justify-between bg-violet-100 p-1   w-[100%]  items-center'>
            <div className='flex gap-5 text-xl font-mono'>
              <input name={value.id} onChange={handleOnChange} className='hover:cursor-pointer' type="checkbox" checked={value.isCompleted} />
              <div className={value.isCompleted  ? "" : "line-through"}  >{value.todo}</div>
            </div>
            <div className='pr-20 md:flex md:flex-wrap md:'>
              <button onClick={(e)=>{todoEdit(e,value.id)}} className=' mr-2 hover:text-white hover:bg-red-800 hover:cursor-pointer  p-2 rounded-xl   bg-cyan-500 shadow-lg shadow-cyan-500  text-white'><FaEdit />
              </button>
              <button onClick={(e)=>{todoDelete(e,value.id)}} className='  hover:text-white hover:cursor-pointer hover:bg-red-900  p-2 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/50  text-white'><MdDelete />
              </button>
            </div>
          </div>
        })}
      </div>
    </>
  )
}


export default App








