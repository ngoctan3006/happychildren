import React from 'react'


export default function Test(props) {
    props.datas = []
  return (
    <>
    {datas.map(data => (
        <div classname="test">
        {props.name}
        {props.age}
        </div>
    ))}
    </>
  )
}
