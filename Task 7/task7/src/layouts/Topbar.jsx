
export default function Topbar({input, setInput, handleSearch, setCityCoords})
{
    const accessGeolocation = () => {
        if(!navigator.geolocation) {
            alert("Geolocation is not accessible by your browser!")
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude} = position.coords;
                setCityCoords({ lat: latitude, long: longitude });
            },

            (error) => alert("Could not access your location: " + error.message)
         );
    };

    return (
        <div>
            <div className="Topbar z-12 fixed w-screen bg-gradient-to-r from-blue-700 to-blue-300 border-white text-white flex flex-row items-center justify-between h-30 shadow-lg">
                <div className="w-screen flex flex-row space-x-3 items-center justify-between">
                    <p className="text-lg p-2 ml-2">All the weather details you need!</p>
                    <h1 className="font-bold text-4xl">MyWeatherApp</h1>
                    <input 
                    
                    className="text-[14px] bg-[rgba(255,255,255,0.6)] text-black p-2 mr-6 ml-2 hover:cursor-text border placeholder:text-black" placeholder=" Search City" 
                    
                    value = {input}

                    onChange={(e) => {setInput(e.target.value)}} 

                    onKeyDown={(e) => {if (e.key === "Enter" && handleSearch()) {e.preventDefault(); setInput("");}}}></input>
                </div>
                <div>
                    <i className="absolute right-29 text-white top-12 fa-solid fa-location mr-24 text-2xl lg:hover:cursor-pointer hover:text-3xl duration-300 " title="Use your location" onClick={accessGeolocation}></i>
                    </div>
            </div>
        </div>
    )
}