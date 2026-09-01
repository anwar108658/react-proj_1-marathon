import { useState } from 'react'
import { Button } from './components/ui/button'
import logo from './assets/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button variant={'secondary'}>hello</Button>
        <img src={logo} width={70} className='' alt="Logo" />
      </div>
    </>
  )
}

export default App
