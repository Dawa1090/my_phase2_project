import React from 'react'
import { useEffect, useState } from 'react';
import NewCuisineForm from '../components/NewForm';
import '../styles/Cuisine.css'

function Cuisine() {

  const [cuisines, setCuisines] = useState([])

  useEffect (() => {
    fetch("http://localhost:3000/cuisines")
    .then(response => response.json())
    .then(cuisines => setCuisines(cuisines))
  }, [])

  const onAddCuisine = event => {
    event.preventDefault();
    const newCuisine={
      name: event.target.name.value,
      image: event.target.image.value,
      description: event.target.description.value
    }

    fetch("http://localhost:3000/cuisines",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(newCuisine)
     })
     .then(response => response.json())
     .then(newCuisine => setCuisines([...cuisines, newCuisine]))
  }


  return (
    <div>
      <ul className='menu'>
      {cuisines.map(cuisine => {
      // console.log(cuisine.image)

         return  <li key={cuisine.id} className='cuisine-item'>
            <h2>{cuisine.name}</h2>
            <img src={cuisine.image} alt={cuisine.name} />
            <p>{cuisine.description}</p>
          </li>
      })}
      </ul>
      <NewCuisineForm onAddCuisine={onAddCuisine} />
    </div>
  )
}

export default Cuisine

