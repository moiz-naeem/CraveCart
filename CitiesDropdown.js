import cities from "./Cities"
import { useState, useEffect } from "react"

const CitiesDropdown = ({setCoordinates}) =>{
    const [selectedCity, setselectedCity] = useState("")

    const handleChange = (event) =>{
        setselectedCity(event.target.value);
    }
    
    useEffect(() => {
        if (selectedCity) {
            const city = cities.find(c => c === selectedCity);
            if (city) {
                setCoordinates([city[1], city[2] ]);
                console.log(city[1], city[2])
            }
        }
    }, [selectedCity]);
    

    return(
        <div>
            <select value={selectedCity} onChange={handleChange}>
            <option value={cities.length}  disabled>Select a city</option>
                {cities.map(city => (
                    <option key={city[0]} value={city[0]}>
                     {city[0]}
                    </option>
                ))}
            </select>
        </div>
            
    )

}

export default CitiesDropdown;