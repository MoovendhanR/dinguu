import React from 'react'
import { Route, Routes } from 'react-router'
import Number12 from '../Components/Number12'
import Number11 from '../Components/Number11'
import Number10 from '../Components/Number10'
import Number9 from '../Components/Number9'
import Number8 from '../Components/Number8'
import Number7 from '../Components/Number7'
import Number6 from '../Components/Number6'
import Number5 from '../Components/Number5'
import Number4 from '../Components/Number4'
import Number3 from '../Components/Number3'
import Number2 from '../Components/Number2'
import Number1 from '../Components/Number1'

const  AllRoutes= () => {
  return (
    <>
    <Routes>
        <Route path="/number1" element={<Number12/>}/>
        <Route path="/number2" element={<Number11/>}/>
        <Route path="/number3" element={<Number10/>}/>
        <Route path="/number4" element={<Number9/>}/>
        <Route path="/number5" element={<Number8/>}/>
        <Route path="/number6" element={<Number7/>}/>
        <Route path="/number7" element={<Number6/>}/>
        <Route path="/number8" element={<Number5/>}/>
        <Route path="/number9" element={<Number4/>}/>
        <Route path="/number10" element={<Number3/>}/>
        <Route path="/number11" element={<Number2/>}/>
        <Route path="/number12" element={<Number1/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes