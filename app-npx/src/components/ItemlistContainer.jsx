import React from 'react'

const ItemlistContainer = (props) => { 
  console.log(props)
  const{saludo}= props

  return (
    <div>

    <p>{saludo}</p>
    <p>{props.greeting}</p>
    </div>
)
}

export default ItemlistContainer