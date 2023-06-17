const API_KEY=`6692653b019c7c54eeae000f22baefeb`;

const loadTemparature=(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>console.log(data))
    
}

loadTemparature('Dhaka')