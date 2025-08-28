import WeatherAPI from "../components/ui/WeatherAPI"
import Topbar from "../layouts/Topbar"
import { useState } from "react";

export default function FrontPage() {

    const [city, setCity] = useState("");
    const [input, setInput] = useState("");
    const [cityCoords, setCityCoords] = useState(null);
    const handleSearch = () => {
        if(input.trim() !== "")
        {
            setCity(input.trim());
            setCityCoords(null);
        }
    }
    
    return (
        <div>
            <Topbar input={input} setInput={setInput} handleSearch={handleSearch} setCityCoords={setCityCoords}/>
            <div className="FrontPage pt-12 z-11 relative items-center">
                <div className="text-center pt-26 mr-28 ml-28 sm:mr-44 sm:ml-44 lg:mr-42 lg:ml-42">
                    <WeatherAPI value={city} coords={cityCoords}/>
                </div>
            </div>
        </div>
    )
}