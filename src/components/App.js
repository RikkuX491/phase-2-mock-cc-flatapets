import Header from "./Header";
import SearchBar from "./SearchBar";
import PetsContainer from "./PetsContainer";
import {useState, useEffect} from 'react';

function App() {

  const [pets, setPets] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch('http://localhost:4000/pets')
    .then(response => response.json())
    .then(petData => setPets(petData))
  }, [])

  function updateSearchText(event){
    setSearchText(event.target.value)
  }

  const filteredPets = pets.filter((pet) => {
    return pet.name.toLowerCase().includes(searchText.toLowerCase()) || pet.animal_type.toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <div className="app">
      <Header />
      <SearchBar updateSearchText={updateSearchText} />
      <PetsContainer pets={filteredPets} />
    </div>
  );
}

export default App;