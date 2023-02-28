class OpenWeather {
    constructor(apikey, units = 'imperial') {
        this.apikey = apikey
        this.units = units
    }

    async  getWeather(zip) {
        const { apikey, units } = this
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}&units=${units}`
    
        const res = await fetch(path)
        const json = await res.json() 
        
        return json
    }
}



