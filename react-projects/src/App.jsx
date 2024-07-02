import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accordion from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        {/*
          <Accordion/>
          <StarRating total_stars={10}/> */}
        
        
        <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} />
      </div>
    </>
  )
}

export default App
