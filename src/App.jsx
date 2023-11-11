import { useState } from 'react'
import './App.css'

function App() {
  const [box, setBox] = useState([])

  const [gradient, setGradient] = useState([])

  const first = Math.floor(Math.random() * 256)
  const second = Math.floor(Math.random() * 256)
  const third = Math.floor(Math.random() * 256)
  const forth = Math.floor(Math.random() * 256)
  const fifth = Math.floor(Math.random() * 256)
  const sixth = Math.floor(Math.random() * 256)

  const getColor = () => {
    return `rgb(${first}, ${second}, ${third})`
  }

  const getGradientColor = () => {
    return `rgba(${first}, ${second}, ${third}), rgba(${forth}, ${fifth}, ${sixth})`
  }

  return (
    <>
      <div className="container">

        <h1 className='text-center heading pt-5'>Rendom Color Generate App</h1>

        <p className='text-center pb-5'>Click Button and Choose your desire color</p>

        <div className="row mb-5">
          <div className="col-lg-6">

            <div className='mb-5 genBtn text-center'>
              <button onClick={() => setBox([...box, getColor()])} className='btn btn-primary'>Normal Color</button>
            </div>

            <div className="row">

              {
                box.map((item, index) => {
                  return (
                    <div className="col-lg-4 col-md-4 py-1" key={index}>
                      <div className="box" style={{background: item}}>
                        <h6>{item}</h6>
                      </div>
                    </div>
                  )
                })
              }

              </div>
          </div>


          <div className="col-lg-6">

            <div className='mb-5 genBtn text-center'>
              <button onClick={() => setGradient([...gradient, getGradientColor()])} className='btn btn-primary'>Gradient Color</button>
            </div>

            <div className="row">
              {
                gradient.map((item, index) => {
                  return (
                    <div className="col-lg-4 col-md-4 py-1" key={index}>
                      <div className="box" style={{background: `linear-gradient(${item})`}}>
                        <h6>{item}</h6>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
          <div className="text-center copy-write">
            <p>Create By - Parvez Rabbi</p>
          </div>
      </div>
    </>
  )
}

export default App
