import React from 'react'
import './NewCollections.css'
import newcollections from '../assets/newcollections';
import Items from '../Items/Items';
 const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr/>
        <div className='collections'>
            {newcollections.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
        </div>
    </div>
  )
}
export  default NewCollections;