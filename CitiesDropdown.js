import cities from "./Cities"
import { useState, useEffect } from "react"

const CitiesDropdown = ({setCoordinates}) =>{
    const [selectedCity, setselectedCity] = useState("")

    const handleChange = (event) =>{
            setselectedCity(event.target.value);
    }
    
    useEffect(() => {
        if (selectedCity) { 
            setCoordinates(cities[selectedCity]);

        }
    }, [selectedCity]);
    
    
    return(
        <div className="bg-orange-500 justify-center mx-4 my-4 m-3">
            <select className="flex justify-between w-40 border-orange-500 rounded-lg shadow-lg  p-1 mt-3" value={selectedCity} onChange={handleChange}>
            <option value=""  disabled>Select a city</option>
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