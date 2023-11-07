function Pet(){    
    return (
        <li className="pet">
            <img
                src={"RENDER IMAGE"}
                alt={"RENDER PET NAME"}
            />
            <h4>{"CONDITIONALLY RENDER NAME OR ANIMAL TYPE"}</h4>
            <p>
                {
                    "CONDITIONALLY RENDER WHETHER THE PET IS FROM A PET SHOP OR FROM THE WILD"
                }
            </p>
        </li>
    )
}

export default Pet;