import React, { useState, useEffect } from 'react';
// import Countup from 'react-countup';
import { Bar } from 'react-chartjs-2'; 
//importing Bar Chart


const CountryList = ({countries}) => {
    const List = countries.read();
    const [country, setCountry] = useState();
    const [countryData, setCountryData] = useState({
        confirmed: 0,
        recovered: 0,
        deaths: 0
    });

    
    
    useEffect(() => {
        if(country) {
            return fetch(`https://covid19.mathdro.id/api/countries/${country}`)
                    .then(res => res.json())
                    .then(data => setCountryData(data))
                    .catch(err => console.log(err))
        }
       
    }, [country])
    console.log('The Country Details Are:',countryData)
   //Make The Bar Graph 
    ////////////////////

    // if(countryData) {
    //     const confirmed
    // }

    return(
        <div style={{textAlign: 'left'}}>
           
           
             <label htmlFor="countries">Choose a Country:</label>

            <select id="CountryList" onChange = {(e) => {
                console.log(e.target.value);
                setCountry(e.target.value);
                
                // const data = FetchCountryData(e.target.value);
                // console.log(data.countryDetails.read());
                
            }
                }>
                <option value="Global" disabled={true}>Global</option>
                {
                  List.countries.map((country, index) => <option key={index}>{country.name}</option>)      
                }
              </select> 
              <div>
                <h2>COUNTRY DATA</h2>
                <h3>Country Name:{country !=='Global' && countryData ? country : ""}</h3>
                {/* <h3>Confirmed:<Countup start={0} end ={countryData.confirmed.value} separator={","}/></h3>
                <h3>Recovered:<Countup start={0} end ={parseInt(countryData.recovered.value)} separator={","}/></h3>
                <h3>Deaths:<Countup start={0} end={parseInt(countryData.deaths.value)} separator={","}/></h3> */}
               
                <div>
                <Bar  
     data={{  
         labels: ['Infected', 'Recovered', 'Deaths'],  
         datasets:[{  
             label:'People',  
             backgroundColor:['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)' ],  
             data:[countryData.confirmed.value, countryData.recovered.value, countryData.deaths.value]  
         }]  
     }}  
     options={{  
         legend:{display:false},  
         title: {display:true, text:`current state in ${country}`}  
     }}  
     />    </div>    
                 <h5>Last Updated: {new Date(countryData.lastUpdate).toDateString()}</h5>
                
                
                
                {/* <Chart data ={countryData ? countryData : {
                    confirmed: 0,
                    recovered: 0,
                    deaths: 0
                }}/> */}
              </div>
              <div>
                  {/* <CountryChart countryData = {countryData}/> */}
              </div>
        </div>
    )
}

export default CountryList;