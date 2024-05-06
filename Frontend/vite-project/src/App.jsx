import React from 'react'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <h2>Mern app</h2>
      </div>
    </>
  )
}

export default App
