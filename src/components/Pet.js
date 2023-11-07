import {useState} from 'react'

function Pet({pet}){

    const [displayName, setDisplayName] = useState(true)
    
    function toggleDisplayName(){
        setDisplayName(!displayName)
    }
    
    return (
        <li className="pet">
            <img
                src={pet.image}
                alt={pet.name}
                onClick={toggleDisplayName}
            />
            <h4>{displayName ? pet.name : pet.animal_type}</h4>
            <p>
                {
                    pet.fromPetShop ? "From a Pet Shop" : "From the wild"
                }
            </p>
        </li>
    )
}

export default Pet;