import React from 'react'
import { useParams } from 'react-router-dom'
import Data from './Data'
import movies from './Data'
const Details = () => {
    const {id} = useParams();
    return ( 
      <>
    <div>{id}</div>

  
    </>
  )
}

export default Details;
