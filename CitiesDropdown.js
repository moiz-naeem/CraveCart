import cities from "./Cities"
import { useState, useEffect } from "react"

const CitiesDropdown = ({setCoordinates, coordinates}) =>{
    const [selectedCity, setselectedCity] = useState("")

    const handleChange = (event) =>{
            setselectedCity(event.target.value);
    }
    
    useEffect(() => {
        if (selectedCity) {
            console.log(cities[selectedCity])
            setCoordinates(cities[selectedCity]);
            console.log("coordinates:" + coordinates);

        }
    }, [selectedCity]);
    

    return(
        <div>
            <select value={selectedCity} onChange={handleChange}>
            <option value={cities.length}  disabled>Select a city</option>
                 {Object.keys(cities).map((city) => (
                    <option key={city} value={city}>
                     {city}
                    </option>
                 ))}
            </select>
        </div>
            
    )

}

export default CitiesDropdown;