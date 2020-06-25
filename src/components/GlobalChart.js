import React, { useState, useEffect } from 'react';
// import { FetchData } from './Api';
import { Line } from 'react-chartjs-2'; 
import axios from 'axios';

const fetchData = async () =>{  
    try{  
        const {data}  = await axios.get('https://covid19.mathdro.id/api/daily');  
        
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));  
    }  
    catch(error){  
        return error  
    }  
};  

export const Chart = () => {
    const [data, setData] = useState([]);
   
    useEffect(() => {
        const fetchAPI = async()=>{  
            setData(await fetchData());  
            }  
        fetchAPI();
        
    }, []);
    console.log(data);
    const lineChart =(  
        data.length ? (   
            <Line data={{  
                            labels: data.map(({date}) =>  date),  
                            datasets :[{  
                                data :  data.map(({confirmed}) =>  confirmed),  
                                label: 'Infected',  
                                borderColor: '#3333ff',  
                                fill: true,  
                            },  
                            {  
                                data :  data.map(({deaths}) =>  deaths),  
                                label: 'Deaths',  
                                borderColor: 'red',  
                                backgroundColor: 'rgba(255, 0, 0, 0.5)',  
                                fill: true,  
                            }]  
                        }}  
                        options={ {  
                            scales : { xAxes : [ { gridLines : { display : false } } ], yAxes : [ { gridLines : { display : false } } ] }  
                        } }  
                        />):null  
                        );  

    return (
        <div>
            <h1>GLOBAL DATA</h1>
            {lineChart}
        </div>
    )
    
}