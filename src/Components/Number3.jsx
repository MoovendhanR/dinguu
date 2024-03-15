import React from 'react'

const Number3 = () => {
  return (
    <>
    <ServerComponentExample/>
    </>
  )
}

export default Number3 


function ServerComponentExample(){
    // in servercomponent this all won't work
    // useState();
    // useEffect();
    // window.alert();
    // localStorage.getItem("test");
    return<div>
        ServerComponentExample
    </div>
}