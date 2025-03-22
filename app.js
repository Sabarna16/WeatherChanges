const button=document.getElementById("button");
const countryName=document.getElementById("countryname");
const Weather=document.getElementById("weather");
let count=0;

button.onclick = () => {
    axios.get('https://www.freetestapi.com/api/v1/weathers')
    .then(function (response){
        button.textContent = "Next";
        Weather.textContent = "";
        console.log(response.data[count].city);
        countryName.textContent = response.data[count].city;
        setTimeout(function(){
            
            Weather.textContent = response.data[count].weather_description;

        },1000);
        count++;
})
.catch(function(error){
    console.log(error);

});
};


