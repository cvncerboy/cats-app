import React, {useState, useEffect} from 'react';
import Header from "./Header/Header";
import Dropdown from './Dropdown/Dropdown';
import Image from './Image/Image';
import Desc from './Desc/Desc';

function App() {
  const [breeds, setBreeds] = useState([]);
  const [cats, setCats] = useState([]);
  useEffect( async () => {
    const url = 'https://api.thecatapi.com/v1/breeds';
    const response = await fetch(url);
    const resData = await response.json();
    setBreeds(resData);
  }, [])
  const getImage = async (breedsId) => {
    const apiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedsId}&limit=1`;
    const response = await fetch(apiUrl);
    const resData = await response.json();
    setCats(resData);
  }
  useEffect(() => {
    getImage('abys')
  }, [])
  const handleOnChange = (event) => {
    const breedsId = event.target.value;
    getImage(breedsId)
  }
  return (
    <div>
      <Header />
      <Dropdown breeds={breeds} handleOnChange={handleOnChange}/>
      <Image cats={cats}/>
      <Desc cats={cats}/>
    </div>
  );
}

export default App;
