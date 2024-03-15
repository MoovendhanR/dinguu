import React, { useEffect, useState } from "react";

const Number4 = () => {
  return (
    <>
      <ExampleComponent1 />
      <ExampleComponent2 />
    </>
  );
};

export default Number4;
 
const useWindowSize=()=>{
    const [windowSize,setWindowSize]=useState(1920)
    useEffect(()=>{
     const handleWindowSizeChange=()=>{
        setWindowSize(windowSize.innerWidth)
     };
     window.addEventListener('resize',handleWindowSizeChange)
     return ()=>{
        window.removeEventListener("resize",handleWindowSizeChange)
     }
    },[])
    return windowSize;
}
function ExampleComponent1() {
    const windowSize = useWindowSize();
    // const [windowSize,setWindowSize]=useState(1920)
    // useEffect(()=>{
    //  const handleWindowSizeChange=()=>{
    //     setWindowSize(windowSize.innerWidth)
    //  };
    //  window.addEventListener('resize',handleWindowSizeChange)
    //  return ()=>{
    //     window.removeEventListener("resize",handleWindowSizeChange)
    //  }
    // },[])
  return (
    <>
      <h1>ExampleComponent1</h1>
    </>
  );
}

function ExampleComponent2() {
    const windowSize = useWindowSize();
    // const [windowSize,setWindowSize]=useState(1920)
    // useEffect(()=>{
    //  const handleWindowSizeChange=()=>{
    //     setWindowSize(windowSize.innerWidth)
    //  };
    //  window.addEventListener('resize',handleWindowSizeChange)
    //  return ()=>{
    //     window.removeEventListener("resize",handleWindowSizeChange)
    //  }
    // },[])
  return (
    <>
      <h1>ExampleComponent2</h1>
    </>
  );
}
