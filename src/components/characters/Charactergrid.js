import React from "react";
import Characteritem from "./Characteritem"
import Spinner from '../ui/Spinner'
const Charactergrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner /> 
    // <h1>Loading....</h1>
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <Characteritem key={item.char_id} item={item}></Characteritem>
      ))}
    </section>
  )
}

export default Charactergrid
