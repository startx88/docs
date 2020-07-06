import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


const useMedia = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);
  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    let listener = () => setMatches(media.matches);
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [query]);

  return matches
}


function App() {
  let small = useMedia('(max-width:767px)')
  let large = useMedia('(min-width:768px)')
  console.log(large, small)
  return (
    <>
      <h1>{small ? 'Hello Small' : 'small'}</h1>
      <h1>{large ? 'Hello Large' : 'large'}</h1>
    </>
  )
    ;
}

export default App;
