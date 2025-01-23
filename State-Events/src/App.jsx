import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sculptureList } from './data'

function App() {

  const[index, setIndex] = useState(0);
  const[showMore, setShowMore] = useState(false);

  let sculpture = sculptureList[index];

  //console.log(sculpture);

  function handleNextClick (){
    if(index < sculptureList.length - 1){
      setIndex(index+1)
    } else {
      setIndex(0)
    }
    
  }

  function handlePrevClick (){
    if(index > 0){
      setIndex(index-1)
    } else {
      setIndex(sculptureList.length - 1)
    }
        
  }

  function handleShowMore (){
      setShowMore(!showMore);
  }
  

  return (
    <>
        <button onClick={ handlePrevClick }>Previous</button>
        <button onClick={ handleNextClick }>Next</button>
        

        <h2>
          <i> {sculpture.name} </i> by {sculpture.artist}
        </h2>

        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>

        <img src={sculpture.url} alt={sculpture.alt} width={300} height={300} />
        <div>
          <button onClick={ handleShowMore }>{(showMore) ? "Açıklama Gizle" : "Açıklama Göster"}</button>
        </div>
        <div className='desc'> 
        { (showMore) && <p>{sculpture.description}</p>} 
        </div>
        
        
    </>
  )
}

export default App
