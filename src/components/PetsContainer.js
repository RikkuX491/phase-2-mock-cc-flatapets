import Pet from "./Pet"

function PetsContainer({pets}){

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} />
    })

    return (
        <ul className="pet-list">
            {petComponents}
        </ul>
    )
}

export default PetsContainer;