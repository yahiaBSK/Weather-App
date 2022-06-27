let degreeTxt = document.querySelector("#degree")
let descriptionTxt = document.querySelector("#description")
let cityTxt = document.querySelector("#city")
let mainTxt = document.querySelector("#main")
let search = document.querySelector("#search")
let searchBtn = document.querySelector("#searchBtn")
let iconView = document.querySelector("#icon")
let humidityTxt = document.querySelector("#humidity")
let windSpeedTxt = document.querySelector("#wind-speed")
let windDegreeTxt = document.querySelector("#wind-degree")
let pressureTxt = document.querySelector("#pressure")
let weather = document.querySelector(".weather")
let container = document.querySelector(".container")
let countryTxt = document.querySelector("#country")
let countryPng = document.querySelector("#country-png")
let errorDiv = document.querySelector(".error")







/* COUNTRY API */

/*
let searchCountry = {
	
 	
	
	fetchCountry: function (){
		fetch("https://countriesnow.space/api/v0.1/countries/")
	.then((Response) => Response.json())
	.then((Cdata) => this.getCountry(Cdata))
	},
	
	getCountry: function (Cdata){
		
		let cityValue = search.value.charAt(0).toUpperCase() + search.value.slice(1);

		
		for (var i = 0; i < Cdata.data.length; i++) {
		
			let findCity1 = Cdata.data[i].cities.indexOf(cityValue)
		
			let findCity2 = Cdata.data.findIndex((el) => el.cities[findCity1] == cityValue)
		
		
		
			if (findCity2 > -1) {
		
				countryTxt.innerText = Cdata.data[findCity2].country
		
			}
		
		
		
		}
		
	},
	
}
*/




/* WEATHER API */

let weatherApp = {
	
	
	apiKey: "c17414574e8f136957185be9e1d42b39",
	
	weatherFetch: function (city){
		fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ this.apiKey)
		.then((Response)=>Response.json())
		.then((data)=>this.weatherDisplay(data))
	},
	
	
	weatherDisplay: function (data){
		
		let { cod } = data
		
		if (cod !== "200") {
			
			if (cod == "404" || cod == "400") {
				
				weather.style = "display: none"
				errorDiv.style = "display: block"
				container.style = "height: 230px"
				
			}
		} 
		
		
		if(cod == "200") {
		
		let { name } = data
		let { main, description, icon } = data.weather[0]
		let { temp, humidity, pressure } = data.main
		let { deg, speed } = data.wind
		let { country } = data.sys
		
		
		degree.innerText = Math.trunc(temp-273.15)
		cityTxt.innerText = name
		mainTxt.innerText = main
		descriptionTxt.innerText = description
		iconView.src = "https://openweathermap.org/img/wn/"+ icon +".png"
		iconView.style = "visibility: visible"
		humidityTxt.innerText = humidity + " %"
		pressureTxt.innerText = pressure + " Pasc"
		windSpeedTxt.innerText = speed + " KM/h"
		windDegreeTxt.innerText = Math.trunc(deg) + " °C"
		countryTxt.innerText = country
		countryPng.src = "https://flagcdn.com/w2560/" + country.toLowerCase() + ".png"
		
		
		errorDiv.style = "display: none"
		weather.style = "display: block"
	 	container.style = "height: 600px"
	 	search.blur()
		
	 /*if ( ) {
	 	alert('no city here')
	 }else{
	 	weather.style = "display: block"
	 	container.style = "height: 600px"
	 	search.blur()
	 }*/
			
			
		}
	
	
	},
}

searchBtn.addEventListener('click', ()=>{
	
 /* searchCountry.fetchCountry() */
	 weatherApp.weatherFetch(search.value)
})

	

search.addEventListener('keyup', function(e){
	if (e.key == "Enter") {
		
		weatherApp.weatherFetch(search.value)
		
}})



/* COUNTRIES API */


