

export const FetchData = () => {
    const apiRes = FetchPromise();
    const countryList = FetchCountries();

    return {
        api : wrapPromise(apiRes),
        countries : wrapPromise(countryList)
    }
}


const wrapPromise = (promise) => {
    let status = 'pending';
    let result;

    let suspender = promise.then(
        data => {
            status = 'success';
            result = data;
        },
        err => {
            status = 'error';
            result = err;
        }
    )

    return {
        read() {
            if(status === 'pending') {
                throw suspender;
            }
            else if(status === 'error') {
                throw result;
            }
            else if(status === 'success') {
                return result;
            }
        }
    }
}

const FetchPromise = () => {
    return fetch('https://covid19.mathdro.id/api')
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.log(err))
}

//Fetching Countries
////////////     
//      


const FetchCountries = () => {
    return fetch('https://covid19.mathdro.id/api/countries')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
}

