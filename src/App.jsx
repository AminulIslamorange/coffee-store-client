import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {
 const loadedCoffees=useLoaderData();
 const [coffees,setCoffees]=useState(loadedCoffees)

  return (
    <div className='m-20'>
     
      <h1 className='text-6xl  text-purple-800 text-center'>Coffee Store{coffees.length}</h1>
     <div className='grid md:grid-cols-2 gap-5'>
     {
        coffees.map(coffee=><CoffeeCard key={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}></CoffeeCard>)
      }
     </div>
     
     
    </div>
  )
}

export default App
