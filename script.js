const APIKEY = '7f6d39600afe0d9eead2599a9074cd61';

let apiCall = function(city) {
let url = `http://api.openweathermap.org/data/2.5/find?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) =>
     response.json().then((data) => {
         console.log(data)
         document.getElementById("city").innerHTML = data.list[0].name;
         document.getElementById("temp").innerHTML = "<i class='fa-solid fa-temperature-half'></i>" + data.list[0].main.temp + ' °';
         document.getElementById("humidity").innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.list[0].main.humidity + '%';
         document.getElementById("wind").innerHTML = "<i class='fa-solid fa-wind'></i>" + data.list[0].wind.speed + ' km/h';
        })
        ).catch(err => console.log("Erreur " + err));
}



        document.querySelector("form").addEventListener("submit", function(e) {
            e.preventDefault();
            let ville = document.getElementById("inputCity").value; 

            apiCall(ville);
        });

        apiCall("Liège");