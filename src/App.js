import React, { Component, Suspense } from 'react';
import { FetchData } from './components/Api';
import { Card } from './components/Card';
import { Chart } from './components/GlobalChart';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// import { BarGraph } from './components/CountryGraph';
// import { FetchCountryData } from './components/CountryData';

import CountryList from './components/CountryList';


const resource = FetchData();

class App extends Component {
   

    render() {
       
        return (
            <div style={{textAlign:'center', backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'}}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h4" color="inherit">
                            Covid-19 Tracker
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div style={{marginTop: '20px'}}>         
                <Suspense fallback={<h2>Loading......</h2>}>
                    <ApiData />
                </Suspense>
                </div>
                <Container>
                <div style={{marginTop: '20px'}}>
                <Suspense fallback={<h2>Loading......</h2>}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={7}><Chart /></Grid>
                    <Grid item xs={12} md={5}><CountryList countries ={resource.countries} /></Grid>
                    </Grid>
                </Suspense>
                </div>
                </Container>
               
               <footer style={{backgroundColor:'#115293', color:'white', marginTop:'10px', paddingBottom:'10px', borderTop:'2px solid grey'}}>
                        <p>COVID19 TRACKER APP MADE USING REACT HOOKS (Suspense, useEffect, useState), Material-ui and Chart.js</p>
               </footer>
            </div>
        )
    }
}

const ApiData = () => {

    const data = resource.api.read();
    console.log(data)

    return (
        <>

        <Card confirmed={data.confirmed.value} recovered={data.recovered.value} 
        death={data.deaths.value} update={new Date(data.lastUpdate).toDateString()}/>

        
        </>
    //     <div>
    //         <h1>{data.confirmed.value}</h1>
    //         <h2>{data.recovered.value}</h2>
    // <h3>{new Date(data.lastUpdate).toDateString()}</h3>
    //     </div>
    )
}
//Exported and commented Out the Country List Component
//Country List
/////////////////////
////////////////////
/////////////////////

// const CountryList = () => {
//     const List = resource.countries.read();
//     const [country, setCountry] = useState();
//     const [countryData, setCountryData] = useState();
    
//     useEffect(() => {
//         if(country) {
//             return fetch(`https://covid19.mathdro.id/api/countries/${country}`)
//                     .then(res => res.json())
//                     .then(data => setCountryData(data))
//                     .catch(err => console.log(err))
//         }
       
//     }, [country])
//     console.log('The Country Details Are:',countryData)
//    //Make The Bar Graph 
//     ////////////////////

//     // if(countryData) {
//     //     const confirmed
//     // }

//     return(
//         <div>
           
           
//              <label htmlFor="countries">Choose a Country:</label>

//             <select id="CountryList" onChange = {(e) => {
                // console.log(e.target.value);
                // setCountry(e.target.value);
                
//                 // const data = FetchCountryData(e.target.value);
//                 // console.log(data.countryDetails.read());
                
//             }
//                 }>
//                 <option value="Global" disabled={true}>Global</option>
//                 {
//                   List.countries.map((country, index) => <option key={index}>{country.name}</option>)      
//                 }
//               </select> 
//               <div>
//                 <h1>COUNTRY DATA</h1>
//                 <h3>Country Name:{country !=='Global' && countryData ? country : ""}</h3>
//                 <h3>Confirmed:{country !=='Global' && countryData ? countryData.confirmed.value: ""}</h3>
//                 <h3>Recovered:{country !=='Global' && countryData ? countryData.recovered.value: ""}</h3>
//                 <h3>Deaths:{country !=='Global' && countryData ? countryData.deaths.value: ""}</h3>
//               </div>
//               <div>
//                   {/* <CountryChart countryData = {countryData}/> */}
//               </div>
//         </div>
//     )
// }

export default App;