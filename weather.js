
function getWeather(city){
    let p = fetch("https://goweather.herokuapp.com/weather/"+ city);
    p.then((response)=>{
        return response.json()
    }).then((data)=>{
        let name = document.querySelector(".searchbar").value;
        let des = data.description;
        let temp = data.temperature;
        let Wspeed = data.wind;
        document.querySelector(".heading").innerHTML = "Weather in "+name;
        document.querySelector(".description").innerHTML = des;
        document.querySelector(".temp").innerHTML = temp;
        document.querySelector(".Wspeed").innerHTML = "Wind speed "+Wspeed;
        console.log(data);
    })
}


document.querySelector(".btn").addEventListener("click",search);

function search(){
    getWeather(document.querySelector(".searchbar").value);
}
