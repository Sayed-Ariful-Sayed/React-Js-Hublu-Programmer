import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import From from './From';
import MyChild from './Component/MyChild';
import AppHome from './Component/AppHome';
import UseEffect from './Component/UseEffect';
import FetchDat from './Component/FetchDat';
import ShowImg from './Component/ShowImg';
const App = () => {
  const Parentdata = "I Am Your Farent"
 const DataPassing = (para) =>{
  console.log(para)
 }

  return (
    <div className='container'>
      {/* <From/> */}
      {/* <MyChild Title={Parentdata} onMathod={DataPassing} /> */}
      {/* <AppHome/> */}
      {/* <UseEffect/> */}
      {/* <FetchDat/> */}
      <ShowImg/>
    </div>
  )
}

export default App
