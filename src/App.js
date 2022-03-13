import './App.css';
import { useState, useEffect } from 'react'
import Gallery from './Gallery';
import ButtonBar from './ButtonBar';
import Title from './Title';

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

// handle Gallery component
  useEffect(() => {
    if (data.artistDisplayName) {
      document.title = data.artistDisplayName
    } else {
      document.title = 'Welcome to ArtWorld'
    }
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])

// handle ButtonBar component  
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

// add code later for onClick with picture  

  return (
    <div className="App">
       <Title title={data.title} />
      <Gallery
        objectImg={data.primaryImage}
        artist={data.artistDisplayName}
        title={data.title}
      />
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
};


export default App;