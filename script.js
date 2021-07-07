var input=document.querySelector('input')
var form=document.querySelector('form')
var ul=document.querySelector('ul')
var value=''
input.addEventListener('keyup',(e)=>{
    value=e.target.value
    // console.log(value);
    e.preventDefault()
    ul.style.padding='20px'
    fetchData()
   
})
function fetchData(){
// fetch(` https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true.`)
fetch(`https://disease.sh/v3/covid-19/countries`)
.then((res)=>res.json())
.then((data)=>search(data))
}
function search(data){
    // console.log(data[0].country);
var  Filter=   data.filter(element => {
    //  console.log(element.country);   
    return   element.country.match(RegExp(value,'gi'))
    
     
    });
    // console.log(Filter);
    var add=''
    Filter.forEach(element => {
        // console.log(element.country);
        add+=`<div class='adddiv'><li><h1><span>Country:</span> ${element.country}</h1></li>
        <li><h1><span>Flag:</span><img src='${element.countryInfo.flag}'class='flagimg'></h1></li>
        <li><h1><span>Continent:</span> ${element.continent}</h1></li>
        <li><h1><span>Active Cases:</span> ${element.active}</h1></li>
        <li><h1><span>Total Cases:</span> ${element.cases}</h1></li>
        <li><h1><span>Total Deaths:</span> ${element.deaths}</h1></li>
        <li><h1><span>Recovared Cases:</span> ${element.recovered}</h1></li>
        <li><h1><span>Tests:</span> ${element.tests}</h1></li>
        <li><h1><span>Today Cases</span> ${element.todayCases}</h1></li>
        <li><h1><span>Today Deaths:</span> ${element.todayDeaths}</h1></li>
        <li><h1><span>Today Recovered:</span> ${element.todayRecovered}</h1></li>
        <li><h1><span>Total Population:</span> ${element.population}</h1></li></div>`
        ul.innerHTML=add
        
    });
    
    // ul.innerHTML=`${Filter.country}`
}
// function getdata(gtada){
    
// }
// getdata(gtada)