import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("aqua")

  return (
    <>
    <div className='w-full h-screen duration-200'style={{backgroundColor : color}}>
      <div className='flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3 bg-amber-100'>
      <div className='flex fixed flex-wrap justify-center gap-3 shadow-lg bg-emerald-500 px-3 py-2 rounded-3xl'>

          <button onClick={()=>setColor("white")} className='bg-white border-none px-4 py-1 rounded-full shadow-lg'>White</button>
          <button onClick={()=>setColor("black")} className='bg-black border-none px-4 py-1 rounded-full shadow-lg text-white'>Black</button>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-600 text-white'>Red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-green-600 text-white'>Green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-600 text-white'>Blue</button>
          <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-purple-600 text-white'>Purple</button>
          <button onClick={()=>setColor("SlateBlue")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-slate-400 text-white'>SlateBlue</button>
          <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-orange-500 text-white'>Orange</button>

        </div>
      </div>
    </div>



    </>
  )
}

export default App
