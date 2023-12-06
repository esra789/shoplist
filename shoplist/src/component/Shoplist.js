import React from 'react'
import ShopCard from './ShopCard'

function Shoplist({props}) {
    console.log(props)
  return (
    <div style={{display:"flex",justifyContent:"space-around",marginTop:"30px"}}>
        {props.map(Element=><ShopCard props={Element}/>)}
    </div>
  )
}

export default Shoplist